import Link from 'next/link'

import { Icons } from './ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'

export function Socials() {
  return (
    <div className="grid gap-8">
      <ul
        className="flex items-center justify-center gap-x-5 lg:justify-start lg:gap-8"
        aria-label="social links section"
      >
        <Link target="_blank" href="https://github.com/devSaifur">
          <label className="sr-only">Github social link</label>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger>
                <Icons.github className="tooltip size-6 cursor-pointer text-accent hover:text-accent/80 sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        <Link target="_blank" href="https://www.linkedin.com/in/dev-saifur">
          <label className="sr-only">Linkedin social link</label>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger>
                <Icons.linkedin className="size-8 cursor-pointer text-accent hover:text-accent/80 sm:size-10" />
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        <Link
          target="_blank"
          href="https://x.com/devSaifur"
          className="group relative"
        >
          <label className="sr-only">X, formally Twitter social link</label>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger>
                <Icons.x className="size-6 cursor-pointer text-accent hover:text-accent/80 sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>
                <p>X/Twitter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        <Link
          href="mailto:saifur.dev@gmail.com?subject=Hello"
          className="group relative"
        >
          <label className="sr-only">Send email</label>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger>
                <Icons.mail className="size-7 cursor-pointer text-accent hover:text-accent/80 sm:size-9" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Send email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger className="text-primary mb-2 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-accent/90 px-4 py-2 text-xs font-bold text-black shadow hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-1 sm:text-sm">
              <Icons.download className="mr-1 size-4" />
              CV
            </TooltipTrigger>
            <TooltipContent>Download CV</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ul>
    </div>
  )
}
