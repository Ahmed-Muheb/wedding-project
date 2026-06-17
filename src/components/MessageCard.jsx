  function MessageCard({ name, attendance, message, signature, createdAt }) {
    const formattedDate = createdAt
      ? new Date(createdAt).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : null

    const attendanceLabel =
      attendance === 'yes'
        ? "Yes, I'll be there! 🥰"
        : attendance === 'no'
          ? "Sorry, I can't make it 😥"
          : null

    return (
      <article className="flex h-full flex-col rounded-xl border border-gray-300 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
        <header className="mb-3 border-b border-gray-100 pb-3">
             <h3
              className="m-0 text-2xl font-light text-forest sm:text-3xl"
              style={{ fontFamily: "'Halant', serif" }}
            >
              {name}
            </h3>
          {attendanceLabel && (
            <p className="mt-1 text-sm text-muted sm:text-base">{attendanceLabel}</p>
          )}
          {formattedDate && (
            <time dateTime={createdAt} className="mt-1 block text-sm text-muted">
              {formattedDate}
            </time>
          )}
        </header>

        {message && (
          <p className="m-0 flex-1 whitespace-pre-wrap text-base leading-relaxed text-gray-700 sm:text-lg">
            {message}
          </p>
        )}

        {signature && (
          <div className="mt-4 border-t border-gray-100 pt-3">
            <p className="mb-2 text-sm text-muted">Signature</p>
            <img
              src={signature}
              alt={`${name}'s signature`}
              className="max-h-24 w-full rounded-lg bg-cream object-contain"
            />
          </div>
        )}
      </article>
    )
  }

  export default MessageCard
