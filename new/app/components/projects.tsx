import Image from 'next/image'
import { Icons } from './ui/icons'

const config = [
  {
    name: 'Ask PDF',
    url: {
      github: 'https://github.com/devSaifur/ask-pdf',
      website: 'https://ask-pdf-saifur.vercel.app',
    },
    description:
      'Ask PDF allows you to have conversations with any PDF document. Simply upload your file and start asking questions with the power of ai right away.',
    image: '/images/ask-pdf.webp',
    tech: ['Next.js', 'Typescript', 'Tailwind', 'PostgreSQL'],
  },
  {
    name: 'The Next Shop',
    url: {
      github: 'https://github.com/devSaifur/next-shop',
      website: 'https://github.com/devSaifur/next-shop',
    },
    description:
      'The Next Shop is a modern E-Commerce + Dashboard & CMS, with this dashboard store owners have the ability to mange products, view sells details and even customize how the store front looks',
    image: '/images/the-next-store.webp',
    tech: ['Next.js', 'Typescript', 'Tailwind', 'PostgreSQL'],
  },
  {
    name: 'Nasa Mission Control',
    url: {
      github: 'https://github.com/devSaifur/nasa-mission-control',
      website: 'https://github.com/devSaifur/nasa-mission-control',
    },
    description:
      '  A space operation management app for NASA! It can schedule a new mission and abort it if necessary. The front end is built with React,the back end is with NodeJS, and the data is managed in MongoDB.',
    image: '/images/nasa-mission-control.webp',
    tech: ['React', 'Node', 'Tailwind', 'MongoDB'],
  },
  {
    name: 'The Wild Oasis',
    url: {
      github: 'https://github.com/devSaifur/the-wild-oasis',
      website: 'https://the-wild-oasis-by-saifur.vercel.app',
    },
    description:
      "A hotel insider app for the management team to manage the guests and its customers, It's built with React, Styled Component, and Supabase.",
    image: '/images/the-wild-oasis.webp',
    tech: ['React', 'Tailwind', 'Supabase'],
  },
]

export function Projects() {
  return (
    <section id="Projects" className="space-y-4">
      <h2 className="text-lg font-bold text-accent-purple md:py-8 md:text-center md:text-4xl">
        <span className="hidden text-green-300 md:inline">code</span>
        <span className="hidden text-accent-purple md:inline">:</span>
        <span className="text-cyan-300 max-md:uppercase">projects</span>
      </h2>

      <div className="grid justify-center gap-4 lg:grid-cols-2 lg:gap-10">
        {config.map((project) => (
          <div
            id="project"
            className="group/project mb-6 grid w-full max-w-2xl gap-y-6 rounded-md bg-stone-900/90 px-4 py-4 opacity-0 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all md:mb-2 md:grid-cols-[1fr,2fr] md:gap-0 md:transition-all md:ease-in-out md:hover:scale-105 lg:hover:cursor-pointer"
          >
            <div className="grid space-y-4 md:order-2 md:gap-2 md:space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center text-lg font-bold text-teal-600 group-hover/project:text-teal-500">
                  {project.name}
                  <span
                    aria-hidden="true"
                    className="ml-2 translate-y-px transition-transform group-hover/project:-translate-y-1 group-hover/project:translate-x-1 group-focus-visible/project:-translate-y-1 group-focus-visible/project:translate-x-1 motion-reduce:transition-none"
                  >
                    <Icons.arrow className="size-4 md:size-5" />
                  </span>
                </h3>
                <div className="flex items-center gap-x-5 text-teal-600">
                  <a
                    href={project.url.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icons.link className="size-8" />
                  </a>
                  <a href={project.url.github} target="_blank" rel="noreferrer">
                    <Icons.github className="size-7" />
                  </a>
                </div>
              </div>
              <p className="text-justify text-sm text-white/80">
                {project.description}
              </p>
              <ul className="space-x-2 space-y-2 text-accent/80 *:rounded-full *:bg-accent/10 *:px-3 *:py-1 *:text-xs *:font-medium *:leading-5">
                {project.tech.map((tech) => (
                  <span>{tech}</span>
                ))}
              </ul>
            </div>
            <Image
              src={project.image}
              alt={project.name}
              width="200"
              height="150"
              className="md:order-1' mb-auto max-w-36 rounded-md object-fill"
            />
          </div>
        ))}
      </div>
      <div className="group/link flex justify-center gap-x-1 md:pt-10">
        <a
          className="pb-2 text-sm font-semibold uppercase text-cyan-300 underline underline-offset-8 group-hover/link:text-cyan-300 md:text-base"
          href="/projects"
        >
          View all projects
        </a>
        <span className="translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none">
          <Icons.arrow className="size-5 text-cyan-300 md:size-6" />
        </span>
      </div>
    </section>
  )
}
