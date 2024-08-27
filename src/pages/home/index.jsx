import React from 'react'
import ReactGA from 'react-ga4'
import Contacts from '../../components/Contacts'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectListSection from './components/ProjectListSection'

const Home = () => {
  ReactGA.send({ hitType: 'pageview', page: '/', title: 'Home' })
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
