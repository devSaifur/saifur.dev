export const BackgroundGrid = () => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='#fb3a5d' stroke-width='3px' fill-opacity='0.4' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <div
      className="pointer-events-none fixed inset-0 left-0 top-0 -z-50 flex h-screen w-full md:hidden"
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '25px',
        maskImage: true
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
        WebkitMaskImage: true
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
      }}
    />
  )
}
