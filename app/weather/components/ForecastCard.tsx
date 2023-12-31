"use client"

import * as types from "../../graph/graphql"
import Image from "next/image"

interface ForecastCardProps {
  forecast: types.Forecast
  weekday: string
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  forecast,
  weekday
}) => {
  const KtoF = (temp: number = 0) => {
    return Math.round(((temp-273.15) * 1.8) +32)
  }

  const formatTime = (time: string): string => {
    time = time.split(" ").slice(-1).join()
    return time.substring(0, time.length - 3)
  }

  return (
    <div className="border-double border-gray-800 border-8 text-center bg-gray-200 w-full h-full">
      <div className="bg-gradient-to-b from-indigo-800 to-blue-600 p-4 w-full h-full grid grid-rows-4">
        <div className="row-span-1">
          <h1 className="text-4xl p-4">{weekday}</h1>
          <h2 className="text-2xl">{formatTime(forecast?.time?.as_string)}</h2>
        </div>
        <div className="row-span-2">
          {forecast && <Image className="mx-auto" alt="thunderstorm icon" src={`https://openweathermap.org/img/wn/${forecast?.weather[0]?.icon}@4x.png`} width={150} height={150}/>}
          <p className="text-4xl">{forecast?.weather[0]?.description!}</p>
        </div>
        <div className="grid grid-cols-2 text-6xl row-span-1">
          <div className="row-span-1">
            <p>Hi</p>
            <p>{KtoF(forecast?.atmosphere?.temperature?.max!)}</p>
          </div>
          <div className="row-span-1">
            <p>Lo</p>
            <p>{KtoF(forecast?.atmosphere?.temperature?.min!)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForecastCard