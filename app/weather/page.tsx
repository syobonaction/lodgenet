"use client"

import {request, gql} from "graphql-request"
import * as types from "../graph/graphql"
import { useQuery, UseQueryResult} from "@tanstack/react-query"
import Footer from "../components/Footer"
import Header from "./components/Header"
import ForecastCard from "./components/ForecastCard"
import ExtendedForecast from "./containers/ExtendedForecast"

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

const queryVariables = { lat: "41.881832", lon: "-87.623177"}

const loadLocalWeatherData = () => {
  return request("http://localhost:8080/query",
    localWeatherDataQuery,
    queryVariables,
  )
}

export default function Weather() {
  const { 
    data,
    error,
    isLoading,
    isSuccess,
  }: UseQueryResult<WeatherData> = useQuery({
    queryKey: ['localWeather'],
    queryFn: async () => {
      const data = await loadLocalWeatherData()
      return data
    },
  })

  return (
    <main className="text-white sunset h-screen">
      <div className="p-24">
        <Header location={"Chicago"} region={"Illinois"}/>
        <ExtendedForecast>
          <ForecastCard weekday="MON" current={data?.currentWeather!}/>
          <ForecastCard weekday="TUE" current={data?.currentWeather!}/>
          <ForecastCard weekday="WED" current={data?.currentWeather!}/>
        </ExtendedForecast>
      </div>
      <Footer />
    </main>
  )
}