const ProjectDetailImage = ({ webp, jpg, alt }) => {
  return (
    <div className='rounded-xl relative overflow-hidden h-full'>
      <picture className='pointer-events-none user-select-none block w-full h-full object-cover object-center'>
        <source srcSet={webp} type='image/webp' />
        <source srcSet={jpg} type='image/jpg' />
        <img
          src={jpg}
          alt={alt}
          className='pointer-events-none user-select-none block w-full h-full object-cover object-center'
          loading='lazy'
        />
      </picture>
    </div>
  )
}
export default ProjectDetailImage
