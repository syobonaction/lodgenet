"use client"

import * as types from "../../graph/graphql"
import Image from "next/image"

interface ForecastCardProps {
  current: types.CurrentWeather
  weekday: string
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  current,
  weekday
}) => {
  const KtoF = (temp: number = 0) => {
    return Math.round(((temp-273.15) * 1.8) +32)
  }

  return (
    <div className="border-gray-200 border-4 p-4 text-center bg-gradient-to-b from-indigo-800 to-blue-600">
      <h1 className="text-4xl pt-4 pb-8">{weekday}</h1>
      {current && <Image className="mx-auto" alt="thunderstorm icon" src={`https://openweathermap.org/img/wn/${current?.weather[0]?.icon}@4x.png`} width={150} height={150}/>}
      <p className="text-4xl py-8">{current?.weather[0]?.description!}</p>
      <div className="grid grid-cols-2 text-4xl">
        <div className="row-span-1">
          <p>Hi</p>
          <p>{KtoF(current?.atmosphere?.temperature?.max!)}</p>
        </div>
        <div className="row-span-1">
          <p>Lo</p>
          <p>{KtoF(current?.atmosphere?.temperature?.min!)}</p>
        </div>
      </div>
    </div>
  )
}

export default ForecastCard