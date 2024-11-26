import * as React from 'react'

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto grid max-w-7xl gap-16 px-4 md:px-12">
      {children}
    </div>
  )
}
