"use client"

import Footer from "../components/Footer"
import Header from "./components/Header"
import ExtendedForecast from "./components/ExtendedForecast"
import CycledContent from "./containers/CycledContent"

export default function Weather() {
  return (
    <main className="text-white sunset h-screen select-none">
      <div className="p-24">
        <Header location={"Chicago"} region={"Illinois"}/>
        <CycledContent>
          <ExtendedForecast lat={"41.881832"} lon={"-87.623177"}/>
        </CycledContent>
      </div>
      <Footer />
    </main>
  )
}