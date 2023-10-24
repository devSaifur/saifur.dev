import { getBlogData, getSortedBlogsData } from '@/lib/blogs'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    blogId: string
  }
}

export const generateStaticParams = () => {
  const blogs = getSortedBlogsData()

  return blogs
    .map((blog) => ({
      blogId: blog.id.replaceAll(' ', '-'),
    }))
    .reverse() // reverse to get latest blogs first
}

export const generateMetadata = ({ params }: Props) => {
  const { blogId } = params

  const blogs = getSortedBlogsData()
  const blog = blogs.find((blog) => blog.id.replaceAll(' ', '-') === blogId)

  if (!blog) {
    return {
      title: 'Blog not found',
      description: 'Blog not found',
    }
  }

  return {
    title: blog?.id,
    description: blog?.title,
  }
}

const page = async ({ params }: Props) => {
  const { blogId } = params
  const formattedId = blogId.replaceAll('-', ' ')

  const blogs = getSortedBlogsData()
  const { title, date, contentHtml } = await getBlogData(formattedId)
  const pubDate = getFormattedDate(date)

  const blogNotFound = blogs.find(
    (blog) => blog.id.replaceAll(' ', '-') !== blogId
  )
  if (blogNotFound) {
    notFound()
  }

  return (
    <main>
      <h1>{title}</h1>
      <p>{pubDate}</p>

      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <Link className="hover:underline" href="/blog">
          Back to blogs page
        </Link>
      </article>
    </main>
  )
}

export default page
