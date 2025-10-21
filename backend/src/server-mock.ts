import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorHandler'
import { rateLimiter, contactRateLimiter } from './middleware/rateLimiter'
import { body, validationResult } from 'express-validator'
import { mockServices, mockPortfolio, mockTestimonials, mockContacts, mockNewsletterSubscribers } from './data/mockData'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet())
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
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
  res.json({ status: 'ok', timestamp: new Date().toISOString(), mode: 'mock-data' })
})

// Services endpoints
app.get('/api/services', (req, res) => {
  res.json(mockServices.filter(s => s.active))
})

app.get('/api/services/:id', (req, res) => {
  const service = mockServices.find(s => s.id === req.params.id && s.active)
  if (!service) {
    return res.status(404).json({ error: 'Service not found' })
  }
  res.json(service)
})

// Portfolio endpoints
app.get('/api/portfolio', (req, res) => {
  const { industry, year, serviceType, featured } = req.query
  
  let filtered = mockPortfolio.filter(p => p.active)
  
  if (industry) filtered = filtered.filter(p => p.industry === industry)
  if (year) filtered = filtered.filter(p => p.year === year)
  if (serviceType) filtered = filtered.filter(p => p.serviceType === serviceType)
  if (featured === 'true') filtered = filtered.filter(p => p.featured)
  
  res.json(filtered)
})

app.get('/api/portfolio/:id', (req, res) => {
  const item = mockPortfolio.find(p => p.id === req.params.id && p.active)
  if (!item) {
    return res.status(404).json({ error: 'Portfolio item not found' })
  }
  res.json(item)
})

// Testimonials endpoint
app.get('/api/testimonials', (req, res) => {
  const { featured } = req.query
  
  let filtered = mockTestimonials.filter(t => t.active)
  if (featured === 'true') filtered = filtered.filter(t => t.featured)
  
  res.json(filtered)
})

// Contact form endpoint
app.post('/api/contact', contactRateLimiter, [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ min: 2 }),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('company').trim().notEmpty().withMessage('Company is required'),
  body('serviceInterest').trim().notEmpty().withMessage('Service interest is required'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ min: 10 }),
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const contact = {
    id: Date.now().toString(),
    ...req.body,
    status: 'new',
    createdAt: new Date(),
  }
  
  mockContacts.push(contact)
  
  console.log('📧 New contact form submission:', {
    name: contact.name,
    email: contact.email,
    company: contact.company,
    service: contact.serviceInterest,
  })
  
  res.status(201).json({
    message: 'Contact form submitted successfully',
    id: contact.id,
  })
})

// Newsletter endpoint
app.post('/api/newsletter', [
  body('email').trim().isEmail().withMessage('Valid email is required'),
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email } = req.body
  
  const existing = mockNewsletterSubscribers.find(s => s.email === email)
  if (existing) {
    if (existing.status === 'active') {
      return res.status(400).json({ error: 'Email is already subscribed' })
    } else {
      existing.status = 'active'
      existing.subscribedAt = new Date()
      return res.json({ message: 'Successfully resubscribed to newsletter' })
    }
  }

  const subscriber = {
    id: Date.now().toString(),
    email,
    status: 'active',
    subscribedAt: new Date(),
  }
  
  mockNewsletterSubscribers.push(subscriber)
  
  console.log('📮 New newsletter subscriber:', email)
  
  res.status(201).json({
    message: 'Successfully subscribed to newsletter',
    id: subscriber.id,
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handling
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`)
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`📦 Using MOCK DATA (no database required)`)
  console.log(`✅ Ready to accept requests!`)
})

export default app



