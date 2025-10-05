import type React from "react"
import "@/app/globals.css"
import { GeistMono } from "geist/font/mono"
import { Analytics } from '@vercel/analytics/next';


export const metadata = {
  title: "Vercel @ React Conf",
  description: "Connect with Vercel at React Conf and explore opportunities to join our community.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
