"use client"

import Footer from "../components/Footer"
import Header from "./components/Header"
import ExtendedForecast from "./components/ExtendedForecast"
import CycledContent from "./containers/CycledContent"
import CurrentConditions from "./components/CurrentConditions"

export default function Weather() {
  return (
    <main className="text-white sunset h-screen select-none">
      <div className="p-24">
        <Header location={"Chicago"} region={"Illinois"}/>
        <CycledContent delay={18000}>
          <ExtendedForecast lat={"41.881832"} lon={"-87.623177"}/>
          <CurrentConditions />
        </CycledContent>
      </div>
      <Footer />
    </main>
  )
}