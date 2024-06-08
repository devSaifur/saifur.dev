import { defineConfig, sharpImageService } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: cloudflare(),
  site: 'https://saifur.pages.dev',
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true,
  },
})
