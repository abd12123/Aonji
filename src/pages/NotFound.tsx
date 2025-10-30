import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'
import SEO from '../components/SEO'

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found - AONJI"
        description="The page you're looking for doesn't exist."
      />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* 404 Number */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="mb-8"
            >
              <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                404
              </h1>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <h2 className="heading-lg text-white mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                The page you're looking for seems to have wandered off into the digital void. 
                Don't worry, we'll help you find your way back.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/"
                className="btn-primary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-gray-100"
              >
                <Home className="inline-block mr-2 w-5 h-5" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white/10"
              >
                <ArrowLeft className="inline-block mr-2 w-5 h-5" />
                Go Back
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 pt-16 border-t border-white/10"
            >
              <p className="text-gray-400 mb-6">Or explore these popular pages:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { to: '/about', label: 'About Us' },
                  { to: '/services', label: 'Services' },
                  { to: '/portfolio', label: 'Product' },
                  { to: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mt-16 opacity-20"
            >
              <Search className="w-32 h-32 mx-auto text-white" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NotFound





