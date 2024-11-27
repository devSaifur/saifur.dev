import { BgGrid } from '@/components/ui/bg-grid'
import { Wrapper } from '@/components/ui/wrapper'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Posts } from '@/components/posts'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <>
      <BgGrid />
      <Wrapper>
        <main className="grid gap-y-12 lg:gap-y-20">
          <Hero />

          <Skills />

          <Projects />

          <Posts />

          <Footer />
        </main>
      </Wrapper>
    </>
  )
}
