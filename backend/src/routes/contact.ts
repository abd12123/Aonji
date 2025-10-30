import express from 'express'
import { submitContactForm } from '../controllers/contactController'
import { contactRateLimiter } from '../middleware/rateLimiter'

const router = express.Router()

router.post('/', contactRateLimiter, submitContactForm)

export default router












