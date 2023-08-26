"use client"

import {request, gql} from "graphql-request"
import * as types from "../../graph/graphql"
import { useQuery, UseQueryResult} from "@tanstack/react-query"
import ForecastCard from "./ForecastCard"
import { useState } from "react"

interface ExtendedForecastProps {
  lat: String
  lon: String
}

interface WeatherData {
  currentWeather: types.CurrentWeather
}

const localWeatherDataQuery = gql`
  query localWeatherData($lat: String!, $lon: String!) {
    currentWeather(lat: $lat, lon: $lon) {
      weather {
        id
        type
        description
        icon
      }
      atmosphere {
        temperature {
          real
          min
          max
        }
        pressure
        humidity
      }
      conditions {
        wind {
          speed
          degree
          gust
        }
        sunset
        sunrise
      }
    }
  }
`

const ExtendedForecast: React.FC<ExtendedForecastProps> = ({
  lat,
  lon
}) => {
  const [currentWeather, setCurrentWeather] = useState<types.CurrentWeather | null>(null)

  const queryVariables = {lat, lon}

  const loadLocalWeatherData = (): Promise<WeatherData> => {
    return request("http://localhost:8080/query",
      localWeatherDataQuery,
      queryVariables,
    )
  }

  useQuery({
    queryKey: ['localWeather'],
    queryFn: async () => {
      const data = await loadLocalWeatherData()
      setCurrentWeather(data.currentWeather)
    },
  })

  return (
    <div className="grid grid-flow-col grid-cols-3 gap-8 pt-24">
      <ForecastCard weekday="MON" current={currentWeather!}/>
      <ForecastCard weekday="TUE" current={currentWeather!}/>
      <ForecastCard weekday="WED" current={currentWeather!}/>
    </div>
  )
}

export default ExtendedForecast