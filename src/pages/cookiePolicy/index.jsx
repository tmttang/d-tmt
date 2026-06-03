import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const CookiePolicy = () => {
  return (
    <>
      <Navbar active='Contact' />
      <div className='container mx-auto'>
        <div className='flex flex-col item-center justify-center gap-10 py-32 px-10 min-h-70vh'>
          <div className='max-w 3xl h-auto text-left'>
            <h3>Cookie Policy</h3>
            <p>
              <strong>Effective Date: August 27, 2024</strong>
            </p>

            <h3>Introduction</h3>
            <p>
              This Cookie Policy explains how TMT (“we,” “our,” or “us”) uses
              cookies and similar technologies on our website,{' '}
              <a href='https://d-tmt.com' target='_blank' rel='noreferrer'>
                d-tmt.com
              </a>{' '}
              (the “Site”). By using our Site, you consent to our use of cookies
              in accordance with this policy.
            </p>

            <h3>What Are Cookies?</h3>
            <p>
              Cookies are small text files placed on your device that help us
              recognize you and improve your experience on our Site. They allow
              us to understand how you interact with our Site and can be used to
              remember your preferences or other settings.
            </p>

            <h3>Types of Cookies We Use</h3>
            <ul>
              <li>
                <p>
                  <strong>Essential Cookies:</strong> These cookies are
                  necessary for the operation of our Site and enable you to
                  navigate and use its features. Without these cookies, certain
                  services cannot be provided.
                </p>
              </li>
              <li>
                <p>
                  <strong>Performance Cookies:</strong> These cookies collect
                  information about how visitors use our Site, such as which
                  pages are visited most often. This helps us improve the
                  performance of our Site.
                </p>
              </li>
              <li>
                <p>
                  <strong>Functional Cookies:</strong> These cookies remember
                  your choices and preferences to provide a more personalized
                  experience, such as remembering your language or region.
                </p>
              </li>
              <li>
                <p>
                  <strong>Advertising Cookies:</strong> These cookies are used
                  to deliver advertisements relevant to you and your interests.
                  They may also be used to limit the number of times you see an
                  advertisement and help measure the effectiveness of
                  advertising campaigns.
                </p>
              </li>
            </ul>

            <h3>Third-Party Cookies</h3>
            <p>
              We may use third-party cookies from services such as Google
              Analytics, which help us analyze site traffic and user behavior.
              These third-party cookies are subject to the privacy policies of
              the respective service providers.
            </p>

            <h3>How to Manage Cookies</h3>
            <p>
              You can manage cookies through your browser settings. Most
              browsers allow you to refuse or delete cookies. However, please
              note that disabling cookies may affect your experience on our Site
              and limit your access to certain features.
            </p>
            <ul>
              <li>
                <a
                  href='https://support.google.com/chrome/answer/95647'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Google Chrome: Manage Cookies in Chrome
                </a>
              </li>
              <li>
                <a
                  href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Mozilla Firefox: Manage Cookies in Firefox
                </a>
              </li>
              <li>
                <a
                  href='https://support.apple.com/en-us/HT201265'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Safari: Manage Cookies in Safari
                </a>
              </li>
              <li>
                <a
                  href='https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Microsoft Edge: Manage Cookies in Edge
                </a>
              </li>
            </ul>

            <h3>Changes to This Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated effective date. We
              encourage you to review this policy periodically to stay informed
              about our use of cookies.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Cookie Policy or our use of
              cookies, please contact us at:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>
                <a href='mailto:mantik.tang@d-tmt.com'>tmtd.tang@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer position='fixed' />
    </>
  )
}

export default CookiePolicy
