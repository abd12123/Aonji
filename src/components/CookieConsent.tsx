import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface CookieConsentProps {
  onAccept: () => void
}

const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-navy-900 text-white p-4 shadow-2xl z-50"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies.{' '}
            <a href="#" className="text-primary-400 hover:underline">
              Learn more
            </a>
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onAccept}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Accept All
            </button>
            <button
              onClick={onAccept}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CookieConsent










