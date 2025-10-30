import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Product', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">OS</span>
            </div>
            <span className={`font-display font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-navy-900 dark:text-gray-100' : 'text-white'
            }`}>
              AONJI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : isScrolled 
                        ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                        : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <ThemeToggle size="sm" />
            <Link
              to="/contact"
              className={`font-medium px-6 py-3 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100' 
                : 'hover:bg-white/20 text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="flex items-center justify-between mt-4">
                  <ThemeToggle size="sm" />
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navigation

