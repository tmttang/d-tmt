import MotionContainer from './layout/MotionContainer'
import MotionInner from './layout/MotionInner'
const Contacts = () => {
  return (
    <MotionContainer>
      <div className='container mx-auto'>
        <div className='flex flex-col item-center h-50vh justify-center gap-10'>
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
  )
}
export default Contacts
