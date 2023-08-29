"use client"

import {request, gql} from "graphql-request"
import * as types from "../../graph/graphql"
import { useQuery } from "@tanstack/react-query"
import ForecastCard from "./ForecastCard"
import { useState } from "react"
import CycledContent from "../containers/CycledContent"

interface ExtendedForecastProps {
  lat: String
  lon: String
}

interface ForecastData {
  forecast: types.Forecast[]
}

const localWeatherDataQuery = gql`
  query localWeatherData($lat: String!, $lon: String!) {
    forecast(lat: $lat, lon: $lon) {
      time {
        as_int
        as_string
      }
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
  const [forecast, setForecast] = useState<types.Forecast[] | null>(null)

  const queryVariables = {lat, lon}

  const loadLocalWeatherData = (): Promise<ForecastData> => {
    return request("http://localhost:8080/query",
      localWeatherDataQuery,
      queryVariables,
    )
  }

  useQuery({
    queryKey: ['localWeather'],
    queryFn: async () => {
      const data = await loadLocalWeatherData()
      setForecast(data.forecast)
    },
  })

  const getWeekday = (epoch: number): string => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday",
    ]
    const dayNumber = ((Math.floor(epoch/86400) + 4) % 7)
    return weekdays[dayNumber]
  }

  return (
    <>
      {forecast && (
        <CycledContent>
          <div className="grid grid-flow-col grid-cols-3 gap-8 pt-24">
            <ForecastCard weekday={getWeekday(forecast[0].time.as_int)} forecast={forecast[0]!}/>
            <ForecastCard weekday={getWeekday(forecast[1].time.as_int)} forecast={forecast[1]!}/>
            <ForecastCard weekday={getWeekday(forecast[2].time.as_int)} forecast={forecast[2]!}/>
          </div>  
        </CycledContent>
      )}  
    </>
  )
}

export default ExtendedForecast