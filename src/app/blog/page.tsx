import { getSortedBlogsData } from '@/lib/blogs'
import ListItem from '../components/ListItem'

export const metadata = {
  title: "Saifur's blog",
  description: 'Created by Saifur Rahman',
}

const BlogPage = () => {
  const blogs = getSortedBlogsData()

  return (
    <main>
      <h2>Blogs</h2>

      {blogs.map((blog) => (
        <ListItem blog={blog} key={blog.id} />
      ))}
    </main>
  )
}

export default BlogPage
