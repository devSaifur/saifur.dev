import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import vanjs from 'astro-vanjs'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [tailwind(), , sitemap(), icon(), solid(), vanjs()],
  output: 'hybrid',
  adapter: cloudflare(),
  site: 'https://saifur.pages.dev',
})
