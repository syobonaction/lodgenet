"use client"

import { useCallback, useEffect, useState } from "react"
import {request, gql} from "graphql-request"
import * as types from "../graph/graphql"
import { useQuery } from "@tanstack/react-query"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ExtendedForecast from "./components/ExtendedForecast"
import CurrentConditions from "./components/CurrentConditions"
import SubscriptionCycledContent from "../containers/SubscriptionCycledContent"
import { useLocationContext } from "../providers/LocationProvider"

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

export default function Weather() {
  const location = useLocationContext()
  const [forecast, setForecast] = useState<types.Forecast[] | null>(null)

  const loadLocalWeatherData = useCallback((): Promise<ForecastData> => {
    return request("http://localhost:8080/query",
      localWeatherDataQuery,
      {lat: location.lat, lon: location.lon},
    )
  },[location])

  useQuery({
    queryKey: ['localWeather'],
    queryFn: async () => {
      const data = await loadLocalWeatherData()
      setForecast(data.forecast)
      return data
    },
    enabled: !!location.complete
  })

  return (
    <main className="text-white sunset w-screen h-screen grid grid-rows-6 gap-y-4 select-none">
      {forecast && (
        <>
          <div className="px-16 w-full h-full row-span-1">
            <Header location={location.city} region={location.state}/>
          </div>
          <div className="px-16 w-full h-full row-span-4">
            <SubscriptionCycledContent>
              <ExtendedForecast forecast={forecast}/>
              <CurrentConditions />
            </SubscriptionCycledContent>
          </div>
          <div className="w-full h-full row-span-1">
            <Footer />
          </div>
      </>
      )}
    </main>
  )
}