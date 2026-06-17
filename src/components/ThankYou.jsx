function ThankYou() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 -mt-8">
      <link
        href="https://fonts.googleapis.com/css2?family=Style+Script&display=swap"
        rel="stylesheet"
      />

      <div
        className="relative mx-auto max-w-sm overflow-hidden"
        style={{ backgroundColor: '#e2e2d8', minHeight: '350px' }}
      >
        <div className="flex flex-col items-center px-8 pt-30 pb-6 text-center">
          <h2
            style={{
              fontFamily: "'Style Script', cursive",
              fontSize: '2.8rem',
              color: '#2d5a3d',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Thank you
          </h2>

          <p
            style={{
              fontSize: '0.95rem',
              color: '#4a5568',
              fontStyle: 'italic',
              margin: '2.5rem 0 0.4rem',
            }}
          >
            Hosted by
          </p>
          <p
            style={{
              fontFamily: "'Tiro Kannada', serif",
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#2d3748',
              letterSpacing: '0.08em',
              margin: 0,
            }}
          >
            MANAR &amp; HADI
          </p>

          {/* السطر الجديد */}
          <p
            style={{
              fontSize: '0.78rem',
              color: '#752335',
              marginTop: '0.5rem',
              letterSpacing: '0.04em',
            }}
          >
            Created by Ahmed Moheb &amp; Manar Moheb
          </p>
        </div>
      </div>
    </section>
  )
}

export default ThankYou