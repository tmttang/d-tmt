import ReactGA from 'react-ga4'
import Footer from '../../components/Footer'
import MotionContainer from '../../components/layout/MotionContainer'
import MotionInner from '../../components/layout/MotionInner'
import Navbar from '../../components/Navbar'

const Contact = () => {
  ReactGA.send({ hitType: 'pageview', page: '/contact', title: 'Contact' })
  return (
    <>
      <Navbar active='Contact' />
      <MotionContainer>
        <div className='container mx-auto'>
          <div className='flex flex-col item-center h-screen justify-center gap-10'>
            <div className='max-w 3xl h-auto text-center'>
              <MotionInner>
                <h2 className='text-black'>Let's work together.</h2>
              </MotionInner>
              <MotionInner>
                <h2 className='text-gray'>
                  <a href='mailto:mantik.tang@d-tmt.com'>Get in touch</a>.
                </h2>
              </MotionInner>
            </div>
          </div>
        </div>
      </MotionContainer>
      <Footer position='fixed' />
    </>
  )
}
export default Contact
