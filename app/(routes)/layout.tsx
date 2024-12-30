import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'

import '@/styles/globals.css'

import { Navbar } from '@/components/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
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
    <ViewTransitions>
      <html lang="en">
        <head>
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="1c464181-2c91-4d67-beac-8b8f24af9f3f"
          ></script>
        </head>
        <body
          className={`${geistSans.variable} min-h-screen scroll-smooth bg-[rgba(30,30,46,255)] font-primary text-base antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}
