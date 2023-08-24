"use client"

import * as types from "../graph/graphql"

const ForecastCard: React.FC<types.Current> = ({
  temperature,
  feelslike,
  windDirection,
  windSpeed,
  isDay
}) => {
  return (
    <div className="border-white border-4">
      <p>Current Temp: {temperature}</p>
    </div>
  )
}

export default ForecastCard