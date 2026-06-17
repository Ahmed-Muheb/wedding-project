import SectionHeader from './ui/SectionHeader'
import MessagesList from './MessagesList'

function MessagesSection({ wishes, loading }) {
  return (
    <section id="messages" className="px-4 py-10 sm:px-6">
      <SectionHeader heading="Messages" subtitle="From our beloved guests" />
      <div className="mx-auto mt-8 max-w-6xl sm:mt-10">
        <MessagesList messages={wishes} loading={loading} />
      </div>
    </section>
  )
}

export default MessagesSection