import { Link } from 'react-router-dom'

const Footer = ({ position }) => {
  return (
    <footer
      className={`container mx-auto p-10 flex flex-col justify-between items-center gap-4 bg-white sm:flex-row ${
        position === 'fixed' ? 'fixed inset-x-0 bottom-0' : 'relative'
      }`}
    >
      <div className='flex flex-row gap-4'>
        <p>© 2024 - TMT</p>
        <Link to='/privacy-policy'>
          <p>Privacy Policy</p>
        </Link>
        <Link to='/cookie-policy'>
          <p>Cookie Policy</p>
        </Link>
      </div>
      <div className='flex flex-row gap-4'>
        <a href='mailto:tmtd.tang@gmail.com'>
          <p>Email</p>
        </a>
        <Link
          to='https://www.linkedin.com/in/dtmt/'
          target='_blank'
          rel='noreferrer'
        >
          <p>LinkedIn</p>
        </Link>
      </div>
    </footer>
  )
}
export default Footer
