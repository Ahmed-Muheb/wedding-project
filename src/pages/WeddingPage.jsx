import { useWishes } from '../hooks/useWishes'
import CountDown from '../components/CountDown'
import SaveTheDate from '../components/SaveTheDate'
import AttendanceForm from '../components/AttendanceForm'
import MessagesSection from '../components/MessagesSection'
import LocationSection from '../components/LocationSection'
import ThankYou from '../components/ThankYou'
import BackgroundFooter from '../components/BackgroundFooter'
import HeroImage from '../components/HeroImage'

function WeddingPage() {
  const { wishes, loading, submitWish, error } = useWishes()

  return (
    <main >
      <HeroImage />
      <SaveTheDate />
      <CountDown />
      <LocationSection />
      <AttendanceForm submitWish={submitWish} error={error} />
      <MessagesSection wishes={wishes} loading={loading} />
      <ThankYou />
      <BackgroundFooter />

    </main>
  )
}

export default WeddingPage