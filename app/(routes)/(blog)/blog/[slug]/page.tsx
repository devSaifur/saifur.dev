import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'content-collections'

export const dynamicParams = false

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path
  }))
}

type MetadataProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params
  const post = allPosts.find((post) => post._meta.path === slug)

  if (!post) {
    return {
      title: '404 | Saifur Rahman'
    }
  }
  return {
    title: `${post.title} | Saifur Rahman`
  }
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = allPosts.find((post) => post._meta.path === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="mx-auto flex max-w-7xl flex-col px-8 py-8 md:px-14 md:py-12 lg:py-20 lg:pl-60">
      <article className="prose lg:prose-xl prose-h2:text-slate-300 prose-p:text-slate-300">
        <h1 className="text-3xl font-bold text-white">{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />
      </article>
    </main>
  )
}
