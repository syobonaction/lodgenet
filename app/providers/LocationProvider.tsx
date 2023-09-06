"use client"

import { useContext, useEffect, useState } from 'react'
import React, { createContext} from 'react'

interface LocationContext {
  lat: string
  lon: string
  city: string
  state: string
  complete: boolean
}

const initialValue: LocationContext = {
  lat: "",
  lon: "",
  city: "",
  state: "",
  complete: false,
}

const LocationContext = createContext<LocationContext>(initialValue)

const LocationProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [location, setLocation] = useState<LocationContext>(initialValue)

  const getAddressFromCoords = async (lat: string, lon: string) => {
    const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`
    
    const response: Response = await fetch(url)
    const {address} = await response.json()

    if(response.ok) {
      setLocation({
        lat: lat,
        lon: lon,
        city: address.city || address.town,
        state: address.state,
        complete: true
      })
    } else {
      Promise.reject(new Error("Problem fetching location data."))
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      const lat: string = position.coords.latitude.toString()
      const lon: string = position.coords.longitude.toString()

      getAddressFromCoords(lat, lon)
    }, (err) => {
      console.error(err)
    })
  }, [])
  

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocationContext = () => useContext(LocationContext);
export default LocationProvider