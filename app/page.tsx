"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cities }  from "./data/cities"
import Clock from "./components/Clock"
import Footer from "./components/Footer"

interface cityData {
  city: string
  state: string
}

export default function Home() {
  const [location, setLocation] = useState({
    city: "",
    state: ""
  })
  const [lodgeName, setLodgeName] = useState("")
  
  const getLocation = useCallback((cities: cityData[]) => {
    const lodgeTypes = ["Lodge", "Inn", "Garden Inn", "Resort", "Hotel"]
    const loc = cities[Math.floor(Math.random() * cities.length)]
    const lodgeType = lodgeTypes[Math.floor(Math.random() * lodgeTypes.length)]
    setLocation(loc)
    setLodgeName(`Hampton ${lodgeType} ${loc.city}`)
  }, [])
  
  useEffect(() => {
    getLocation(cities)
  }, [getLocation])

  return (
    <main className="text-white">
      <div className="p-24">
        <div>
          <h1 className="text-6xl">LodgeNet</h1>
          <h2 className="text-3xl">{lodgeName}</h2>
          <Clock />
        </div>
        <div className="grid grid-cols-2 mt-4">
          <div className="text-xl col-span-1">
            <h3>Press MENU for:</h3>
            <ul className="list-disc pl-6">
              <li>Games</li>
              <li>Weather</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="col-span-1">
            <Image src="/images/ps1.png" width={200} height={200} alt="ps2 image"/>
          </div>
        </div> 
      </div>
      <Footer />
    </main>
  )
}
