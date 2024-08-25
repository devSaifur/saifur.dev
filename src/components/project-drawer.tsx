import {
  ArrowTopRightIcon,
  GitHubLogoIcon,
  Link2Icon,
} from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'

import { ProjectCarousel } from './project-carousel'

type Props = {
  name: string
  url: {
    github: string
    website: string
  }
  description: string
  image: string
  tech: string[]
}

export const ProjectDrawer = ({
  name,
  url,
  description,
  image,
  tech,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [])

  if (!isMounted) return null

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="group/project mb-6 grid w-full gap-y-6 rounded-md bg-stone-900/90 px-4 py-4 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all delay-0 md:mb-2 md:grid-cols-[1fr,2fr] md:gap-0 md:transition-all md:duration-300 md:ease-in-out md:hover:scale-105 lg:hover:cursor-pointer">
          <div className="grid space-y-4 md:order-2 md:gap-2 md:space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center font-bold text-teal-600 group-hover/project:text-teal-500">
                {name}
                <span
                  aria-hidden="true"
                  className="ml-2 translate-y-px transition-transform group-hover/project:-translate-y-1 group-hover/project:translate-x-1 group-focus-visible/project:-translate-y-1 group-focus-visible/project:translate-x-1 motion-reduce:transition-none"
                >
                  <ArrowTopRightIcon className="size-4 md:size-5" />
                </span>
              </h3>
              <div className="flex items-center gap-x-3 text-teal-600">
                <a href={url.website} target="_blank" rel="noreferrer">
                  <Link2Icon className="size-5" />
                </a>
                <a href={url.github} target="_blank" rel="noreferrer">
                  <GitHubLogoIcon className="size-5" />
                </a>
              </div>
            </div>
            <p className="text-justify text-sm text-white/80">{description}</p>
            <ul className="space-x-2 space-y-2 text-accent/80 *:rounded-full *:bg-accent/10 *:px-3 *:py-1 *:text-xs *:font-medium *:leading-5">
              {tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </ul>
          </div>
          <img
            src={image}
            alt={name}
            width={200}
            height={150}
            decoding="async"
            loading="lazy"
            className="md:order-1' mb-auto max-w-36 rounded-md object-fill"
          />
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[70dvh] text-white">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{name}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <ProjectCarousel />
          </div>
          <DrawerFooter>
            <button>Submit</button>
            <DrawerClose asChild>
              <button>Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
