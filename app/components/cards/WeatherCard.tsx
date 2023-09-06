"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const WeatherCard = () => {
  const [display, setDisplay] = useState<string>("opacity-0")

  useEffect(() => {
    setTimeout(() => {
      setDisplay("opacity-100")
    }, 1000)
  })

  return (
    <div className={`w-full h-full grid grid-cols-1 transition-opacity ease-in-out duration-1000 ${display}`}>
      <div className="mx-auto col-start-1 row-start-1">
        <Image 
          src="/images/weather_globe.gif" 
          alt="A spinning globe showing weather features."
          width={300}
          height={300}  
        />
      </div>
      <div className="text-right lg:text-5xl xl:text-6xl col-start-1 row-start-1">
        <p>View Local</p>
        <p>Weather</p>
      </div>
      <div className="lg:text-4xl xl:text-5xl col-start-1 row-start-1 text-center mt-auto">
        Press <span className="text-amber-300">ENTER</span> now!
      </div>
    </div>
  )
}

export default WeatherCard