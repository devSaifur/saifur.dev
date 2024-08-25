import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap(), icon()],
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'https://saifur.pages.dev',
})
