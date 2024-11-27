'use client'

import { useEffect, useState } from 'react'

function getBangladeshTime() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Dhaka',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(new Date())
}

export function Clock() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getBangladeshTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-base font-semibold leading-normal text-emerald-500">
      {currentTime}
    </p>
  )
}
