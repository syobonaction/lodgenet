"use client"

import Footer from "../components/Footer"
import Header from "./components/Header"
import ExtendedForecast from "./components/ExtendedForecast"
import CurrentConditions from "./components/CurrentConditions"
import SubscriptionCycledContent from "../containers/SubscriptionCycledContent"

export default function Weather() {
  return (
    <main className="text-white sunset w-screen h-screen select-none">
      <div className="p-24">
        <Header location={"Chicago"} region={"Illinois"}/>
        <SubscriptionCycledContent>
          <ExtendedForecast lat={"41.881832"} lon={"-87.623177"}/>
          <CurrentConditions />
        </SubscriptionCycledContent>
      </div>
      <Footer />
    </main>
  )
}