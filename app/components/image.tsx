import NextImage, { ImageLoaderProps, ImageProps } from 'next/image'

const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src
}

const cloudflareLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (process.env.NODE_ENV === 'development') {
    return src
  }
  const params = [`width=${width}`]
  if (quality) {
    params.push(`quality=${quality}`)
  }
  const paramsString = params.join(',')
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`
}

export const Image = (props: ImageProps) => {
  return <NextImage loader={cloudflareLoader} {...props} />
}
