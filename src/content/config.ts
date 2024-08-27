import { defineCollection, z } from 'astro:content'

const blogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
})

export const collections = {
  blogs: blogsCollection,
}
