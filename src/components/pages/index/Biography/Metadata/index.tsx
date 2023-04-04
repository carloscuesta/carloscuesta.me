import { useState, useEffect } from 'react'

const Metadata = () => {
  const [date, setDate] = useState<string>()
  new Date().toLocaleTimeString("es-ES", { timeZone: "Europe/Madrid" })

  useEffect(() => {
    const timer = setInterval(() => {
      return setDate(new Date().toLocaleTimeString(
        "en-DE",
        { timeZone: "Europe/Madrid" }
      ))
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex text-sm opacity-60 lowercase'>
      <span className='block whitespace-nowrap w-[62px]'>{date}</span>
      <div className="flex gap-1.5">
        <span>·</span>
        <a
          target='_blank'
          rel='noopener noreferrer nofollow'
          href="https://maps.apple.com/place?q=Barcelona&ll=41.3826807%2C2.1770239&auid=2262861905204318884&lsp=7618&address=Barcelona%2C%20Spain"
        >
          Barcelona, Spain
        </a>
      </div>
    </div>
  )
}

export default Metadata
