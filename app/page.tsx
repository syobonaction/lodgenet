"use client"

import { useState, useEffect, useCallback } from "react"
import Clock from "./components/Clock"
import Footer from "./components/Footer"
import { useLocationContext } from "./providers/LocationProvider"
import TimeCycledContent from "./containers/TimeCycledContent"
import GameCard from "./components/cards/GameCard"
import WeatherCard from "./components/cards/WeatherCard"

export default function Home() {
  const [lodgeName, setLodgeName] = useState("Hampton")

  const location = useLocationContext()
  
  const getLocation = useCallback(() => {
    const lodgeTypes = ["Lodge", "Inn", "Garden Inn", "Resort", "Hotel"]
    const lodgeType = lodgeTypes[Math.floor(Math.random() * lodgeTypes.length)]
    setLodgeName(`Hampton ${lodgeType} ${location.city}`)
  }, [location])
  
  useEffect(() => {
    getLocation()
  }, [getLocation])

  return (
    <main className="text-white font-bold w-screen h-screen grid lg:grid-rows-6 gap-y-4 select-none pt-16">
      <div className="row-span-1 lg:px-16 xl:px-24 my-auto">
        <h1 className="text-6xl">Welcome to</h1>
        <h2 className="text-3xl">{lodgeName}</h2>
        <Clock />
      </div>
      <div className="grid md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 row-span-4 p-16">
        <div className="text-6xl md:row-span-1 lg:col-span-1 lg:px-16 xl:px-24">
          <h3>Press <span className="text-amber-300">MENU</span> for...</h3>
          <ul className="text-5xl my-8 list-disc pl-24 grid grid-rows-3 gap-y-4">
            <li>Music</li>
            <li>Weather</li>
            <li>Games</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="md:row-span-1 lg:col-span-1 pr-16">
          <TimeCycledContent delay={8000}>
            <WeatherCard />
            <GameCard />
          </TimeCycledContent>
        </div>
      </div> 
      <div className="row-span-1">
        <Footer />
      </div>
    </main>
  )
}
