import { ScrollRestoration, useParams } from 'react-router-dom'
import Close from '../../components/Close'
import Contacts from '../../components/Contacts'
import Footer from '../../components/Footer'
import MotionContainer from '../../components/layout/MotionContainer'
import { useDataStore } from '../../store/dataStore'
import NotFoundPage from '../notFoundPage'
import ProjectDetailDescription from './components/ProjectDetailDescription'
import ProjectDetailGrid from './components/ProjectDetailGrid'
import ProjectDetailImage from './components/ProjectDetailImage'
import ProjectDetailText from './components/ProjectDetailText'
import ProjectDetailVimeo from './components/ProjectDetailVimeo'

const Project = () => {
  const { projectSlug } = useParams()
  const projectName = projectSlug
    ? projectSlug.toLowerCase().replace(/\s/g, '')
    : ''

  const projectsDetail = useDataStore((state) => state.projectsDetail)
  const project = projectsDetail[projectName]

  if (!project) {
    return <NotFoundPage />
  }
  return (
    <>
      <Close />

      <ScrollRestoration />

      <ProjectDetailText headline={project.headline} titles={project.titles} />

      {projectSlug === 'phxkfc' || projectSlug === 'kfc' ? (
        <MotionContainer>
          <ProjectDetailVimeo vimeo={project.vimeo} />
        </MotionContainer>
      ) : null}

      {project.videos ? (
        <>
          <MotionContainer>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 gap-5 p-5'>
                {project.videos.map((video, index) => (
                  <video
                    key={index}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='block w-full h-full object-cover object-center rounded-xl'
                  >
                    <source src={video} type='video/mp4' />
                  </video>
                ))}
              </div>
            </div>
          </MotionContainer>
        </>
      ) : null}

      {project.description && project.headline ? (
        <ProjectDetailDescription
          description={project.description}
          headline={project.headline}
        />
      ) : null}

      <MotionContainer viewport={{ once: true, amount: 0.1 }}>
        <div className='container mx-auto'>
          <ProjectDetailGrid colSpans={project.colspan}>
            {project.webp.map((webpUrl, index) => {
              const jpgUrl = project.jpg[index]
              if (!webpUrl || !jpgUrl) {
                return null // Graceful handling of mismatched arrays
              }
              return (
                <ProjectDetailImage
                  key={index}
                  webp={webpUrl}
                  jpg={jpgUrl}
                  alt={`Project image ${index + 1}`} // Descriptive and accessible alt text
                />
              )
            })}
          </ProjectDetailGrid>
        </div>
      </MotionContainer>

      <Contacts />
      <Footer />
    </>
  )
}

export default Project
