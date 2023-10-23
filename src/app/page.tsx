import ProfilePicture from './components/ProfilePicture'
import X from './components/SocialLinks'

export default function Home() {
  return (
    <main className="flex flex-col gap-4 px-4 pt-4 sm:px-6 md:px-10 lg:px-32">
      <ProfilePicture />
      <section className="flex flex-col">
        <h1>
          Hello and Welcome, I&#39;m <span className="font-bold">Saifur</span>
        </h1>
      </section>

      <section>
        <X />
      </section>
    </main>
  )
}
