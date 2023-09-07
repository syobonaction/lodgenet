import Providers from "./providers"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from "react"
import Loading from "./components/Loading"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LodgeNet',
  description: 'Your home on the web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen lg:overflow-hidden crt">
          <Suspense fallback={<Loading />}>
            <Providers>
              {children}
            </Providers>
          </Suspense>
        </div>
      </body>
    </html>
  )
}
