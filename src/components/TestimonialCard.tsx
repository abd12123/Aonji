import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  rating: number
  text: string
  avatar: string
}

const TestimonialCard = ({ name, position, company, rating, text, avatar }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card h-full flex flex-col"
    >
      <Quote className="w-10 h-10 text-primary-400 mb-4" />
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic">"{text}"</p>

      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-navy-900 dark:text-gray-100">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {position} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard





