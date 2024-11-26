import { createSignal, onCleanup } from 'solid-js'

export const Time = () => {
  const [currentTime, setCurrentTime] = createSignal('')

  function displayBangladeshTime() {
    const bangladeshTimeZone = 'Asia/Dhaka'

    const currentTime = new Intl.DateTimeFormat('en-US', {
      timeZone: bangladeshTimeZone,
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date())

    return currentTime
  }

  const timer = setInterval(() => {
    setCurrentTime(displayBangladeshTime())
  }, 1000)

  onCleanup(() => {
    clearInterval(timer)
  })

  return (
    <p class="text-base leading-normal text-emerald-500">{currentTime()}</p>
  )
}
