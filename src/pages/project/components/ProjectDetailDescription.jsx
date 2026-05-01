import MotionContainer from '../../../components/layout/MotionContainer'
import MotionInner from '../../../components/layout/MotionInner'
const ProjectDetailDescription = ({
  awards,
  description,
  headline,
  liveUrl,
}) => {
  return (
    <MotionContainer>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-5'>
          <div className='grid gap-5'>
            <MotionInner>
              <div className='text-gray max-w-3xl h-auto text-left pb-3'>
                <p>Client</p>
              </div>
              <div className='text-black max-w-3xl h-auto text-left pb-3'>
                <p>{headline}</p>
              </div>
            </MotionInner>
            <MotionInner>
              <div className='text-gray max-w-3xl h-auto text-left pb-3'>
                <p>Role</p>
              </div>
              <div className='text-black max-w-3xl h-auto text-left pb-3'>
                <p>Front End Developer</p>
              </div>
            </MotionInner>
          </div>
          <MotionInner>
            <div className='text-gray max-w-3xl h-auto text-left pb-3'>
              <p>Overview</p>
            </div>
            <div className='text-black max-w-3xl h-auto text-left'>
              <p>{description}</p>
            </div>
          </MotionInner>

          {liveUrl ? (
            <MotionInner>
              <div className='text-gray max-w-3xl h-auto text-left pb-3'>
                <p>Live URL</p>
              </div>
              <div className='text-black max-w-3xl h-auto text-left'>
                <a href={liveUrl}>
                  <p>{liveUrl}</p>
                </a>
              </div>
            </MotionInner>
          ) : null}

          {awards ? (
            <MotionInner>
              <div className='text-gray max-w-3xl h-auto text-left pb-3'>
                <p>Awards</p>
              </div>
              <div className='text-black max-w-3xl h-auto text-left'>
                <p>{awards}</p>
              </div>
            </MotionInner>
          ) : null}
        </div>
      </div>
    </MotionContainer>
  )
}
export default ProjectDetailDescription
