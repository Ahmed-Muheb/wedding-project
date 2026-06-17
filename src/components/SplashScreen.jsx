import { FaHeart } from 'react-icons/fa'

// Load Google Fonts
const style = document.createElement('style')
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Rochester&family=Diphylleia&display=swap');
`
document.head.appendChild(style)

function SplashScreen({ onContinue }) {
  return (
    <section
      className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center bg-[#e2e2d8] px-6 text-center"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      onClick={onContinue}
      onKeyDown={(e) => e.key === 'Enter' && onContinue?.()}
      role="button"
      tabIndex={0}
      aria-label="Continue to wedding invitation"
    >
      <p className="m-0 tracking-[0.35em] text-muted">D E A R</p>
      <h1
        className="m-0 text-6xl font-light text-forest sm:text-7xl md:text-[5rem]"
        style={{ fontFamily: "'Rochester', cursive" }}
      >
        Guest
      </h1>
      <FaHeart className="mt-2 text-3xl text-heart" aria-hidden="true" />
      <h3
        className="mt-2 text-2xl font-extralight sm:text-3xl"
        style={{ fontFamily: "'Diphylleia', serif" }}
      >
        You&apos;re Invited
      </h3>

      {/* Fix: safe-area + pb to ensure visibility on phones */}
      <p
        className="absolute text-lg text-gray-500 sm:text-xl"
        style={{ bottom: 'calc(2rem + env(safe-area-inset-bottom))' }}
      >
        Tap anywhere to continue
      </p>
    </section>
  )
}

export default SplashScreen