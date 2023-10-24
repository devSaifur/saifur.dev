import Image from 'next/image'

const ProfilePicture = () => {
  return (
    <section className="flex">
      <Image
        src="/images/profile-picture.png"
        alt="Saifur Rahman"
        width={400}
        height={400}
        priority={true}
        className="rounded-full border-4 border-neutral-500 bg-neutral-700"
      />
    </section>
  )
}

export default ProfilePicture
