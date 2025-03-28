import Image from 'next/image'

import { Clock } from './clock'
import { Socials } from './socials'

export function Hero() {
  return (
    <header className="flex flex-col items-center gap-8 pt-28 text-center lg:mx-auto lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 lg:pl-16 lg:pt-40 lg:text-start">
      <div className="relative size-36 lg:order-2 lg:mx-auto lg:ml-6 lg:size-80">
        <Image
          id="profile-picture"
          src="/images/profile-picture.webp"
          alt="profile"
          fill={true}
          sizes="(max-width: 768px) 30vw, 15vw"
          className="motion-translate-y-loop-[5%] motion-translate-x-loop-[0%] motion-duration-[3000ms] motion-ease-in-out rounded-full outline outline-2 outline-accent brightness-90 lg:rounded-2xl"
        />
      </div>
      <div className="space-y-2 text-accent-purple lg:order-1 lg:space-y-6">
        <h1 className="text-3xl font-bold text-sky-200/95 lg:text-7xl lg:font-extrabold">
          Saifur Rahman
        </h1>
        <h2 className="text-lg font-semibold lg:text-2xl lg:leading-8">
          Full-Stack Wizard
        </h2>
        <p className="text-lg leading-normal lg:text-xl">
          I program things mostly for the web.
        </p>
      </div>

      <div className="flex flex-col gap-y-16 lg:order-3">
        <Socials />
        <div className="hidden gap-x-6 text-start lg:flex">
          <div className="relative size-24">
            <Image
              src="/images/chill-guy.webp"
              alt="chill guy"
              className="rounded-lg outline outline-2 outline-accent brightness-90"
              fill={true}
              sizes="10vw"
            />
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-cyan-400">Saifur</p>
            <p className="text-xl text-accent">Online (probably)</p>
            <Clock />
          </div>
        </div>
      </div>

      <section className="max-w-md space-y-4 text-accent-purple lg:order-4 lg:text-xl lg:leading-8">
        <p>
          Hello there! I&apos;m{' '}
          <span className="text-accent">Saifur Rahman</span>, a Full-Stack
          developer. I mostly work on web related stuff but not only! I&apos;m
          currently working as a freelance web developer on various
          marketplaces. And on a marathon to become the best developer I can be
          :&apos;) by{' '}
          <span className="text-accent">keep learning and growing</span>.
        </p>
      </section>
    </header>
  )
}
