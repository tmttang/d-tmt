import MotionContainer from '../../../components/layout/MotionContainer'
import MotionInner from '../../../components/layout/MotionInner'
import { useDataStore } from '../../../store/dataStore'
const ExperiencesSection = () => {
  const experiences = useDataStore((state) => state.experiences)
  return (
    <>
      <MotionContainer>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-center gap-6 h-50vh'>
            <MotionInner>
              <p className='rounded-full bg-light-gray p-2'>About</p>
            </MotionInner>
            <MotionInner>
              <h2 className='text-center w-full sm:w-1/2 mx-auto p-5'>
                I'm a Front-End Developer with over a decade of experience at award-winning agencies McCann and Ogilvy, where I built digital campaigns for global brands including KFC, Huawei, Standard Chartered, and Cathay Pacific. I specialise in crafting interactive, detail-driven web experiences — from concept to production. Based in Vancouver and open to new opportunities.
              </h2>
            </MotionInner>
          </div>
        </div>
      </MotionContainer>
      <MotionContainer>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-center gap-6 py-20'>
            <p className='rounded-full bg-light-gray p-2'>Experience</p>
            <h2 className='text-center w-1/2 mx-auto'>Where I've worked</h2>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 p-6'>
            {experiences.map((experience) => {
              return (
                <MotionInner key={experience.id}>
                  <div className='text-center py-5 flex flex-col gap-4'>
                    <p className='text-gray'>{experience.time}</p>
                    <p className='text-xl font-medium '>{experience.company}</p>
                    <p className='text-gray'>{experience.title}</p>
                    <p className='rounded-full bg-light-gray p-2 w-max mx-auto'>
                      {experience.tag}
                    </p>
                  </div>
                </MotionInner>
              )
            })}
          </div>
        </div>
      </MotionContainer>
    </>
  )
}
export default ExperiencesSection
