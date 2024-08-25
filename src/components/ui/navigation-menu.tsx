import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const dataButtons = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Terms & conditions', href: '#' },
  { label: 'Cuicui.day', href: '#' },
]
export function VercelNavigationVariant1() {
  const [elementFocused, setElementFocused] = useState<number | null>(null)

  const handleHoverButton = (index: number | null) => {
    setElementFocused(index)
  }
  return (
    <nav
      className="flex flex-col sm:flex-row"
      onMouseLeave={() => {
        handleHoverButton(null)
      }}
    >
      {dataButtons.map((button, index) => (
        <button
          type="button"
          key={button.label}
          onMouseEnter={() => handleHoverButton(index)}
          className="relative inline-flex w-fit whitespace-nowrap rounded px-2 py-1 text-sm font-medium text-neutral-500"
        >
          {button.label}
          <AnimatePresence>
            {elementFocused === index && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 top-0 -z-10 rounded-md bg-neutral-200 dark:bg-neutral-800"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                layout
                layoutId="focused-element"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </nav>
  )
}
