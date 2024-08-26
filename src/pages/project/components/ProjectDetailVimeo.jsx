import MotionContainer from '../../../components/layout/MotionContainer'
import MotionInner from '../../../components/layout/MotionInner'
const ProjectDetailVimeo = ({ vimeo }) => {
  return (
    <MotionContainer>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-5 p-5'>
          <MotionInner>
            <iframe
              title='vimeo-player'
              src={vimeo}
              allowFullScreen
              className='w-full aspect-video rounded-xl'
            ></iframe>
          </MotionInner>
        </div>
      </div>
    </MotionContainer>
  )
}
export default ProjectDetailVimeo
