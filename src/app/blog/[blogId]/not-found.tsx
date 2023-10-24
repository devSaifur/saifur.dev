import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-1 pt-32">
      <p>The post you are looking for does not exist.</p>

      <Link href="/blog" className="hover:underline">
        Go back
      </Link>
    </div>
  )
}

export default NotFoundPage
