import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'
import { withContentCollections } from '@content-collections/next'

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withContentCollections(nextConfig)
