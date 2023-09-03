"use client"

import * as types from "@/app/graph/graphql"
import ForecastCard from "./ForecastCard"
import TimeCycledContent from "../../containers/TimeCycledContent"

interface ExtendedForecastProps {
  forecast: types.Forecast[] | null
}

const ExtendedForecast: React.FC<ExtendedForecastProps> = ({
  forecast,
}) => {
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
        <TimeCycledContent delay={6000}>
          <div className="grid lg:grid-flow-col lg:grid-cols-3 lg:gap-8 h-full">
            <ForecastCard weekday={getWeekday(forecast[0].time.as_int)} forecast={forecast[0]}/>
            <ForecastCard weekday={getWeekday(forecast[1].time.as_int)} forecast={forecast[1]}/>
            <ForecastCard weekday={getWeekday(forecast[2].time.as_int)} forecast={forecast[2]}/> 
          </div>
          <div className="grid lg:grid-flow-col lg:grid-cols-3 lg:gap-8 h-full">
            <ForecastCard weekday={getWeekday(forecast[3].time.as_int)} forecast={forecast[3]}/>
            <ForecastCard weekday={getWeekday(forecast[4].time.as_int)} forecast={forecast[4]}/>
            <ForecastCard weekday={getWeekday(forecast[5].time.as_int)} forecast={forecast[5]}/> 
          </div>
          <div className="grid lg:grid-flow-col lg:grid-cols-3 lg:gap-8 h-full">
            <ForecastCard weekday={getWeekday(forecast[6].time.as_int)} forecast={forecast[6]}/>
            <ForecastCard weekday={getWeekday(forecast[7].time.as_int)} forecast={forecast[7]}/>
            <ForecastCard weekday={getWeekday(forecast[8].time.as_int)} forecast={forecast[8]}/> 
          </div>
        </TimeCycledContent>
      )}  
    </>
  )
}

export default ExtendedForecast