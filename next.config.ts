import type { NextConfig } from 'next'
import { withContentCollections } from '@content-collections/next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true
  }
}

export default withContentCollections(nextConfig)
