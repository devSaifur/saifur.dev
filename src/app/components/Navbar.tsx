'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Title from './Title'

const NavLinks = () => {
  const pathName = usePathname()

  return (
    <nav className="sticky flex items-center justify-between py-6 shadow-lg">
      <Title />

      <ul className="flex items-center justify-center gap-12 pr-28 transition-all">
        <li>
          <Link
            className={
              pathName === '/blog' ? 'underline' : 'opacity-70 hover:opacity-90'
            }
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === '/gallery'
                ? 'underline'
                : 'opacity-70 hover:opacity-90'
            }
            href="/gallery"
          >
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks
