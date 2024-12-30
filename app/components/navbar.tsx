'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blogs', href: '/blogs' }
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() as number
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const activeIndex = pathname.startsWith('/projects')
    ? 1
    : pathname.startsWith('/blogs')
      ? 2
      : 0

  return (
    <motion.div
      className={cn(
        'fixed left-0 right-0 top-3 z-50 flex justify-center',
        pathname.includes('/blogs/') ? 'invisible' : 'visible'
      )}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-120%' }
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <nav className="mx-auto w-full max-w-80 rounded-lg bg-stone-900/90 px-4 py-3 shadow-[0_10px_20px_rgba(15,_118,_110,_0.7)] sm:max-w-sm">
        <ul className="relative flex justify-center space-x-1">
          <motion.div
            className="absolute inset-0 z-0 rounded-md bg-teal-700"
            initial={false}
            animate={{
              x: `calc(${activeIndex * 100}% + ${activeIndex * 0.25}rem)`,
              width: `calc(${100 / navItems.length}% - 0.15rem)`
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          {navItems.map((item, index) => (
            <li key={item.name} className="relative z-10 flex-1">
              <Link
                href={item.href}
                className={cn(
                  'block rounded-md py-2 text-center text-sm font-semibold transition-colors duration-200 md:text-base',
                  activeIndex === index
                    ? 'text-white'
                    : 'text-cyan-300 hover:text-cyan-800'
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}
