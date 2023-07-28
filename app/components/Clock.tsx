'use client'

import { useState, useEffect } from "react"

export default function Clock() {
  const [time, setTime] = useState("00:00:00")

  useEffect(() => {
    const newTime = new Date().toLocaleTimeString()
    const timer = setInterval(() => setTime(newTime), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <div>{time}</div>
  )
}
