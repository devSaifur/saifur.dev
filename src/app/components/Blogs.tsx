import { getSortedBlogsData } from '@/lib/blogs'

const Blogs = () => {
  const blogs = getSortedBlogsData()

  return (
    <section>
      <h2>Blogs</h2>

      <p>{blogs.map((blog) => JSON.stringify(blog))}</p>
    </section>
  )
}

export default Blogs
