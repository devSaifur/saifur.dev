export const BackgroundDots = () => {
  const dotSize = 1.2
  const dotColor = '#fb3a5d'
  const backgroundColor = 'transparent'
  const gap = 15
  const fade = true

  const encodedDotColor = encodeURIComponent(dotColor)

  const maskStyle = fade
    ? {
        maskImage: 'radial-gradient(circle, white 10%, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(circle, white 10%, transparent 90%)',
      }
    : {}

  const backgroundStyle = {
    backgroundColor,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='${gap}' height='${gap}' viewBox='0 0 ${gap} ${gap}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodedDotColor}' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='${dotSize}' cy='${dotSize}' r='${dotSize}'/%3E%3C/g%3E%3C/svg%3E")`,
    ...maskStyle,
  }

  return (
    <div
      className="fixed inset-0 -z-50 hidden h-screen w-full md:block"
      style={backgroundStyle}
    />
  )
}