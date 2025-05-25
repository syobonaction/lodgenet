'use client'

import { useState, useEffect } from "react"

export default function Clock() {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>{time.toLocaleTimeString().slice(0,-6)}</div>
  )
}
