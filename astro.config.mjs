import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), icon()],
  output: 'server',
  adapter: cloudflare(),
  site: 'https://saifur.pages.dev',
})
