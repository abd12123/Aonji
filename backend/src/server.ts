import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import dotenv from 'dotenv'
import { connectDatabase } from './config/database'
import { errorHandler } from './middleware/errorHandler'
import { rateLimiter } from './middleware/rateLimiter'

// Routes
import servicesRouter from './routes/services'
import portfolioRouter from './routes/portfolio'
import contactRouter from './routes/contact'
import testimonialsRouter from './routes/testimonials'
import newsletterRouter from './routes/newsletter'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}))

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
} else {
  app.use(morgan('combined'))
}

// Body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Compression
app.use(compression())

// Rate limiting
app.use('/api/', rateLimiter)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API Routes
app.use('/api/services', servicesRouter)
app.use('/api/portfolio', portfolioRouter)
app.use('/api/contact', contactRouter)
app.use('/api/testimonials', testimonialsRouter)
app.use('/api/newsletter', newsletterRouter)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handling
app.use(errorHandler)

// Database connection and server start
const startServer = async () => {
  try {
    await connectDatabase()
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`)
      console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()

export default app












