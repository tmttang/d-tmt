import MotionContainer from '../../../components/layout/MotionContainer'
import MotionInner from '../../../components/layout/MotionInner'
import { useDataStore } from '../../../store/dataStore'

const AwardsSection = () => {
  const awards = useDataStore((state) => state.awards)

  return (
    <MotionContainer>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6 py-20'>
          <p className='rounded-full bg-light-gray p-2'>Awards</p>
          <h2 className='text-center w-1/2 mx-auto'>
            How I've been recognized
          </h2>
        </div>
        <div className='grid grid-cols-2 gap-6 p-6'>
          {awards.map((award) => {
            return (
              <MotionInner key={award.id}>
                <div className='text-center py-5 flex flex-col gap-4'>
                  <p className='text-gray'>{award.time}</p>
                  <p className='text-xl font-medium '>{award.company}</p>
                  <p className='text-gray'>{award.title}</p>
                  <p className='rounded-full bg-light-gray p-2 w-max mx-auto'>
                    {award.tag}
                  </p>
                </div>
              </MotionInner>
            )
          })}
        </div>
      </div>
    </MotionContainer>
  )
}
export default AwardsSection
