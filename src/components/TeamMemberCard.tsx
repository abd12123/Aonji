import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

interface TeamMemberCardProps {
  name: string
  position: string
  bio: string
  avatar: string
  expertise: string[]
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

const TeamMemberCard = ({ name, position, bio, avatar, expertise, social }: TeamMemberCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card group text-center"
    >
      <div className="relative inline-block mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary-100"
        />
        <div className="absolute inset-0 bg-primary-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="heading-sm mb-1 text-navy-900">{name}</h3>
      <p className="text-primary-600 font-medium mb-3">{position}</p>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{bio}</p>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {expertise.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {social && (
        <div className="flex justify-center space-x-3">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default TeamMemberCard










