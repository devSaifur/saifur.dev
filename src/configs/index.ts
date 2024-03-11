import type { Project, SocialLink } from '../types'

export const socialLinks: SocialLink[] = [
  {
    href: 'http://github.com/devSaifur',
    label: 'Github social link',
    icon: 'github',
  },
  {
    href: 'http://linkedin.com/in/dev-saifur',
    label: 'Linkedin social link',
    icon: 'linkedin',
  },
  {
    href: 'http://x.com/devSaifur"',
    label: 'X, formally Twitter social link',
    icon: 'x',
  },
] as const

export const projects: Project[] = [
  {
    name: 'The Next Shop' as const,
    image: '/src/images/project-1.png',
    details:
      'The Next Shop is a modern E-Commerce + Dashboard & CMS, with this dashboard store owners have the ability to mange products, view sells details and even customize how the store front looks.',
    technologies: ['Next.js', 'Typescript', 'Tailwind', 'PostgreSQL'],
    href: 'https://github.com/devSaifur/the-next-shop',
  },
  {
    name: 'Nasa Mission Control' as const,
    image: '/src/images/project-1.png',
    details:
      'A space operation management app for NASA! It can schedule a new mission and abort it if necessary. The front end is built with React, the back end is with NodeJS, and the data is managed in MongoDB',
    technologies: ['React', 'Node.js', 'Tailwind', 'Mongodb'],
    href: 'http://github.com/devSaifur/nasa-project',
  },
  {
    name: 'The Wild Oasis' as const,
    image: '/src/images/project-2.png',
    details:
      "A hotel insider app for the management team to manage the guests and its customers, It's built with React, Styled Component, and Supabase.",
    technologies: ['React', 'Styled Component', 'Supabase'],
    href: 'http://github.com/devSaifur/the-wild-oasis',
  },
] as const
