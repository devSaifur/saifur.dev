import van from 'vanjs-core'

const { p } = van.tags

export function Time() {
  const currentTime = van.state('')

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

  setInterval(() => {
    currentTime.val = displayBangladeshTime()
  }, 1000)

  return p(
    {
      className: 'text-base leading-normal text-emerald-500',
    },
    () => `Current time: ${currentTime}`
  )
}
