"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import { useState } from "react"
import { store } from "../store/store"
import LocationProvider from "./providers/LocationProvider"
import MenuProvider from "./components/Controls"

const Providers = ({
  children,
}: { 
  children: React.ReactNode 
}) => {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <LocationProvider>
          <MenuProvider>
            {children}
          </MenuProvider>
        </LocationProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default Providers