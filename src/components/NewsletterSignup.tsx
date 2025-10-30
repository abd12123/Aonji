import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, AlertCircle } from 'lucide-react'
import axios from 'axios'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      await axios.post(`${apiUrl}/newsletter`, { email })
      setStatus('success')
      setMessage('Thank you for subscribing!')
      setEmail('')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="w-12 h-12 text-white mx-auto mb-4" />
        <h2 className="heading-md text-white mb-4">Stay Updated</h2>
        <p className="text-primary-100 mb-6">
          Subscribe to our newsletter for the latest insights on technology, innovation, and digital transformation.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 flex items-center justify-center space-x-2 ${
              status === 'success' ? 'text-white' : 'text-red-100'
            }`}
          >
            {status === 'success' ? (
              <Check className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default NewsletterSignup











