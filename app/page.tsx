"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Clock from "./components/Clock"
import Footer from "./components/Footer"
import { useLocationContext } from "./providers/LocationProvider"

export default function Home() {
  const [lodgeName, setLodgeName] = useState("")

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
