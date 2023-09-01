"use client"

import Footer from "../components/Footer"
import Header from "./components/Header"
import ExtendedForecast from "./components/ExtendedForecast"
import CurrentConditions from "./components/CurrentConditions"
import SubscriptionCycledContent from "../containers/SubscriptionCycledContent"

export default function Weather() {
  return (
    <main className="text-white sunset w-screen h-screen grid grid-rows-6 gap-y-4 select-none">
      <div className="px-16 w-full h-full row-span-1">
        <Header location={"Chicago"} region={"Illinois"}/>
      </div>
      <div className="px-16 w-full h-full row-span-4">
        <SubscriptionCycledContent>
          <ExtendedForecast lat={"41.881832"} lon={"-87.623177"}/>
          <CurrentConditions />
        </SubscriptionCycledContent>
      </div>
      <div className="w-full h-full row-span-1">
        <Footer />
      </div>
    </main>
  )
}