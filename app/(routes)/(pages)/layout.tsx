import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '@/globals.css'

import { Navbar } from '@/components/navbar'

const geistSans = localFont({
  src: '../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Saifur Rahman',
  description: 'Saifur Rahman is a software engineer and a web developer.',
  keywords:
    'saifur, saifur rahman, saifur.dev, software engineer, web developer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="1c464181-2c91-4d67-beac-8b8f24af9f3f"
        ></script> */}
      </head>
      <body
        className={`${geistSans.variable} min-h-screen scroll-smooth bg-[rgba(30,30,46,255)] font-primary text-base antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
