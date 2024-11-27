import Link from 'next/link'
import { allPosts } from 'content-collections'

import { Icons } from './ui/icons'

export function Posts() {
  return (
    <section className="space-y-4 text-white">
      <h2 className="pb-4 text-lg font-bold uppercase text-cyan-300 md:text-center md:text-4xl md:lowercase">
        Blogs
      </h2>
      <div className="mx-auto grid max-w-4xl gap-y-6">
        {allPosts.map((blog) => (
          <Link href={`/blogs/${blog._meta.path}`} key={blog._meta.path}>
            <div className="group/blog flex flex-col gap-2 rounded-md bg-stone-900/90 px-4 py-4 delay-75 md:px-6 md:transition-all md:duration-300 md:ease-in-out md:hover:scale-105 lg:hover:cursor-pointer">
              <p className="text-xs">{blog.date}</p>
              <h3 className="flex items-center text-base text-accent">
                {blog.title}
                <span
                  aria-hidden="true"
                  className="ml-2 translate-y-px transition-transform group-hover/blog:-translate-y-1 group-hover/blog:translate-x-1 group-focus-visible/blog:-translate-y-1 group-focus-visible/project:translate-x-1 motion-reduce:transition-none"
                >
                  <Icons.arrow />
                </span>
              </h3>
              <p className="line-clamp-2 text-sm">{blog.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
