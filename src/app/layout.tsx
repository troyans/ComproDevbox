import type { Metadata } from "next"
import "./globals.css"
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { CSPostHogProvider } from "./provider"

export const metadata: Metadata = {
  title: "Devbox - Professional Website Design",
  description: "Tingkatkan reputasi bisnis anda dengan design website profesional",
}

const inter = Inter({
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
      <head>

      <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-984911997"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-984911997');
          `}
        </Script>
      
        

      </head>
      <CSPostHogProvider>
      <body className="font-sans antialiased">{children}</body>
      </CSPostHogProvider>
    </html>
  )
}

