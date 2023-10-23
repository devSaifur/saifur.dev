import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import X from './ui/X'

const SocialLinks = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="https://www.x.com/devSaifur" target="_blank">
          <X />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/devSaifur" target="_blank">
          <Github />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/dev-saifur/" target="_blank">
          <Linkedin />
        </Link>
      </li>
    </ul>
  )
}

export default SocialLinks
