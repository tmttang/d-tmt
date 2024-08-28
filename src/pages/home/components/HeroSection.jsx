import MotionContainer from '../../../components/layout/MotionContainer'
import MotionInner from '../../../components/layout/MotionInner'

const HeroSection = () => {
  return (
    <MotionContainer>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center min-h-70vh justify-center gap-6 py-20 px-5'>
          <MotionInner>
            <div className='text-black max-w-3xl h-auto text-center'>
              <h1>
                A skilled front-end developer delivering impactful web
                experiences for clients globally
              </h1>
            </div>
          </MotionInner>
          <div className='block'>
            <MotionInner>
              <div className='flex flex-wrap items-center justify-center gap-6 '>
                <p>Expertise</p>
                <p className='rounded-full bg-light-gray p-2'>JavaScript</p>
                <p className='rounded-full bg-light-gray p-2'>React</p>
                <p className='rounded-full bg-light-gray p-2'>Tailwind CSS</p>
                <p className='rounded-full bg-light-gray p-2'>GSAP</p>
                <p className='rounded-full bg-light-gray p-2'>Framer Motion</p>
                <p className='rounded-full bg-light-gray p-2'>Figma</p>
                <p className='rounded-full bg-light-gray p-2'>Adobe XD</p>
              </div>
            </MotionInner>
          </div>
        </div>
      </div>
    </MotionContainer>
  )
}
export default HeroSection
