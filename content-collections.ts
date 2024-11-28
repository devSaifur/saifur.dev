import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'

const posts = defineCollection({
  name: 'posts',
  directory: 'posts',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    date: z.string()
  }),
  transform: async (doc, ctx) => {
    const html = await compileMarkdown(ctx, doc)
    return {
      ...doc,
      html
    }
  }
})

export default defineConfig({
  collections: [posts]
})
