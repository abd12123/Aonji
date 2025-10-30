import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface PortfolioCardProps {
  title: string
  client: string
  industry: string
  image: string
  technologies: string[]
  onClick: () => void
}

const PortfolioCard = ({ title, client, industry, image, technologies, onClick }: PortfolioCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card group cursor-pointer overflow-hidden p-0 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <ExternalLink className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <span className="text-sm text-primary-600 font-medium mb-2">{industry}</span>
        <h3 className="heading-sm mb-2 text-navy-900">{title}</h3>
        <p className="text-gray-600 mb-4">{client}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioCard











