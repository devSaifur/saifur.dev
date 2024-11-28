import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '@/globals.css'

const geistSans = localFont({
  src: '../../../../fonts/GeistVF.woff',
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
      <body
        className={`${geistSans.variable} min-h-screen scroll-smooth bg-[rgba(30,30,46,255)] font-primary text-base antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
