import { useEffect, useRef, useState } from 'react'
import SectionHeader from './ui/SectionHeader'

const DATE_PARTS = [23, 'June', 2026]

function DateCircle({ value, delay }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timer

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            setRevealed(true)
            observer.disconnect()
          }, delay)
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [delay])

  return (
    <div
      ref={ref}
className="relative flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full border border-forest bg-white text-xl sm:h-[100px] sm:w-[100px] sm:text-2xl"    >
      <span
        className={`relative z-10 transition-colors duration-500 ${
          revealed ? 'text-forest' : 'text-transparent'
        }`}
      >
        {value}
      </span>
      <span
        className={`absolute inset-0 rounded-full bg-forest transition-transform duration-700 ease-out ${
          revealed ? 'translate-y-full' : 'translate-y-0'
        }`}
        aria-hidden="true"
      />
    </div>
  )
}

function SaveTheDate() {
  return (
    <section className="px-4 py-8 sm:px-6">
      <SectionHeader heading="Save the Date" subtitle="The Big Reveal" />

      <div className="mx-auto mt-6 flex items-center justify-center gap-4 px-4 sm:mt-8 sm:gap-5">
        {DATE_PARTS.map((part, index) => (
          <DateCircle key={String(part)} value={part} delay={300 + index * 250} />
        ))}
      </div>
    </section>
  )
}

export default SaveTheDate
