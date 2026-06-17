import { useState } from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { SlLocationPin } from 'react-icons/sl'
import { BsCalendarPlus } from 'react-icons/bs'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'
import Card from './ui/Card'

const MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.1495864519147!2d31.062936525043266!3d27.18303494842231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1445073a818d9799%3A0x14a9b05d16ca50b4!2z2YLYp9i52Ycg2KfZgdix2KfYrSDZg9mF2KjZhtiz2YPZiiAmINmD2KfYs9mE!5e0!3m2!1sar!2seg!4v1778488125620!5m2!1sar!2seg'

const LOCATION_LINK =
  'https://www.google.com/maps/search/?api=1&query=Royal+Park+Wedding+Hall+Assiut'

function addToCalendar() {
  const startDate = '20251231T193000'
  const endDate = '20260101T023000'
  const title = encodeURIComponent('حفل الزفاف - Royal Park Wedding Hall')
  const location = encodeURIComponent('Royal Park Wedding Hall, Assiut, Egypt')
  const details = encodeURIComponent('من الساعة 7:30 مساءً حتى 2:30 صباحاً')

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

  if (isIOS) {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${decodeURIComponent(title)}`,
      `LOCATION:${decodeURIComponent(location)}`,
      `DESCRIPTION:${decodeURIComponent(details)}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'wedding.ics'
    a.click()
    URL.revokeObjectURL(url)
  } else {
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`
    window.open(googleCalUrl, '_blank', 'noopener')
  }
}

function LocationSection() {
  const [mapRevealed, setMapRevealed] = useState(false)

  return (
    <section className="px-4 py-10 sm:px-6">
      <SectionHeader heading="Day Details" subtitle="Everything you need to know" />
      <div className="mx-auto mt-8 max-w-3xl space-y-6 text-center">
        <Card className="p-6 sm:p-8">
  <link
    href="https://fonts.googleapis.com/css2?family=Baskervville&display=swap"
    rel="stylesheet"
  />
  <h2
    className="m-0 text-xl font-medium text-forest sm:text-2xl"
    style={{ fontFamily: "'Baskervville', serif" }}
  >
    Royal Park Wedding Hall, Assuit
  </h2>
  <p className="mt-3 flex items-center justify-center gap-2 text-base text-muted sm:text-lg">
    <IoTimeOutline className="text-xl" aria-hidden="true" />
    From 7:30 PM to 2:30 AM
  </p>
</Card>

        {/* Card بدون خلفية */}
        <div className="flex flex-col items-center gap-6">
          {/* دايرة اللوكيشن */}
          <div className="mx-auto aspect-square w-full max-w-[320px] sm:max-w-[380px]">
            <div className="relative h-full w-full overflow-hidden rounded-full border-1 border-forest">
              {/* iframe دايمًا موجود */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.7468838019745!2d31.114912999999998!3d27.1956911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450923ce98d319%3A0x5c3f4be288178da1!2z2YLYp9i52Kkg2KPZgdix2KfYrSDYsdmI2YrYp9mEINio2KfZhNin2LM!5e0!3m2!1sar!2seg!4v1781658679023!5m2!1sar!2seg"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay بيختفي بنعومة لما المستخدم يدوس */}
              <button
                onClick={() => setMapRevealed(true)}
                aria-label="Show map"
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#f1f0ec]/80"
                style={{
                  opacity: mapRevealed ? 0 : 1,
                  transition: 'opacity 0.7s ease',
                  pointerEvents: mapRevealed ? 'none' : 'auto',
                  cursor: 'pointer',
                }}
              >
                <SlLocationPin className="text-4xl text-forest" aria-hidden="true" />
                <span className="text-lg font-medium text-forest">Tap</span>
              </button>
            </div>
          </div>

          {/* الأزرار */}
          <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
            {/* Open Location — ملون */}
            <button
              onClick={() => window.open(LOCATION_LINK, '_blank', 'noopener')}
              className="flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25523E' }}
            >
              <SlLocationPin aria-hidden="true" />
              Open Location
            </button>

            {/* Add to Calendar — مخطط */}
            <button
              onClick={addToCalendar}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 px-5 py-3 text-sm font-medium transition-colors hover:opacity-90"
              style={{
                borderColor: '#25523E',
                color: '#25523E',
                backgroundColor: 'transparent',
              }}
            >
              <BsCalendarPlus aria-hidden="true" />
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection