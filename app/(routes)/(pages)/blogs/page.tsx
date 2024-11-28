import type { Metadata } from 'next'
import Link from 'next/link'
import { allPosts } from 'content-collections'

import { Icons } from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'Blogs | Saifur Rahman',
  description: 'Blogs by Saifur Rahman.',
  keywords:
    'saifur, saifur rahman, saifur.dev, software engineer, web developer'
}

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-3 py-16 pt-28 text-white md:pt-40">
      {allPosts.map((blog) => (
        <Link href={`/blog/${blog._meta.path}`} key={blog._meta.path}>
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
    </main>
  )
}
