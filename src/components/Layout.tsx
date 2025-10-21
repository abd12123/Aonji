import { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import CookieConsent from './CookieConsent'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const [showCookie, setShowCookie] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowCookie(true)
    }
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowCookie(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      {showCookie && <CookieConsent onAccept={handleCookieAccept} />}
    </div>
  )
}

export default Layout





