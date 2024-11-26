import { BgGrid } from "./components/ui/bg-grid";
import { Wrapper } from "./components/ui/wrapper";
import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";
import { Posts } from "./components/posts";

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
  );
}
