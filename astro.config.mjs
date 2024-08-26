import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [tailwind(), , sitemap(), icon()],
  output: 'server',
  adapter: cloudflare(),
  site: 'https://saifur.pages.dev',
})
