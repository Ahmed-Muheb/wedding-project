import MessageCard from './MessageCard'

function MessagesList({ messages, loading }) {
  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="h-48 animate-pulse rounded-xl border border-gray-200 bg-white/70"
          />
        ))}
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-gray-300 bg-white/60 px-6 py-10 text-center text-lg text-muted">
        No messages yet. Be the first to confirm your attendance!
      </p>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {messages.map((msg) => (
        <MessageCard
          key={msg.id}
          name={msg.name}
          attendance={msg.attendance}
          message={msg.message}
          signature={msg.signature}
          createdAt={msg.created_at}
        />
      ))}
    </div>
  )
}

export default MessagesList
