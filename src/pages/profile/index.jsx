import Contacts from '../../components/Contacts'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import AwardsSection from './components/AwardsSection'
import ClientsSection from './components/ClientsSection'
import ExperiencesSection from './components/ExperiencesSection'
import ProfilesSection from './components/ProfilesSection'

const Profile = () => {
  return (
    <>
      <Navbar active='Profile' />
      <ProfilesSection />
      <ExperiencesSection />
      <ClientsSection />
      <AwardsSection />
      <Contacts />
      <Footer position='relative' />
    </>
  )
}
export default Profile
