document.addEventListener(
  'astro:page-load',
  () => {
    const trailer = document.getElementById('trailer') as HTMLDivElement

    const animateTrailer = (e: MouseEvent) => {
      const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2

      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(1)`,
      }

      trailer.animate(keyframes, {
        duration: 800,
        fill: 'forwards',
      })
    }

    window.onmousemove = (e) => {
      animateTrailer(e)
    }
  },
  { once: false }
)
