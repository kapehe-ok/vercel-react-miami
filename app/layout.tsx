import type React from "react"
import "@/app/globals.css"
import { GeistMono } from "geist/font/mono"

export const metadata = {
  title: "Vercel @ React Miami",
  description: "Connect with Vercel at React Miami and explore opportunities to join our community.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>{children}</body>
    </html>
  )
}
