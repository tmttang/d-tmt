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
                Front-End Developer from McCann and Ogilvy, now bringing a
                decade of agency craft to Vancouver.
              </h1>
            </div>
          </MotionInner>
          <div className='block'>
            <MotionInner>
              <div className='flex flex-wrap items-center justify-center gap-10 '>
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
