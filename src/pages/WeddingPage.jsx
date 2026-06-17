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
  <main>
    <HeroImage />
    
    <div data-aos="fade-up">
      <SaveTheDate />
    </div>
    
    <div data-aos="fade-up">
      <CountDown />
    </div>
    
    <div data-aos="fade-up">
      <LocationSection />
    </div>
    
    <div data-aos="fade-up">
      <AttendanceForm submitWish={submitWish} error={error} />
    </div>
    
    <div data-aos="fade-up">
      <MessagesSection wishes={wishes} loading={loading} />
    </div>
    
    <div data-aos="fade-up">
      <ThankYou />
    </div>
    
    <BackgroundFooter />
  </main>
)
}

export default WeddingPage