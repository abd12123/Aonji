import { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import Newsletter from '../models/Newsletter'

export const subscribeNewsletter = [
  // Validation middleware
  body('email').trim().isEmail().withMessage('Valid email is required'),
  
  async (req: Request, res: Response) => {
    try {
      // Check for validation errors
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { email } = req.body
      const ipAddress = req.ip || req.connection.remoteAddress

      // Check if email already exists
      const existingSubscriber = await Newsletter.findOne({ email })

      if (existingSubscriber) {
        if (existingSubscriber.status === 'active') {
          return res.status(400).json({ error: 'Email is already subscribed' })
        } else {
          // Reactivate subscription
          existingSubscriber.status = 'active'
          existingSubscriber.subscribedAt = new Date()
          existingSubscriber.unsubscribedAt = undefined
          await existingSubscriber.save()
          
          return res.json({
            message: 'Successfully resubscribed to newsletter',
          })
        }
      }

      // Create new subscriber
      const subscriber = new Newsletter({
        email,
        ipAddress,
      })

      await subscriber.save()

      res.status(201).json({
        message: 'Successfully subscribed to newsletter',
        id: subscriber._id,
      })
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      res.status(500).json({ error: 'Failed to subscribe to newsletter' })
    }
  },
]










