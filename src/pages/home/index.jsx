import Contacts from '../../components/Contacts'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectListSection from './components/ProjectListSection'

const Home = () => {
  return (
    <>
      <Navbar active='Home' />
      <HeroSection />
      <ProjectListSection />
      <Contacts />
      <Footer position='relative' />
    </>
  )
}
export default Home
