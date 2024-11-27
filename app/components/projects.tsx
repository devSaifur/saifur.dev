import Image from 'next/image'
import { config } from '@/configs/project'

import { Icons } from '@/components/ui/icons'

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
            className="group/project mb-6 grid w-full max-w-2xl gap-y-6 rounded-md bg-stone-900/90 px-4 py-4 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all md:mb-2 md:grid-cols-[1fr,2fr] md:gap-0 md:transition-all md:ease-in-out md:hover:scale-105 lg:hover:cursor-pointer"
            key={project.name}
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
                  <span key={tech}>{tech}</span>
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
