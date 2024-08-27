import { useState } from 'react'
const Cookies = () => {
  const [consent, setConsent] = useState(
    document.cookie.includes('cookie_consent=true')
  )

  const handleConsent = () => {
    document.cookie =
      'cookie_consent=true; path=/; max-age=' + 60 * 60 * 24 * 365 // 1 year
    setConsent(true)
  }

  return (
    !consent && (
      <div
        id='cookie-consent-banner'
        className='fixed bottom-0 w-full bg-white text-black text-center p-5 z-50'
      >
        <p>
          We use cookies to improve your experience. By continuing to use our
          site, you accept our use of cookies. .
        </p>
        <button
          onClick={handleConsent}
          className='relative h-10 px-4 sm:px-6 rounded-full bg-light-gray text-black mt-3'
        >
          <span className='text-sm sm:text-base'>Accept</span>
        </button>
      </div>
    )
  )
}

export default Cookies
