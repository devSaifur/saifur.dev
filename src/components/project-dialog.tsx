import {
  GitHubLogoIcon,
  Link2Icon,
  ArrowTopRightIcon,
} from '@radix-ui/react-icons'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogContainer,
} from '~/components/ui/dialog'
import { ScrollArea } from '~/components/ui/scroll-aria.tsx'

type DialogProps = {
  name: string
  url: {
    github: string
    website: string
  }
  description: string
  image: string
  tech: string[]
}

export const ProjectDialog = ({
  name,
  url,
  description,
  image,
  tech,
}: DialogProps) => {
  return (
    <Dialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '4px',
        }}
        className="group/project mb-6 grid w-full gap-y-6 rounded-md bg-stone-900/90 px-4 py-4 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all delay-75 md:mb-2 md:grid-cols-[1fr,2fr] md:gap-0 lg:hover:cursor-pointer"
      >
        <div className="grid space-y-4 md:order-2 md:gap-2 md:space-y-3">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center font-bold text-teal-600 group-hover/project:text-teal-500">
              {name}
              <span
                aria-hidden="true"
                className="ml-2 translate-y-px transition-transform group-hover/project:-translate-y-1 group-hover/project:translate-x-1 group-focus-visible/project:-translate-y-1 group-focus-visible/project:translate-x-1 motion-reduce:transition-none"
              >
                <ArrowTopRightIcon className="size-4 md:size-5" />
              </span>
            </DialogTitle>
            <div className="flex items-center gap-x-3 text-teal-600">
              <a href={url.website} target="_blank" rel="noreferrer">
                <Link2Icon className="size-5" />
              </a>
              <a href={url.github} target="_blank" rel="noreferrer">
                <GitHubLogoIcon className="size-5" />
              </a>
            </div>
          </div>
          <DialogSubtitle className="text-justify text-sm text-white/80">
            {description}
          </DialogSubtitle>
          <ul className="space-x-2 space-y-2 text-accent/80 *:rounded-full *:bg-accent/10 *:px-3 *:py-1 *:text-xs *:font-medium *:leading-5">
            {tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </ul>
        </div>
        <DialogImage
          src={image}
          alt={name}
          className="md:order-1' mb-auto max-w-36 rounded-md object-fill"
          style={{
            borderRadius: '4px',
          }}
        />
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '12px',
          }}
          className="relative mx-4 h-auto max-w-2xl border border-teal-600 bg-stone-900/90"
        >
          <ScrollArea className="h-[80dvh]" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <DialogImage
                  src={image}
                  alt={name}
                  className="h-auto w-[200px]"
                />
              </div>
              <div className="">
                <DialogTitle className="text-black">{name}</DialogTitle>
                <DialogSubtitle className="font-light text-gray-400">
                  {description}
                </DialogSubtitle>
                <div className="mt-4 text-sm">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogClose className="text-teal-700" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  )
}
