import { Link } from 'react-router-dom'
import MotionContainer from '../../../components/layout/MotionContainer'
import MotionInner from '../../../components/layout/MotionInner'
import { useDataStore } from '../../../store/dataStore'

const ProjectListSection = () => {
  const projects = useDataStore((state) => state.projects)

  return (
    <MotionContainer viewport={{ once: true, amount: 0.1 }}>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-5'>
          {projects.map((project) => {
            return (
              <MotionInner key={project.id}>
                <Link to={`/project/${project.title}`}>
                  <div className='rounded-xl relative overflow-hidden group h-full'>
                    <div className='transition duration-500 ease-in-out transform group-hover:blur-lg h-full'>
                      {project.video ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className='block w-full h-full object-cover object-center'
                        >
                          <source src={project.video} type='video/mp4' />
                        </video>
                      ) : (
                        <picture className='pointer-events-none user-select-none block w-full h-full object-cover object-center'>
                          <source srcSet={project.webp} type='image/webp' />
                          <source srcSet={project.jpg} type='image/jpg' />
                          <img
                            src={project.jpg}
                            alt={project.title}
                            className='pointer-events-none user-select-none block w-full h-full object-cover object-center'
                          />
                        </picture>
                      )}

                      <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50'></div>
                    </div>
                    <div className='absolute top-6 left-6 w-full h-full flex transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                      <p className='text-white text-lg'>
                        {project.description}
                      </p>
                    </div>
                    <div className='absolute w-12 h-12 bg-white rounded-full flex justify-center transition-all duration-300 ease-in-out opacity-0 top-10 right-10 group-hover:opacity-100 group-hover:top-6 group-hover:right-6'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='rgb(0, 0, 0)'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='self-center'
                      >
                        <line x1='7' y1='17' x2='17' y2='7'></line>
                        <polyline points='7 7 17 7 17 17'></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              </MotionInner>
            )
          })}
        </div>
      </div>
    </MotionContainer>
  )
}
export default ProjectListSection
