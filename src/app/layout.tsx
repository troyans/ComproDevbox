import type { Metadata } from "next"
import "./globals.css"
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Compro - Professional Website Design",
  description: "Tingkatkan reputasi bisnis anda dengan design website profesional",
}

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

