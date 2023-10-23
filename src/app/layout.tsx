import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saifur Rahman',
  description: 'This is portfolio website of Saifur Rahman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-800 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
