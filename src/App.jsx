import ReactGA from 'react-ga4'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/index.css'
import Cookies from './components/Cookies'
import Contact from './pages/contact'
import CookiePolicy from './pages/cookiePolicy'
import Home from './pages/home'
import NotFoundPage from './pages/notFoundPage'
import PrivacyPolicyPage from './pages/privacyPolicyPage'
import Profile from './pages/profile'
import Project from './pages/project'
import { DataProvider } from './store/dataStore'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/cookie-policy',
    element: <CookiePolicy />,
  },
  {
    path: '/project/:projectSlug',
    element: <Project />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

function App() {
  ReactGA.initialize('G-HH5RE3B7P4')
  return (
    <DataProvider>
      <Cookies />
      <RouterProvider router={router} />
    </DataProvider>
  )
}

export default App
