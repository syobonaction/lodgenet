import './globals.css'

import Providers from "./providers"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        <div className="w-screen h-screen overflow-hidden crt">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
