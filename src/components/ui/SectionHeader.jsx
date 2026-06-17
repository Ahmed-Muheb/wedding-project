function SectionHeader({ heading, subtitle, size = 'large', className = '' }) {
  const headingSize =
    size === 'small'
      ? 'text-4xl sm:text-[2.75rem]'
      : 'text-5xl sm:text-6xl'

  const subtitleSize =
    size === 'small' ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Style+Script&family=Halant:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <div className={`flex flex-col pt-35 items-center text-center ${className}`}>
        <h2
          className={`${headingSize} m-0 font-light text-forest`}
          style={{ fontFamily: "'Style Script', cursive" }}
        >
          {heading}
        </h2>
        {subtitle && (
          <p
            className={`${subtitleSize} m-0 mt-1`}
            style={{ fontFamily: "'Halant', serif", color: '#752335' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </>
  )
}

export default SectionHeader