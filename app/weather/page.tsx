"use client"

import {request, gql} from "graphql-request"
import * as types from "../graph/graphql"
import { useQuery, UseQueryResult} from "@tanstack/react-query"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import ForecastCard from "../components/ForecastCard"

interface DataTypes {
  locale: types.Location
}

const localWeatherDataQuery = gql`
  query localWeatherData($zip: String!) {
    locale(zip: $zip) {
      name
      region
      current {
        temperature
        feelslike
        windSpeed
        windDirection
        isDay
      }
    }
  }
`

const queryVariables = { zip: "60605" }

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
  }: UseQueryResult<DataTypes> = useQuery({
    queryKey: ['localWeather'],
    queryFn: async () => {
      const data = await loadLocalWeatherData()
      return data
    },
  })

  return (
    <main className="text-white">
      <div className="p-24">
        <Header {...data?.locale!} />
        <div className="grid grid-flow-col grid-cols-3 gap-8 pt-24">
          <ForecastCard {...data?.locale.current!}/>
          <ForecastCard {...data?.locale.current!}/>
          <ForecastCard {...data?.locale.current!}/>
        </div>
      </div>
      <Footer />
    </main>
  )
}