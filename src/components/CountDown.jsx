import { useEffect, useState } from 'react'
import SectionHeader from './ui/SectionHeader'

const TARGET_DATE = new Date('2026-06-23T00:00:00').getTime()

function getTimeLeft() {
  const diff = TARGET_DATE - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl text-[#5C2431] sm:h-24 sm:w-24 sm:text-3xl">
        {String(value).padStart(2, '0')}
      </div>

      <p className="mt-2 text-center text-xs font-normal tracking-[0.15em] text-[#5C2431] sm:text-sm">
        {label}
      </p>
    </div>
  )
}

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="px-3 py-8 sm:px-6">
      <SectionHeader heading="Countdown" subtitle="To the big day" />

      <div className="mx-auto mt-6 flex max-w-4xl items-center justify-center gap-1 sm:mt-10 sm:gap-3">
        <CountdownUnit value={timeLeft.days} label="DAYS" />

        <span className="pb-6 text-2xl font-bold text-[#5C2431] sm:text-4xl">
          :
        </span>

        <CountdownUnit value={timeLeft.hours} label="HOURS" />

        <span className="pb-6 text-2xl font-bold text-[#5C2431] sm:text-4xl">
          :
        </span>

        <CountdownUnit value={timeLeft.minutes} label="MINUTES" />

        <span className="pb-6 text-2xl font-bold text-[#5C2431] sm:text-4xl">
          :
        </span>

        <CountdownUnit value={timeLeft.seconds} label="SECONDS" />
      </div>
    </section>
  )
}

export default CountDown