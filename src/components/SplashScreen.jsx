import { FaHeart } from 'react-icons/fa'

function SplashScreen({ onContinue }) {
  return (
    <section
      className="fixed inset-0 z-50 flex min-h-screen cursor-pointer flex-col items-center justify-center bg-[#e2e2d8] px-6 text-center"
      onClick={onContinue}
      onKeyDown={(e) => e.key === 'Enter' && onContinue?.()}
      role="button"
      tabIndex={0}
      aria-label="Continue to wedding invitation"
    >
      <p className="m-0 tracking-[0.35em] text-muted">D E A R</p>
      <h1 className="m-0 font-display text-6xl font-light text-forest sm:text-7xl md:text-[5rem]">
        Guest
      </h1>
      <FaHeart className="mt-2 text-3xl text-heart" aria-hidden="true" />
      <h3 className="mt-2 text-2xl font-extralight italic sm:text-3xl">
        You&apos;re Invited
      </h3>
      <p className="absolute bottom-8 text-lg text-gray-500 sm:text-xl">
        Tap anywhere to continue
      </p>
    </section>
  )
}

export default SplashScreen
