import { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import Contact from '../models/Contact'
import { sendContactEmail } from '../utils/emailService'

export const submitContactForm = [
  // Validation middleware
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('company').trim().notEmpty().withMessage('Company is required'),
  body('serviceInterest').trim().notEmpty().withMessage('Service interest is required'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  
  async (req: Request, res: Response) => {
    try {
      // Check for validation errors
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { name, email, company, serviceInterest, message } = req.body
      const ipAddress = req.ip || req.connection.remoteAddress

      // Save to database
      const contact = new Contact({
        name,
        email,
        company,
        serviceInterest,
        message,
        ipAddress,
      })

      await contact.save()

      // Send email notification
      try {
        await sendContactEmail({
          name,
          email,
          company,
          serviceInterest,
          message,
        })
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError)
        // Don't fail the request if email fails
      }

      res.status(201).json({
        message: 'Contact form submitted successfully',
        id: contact._id,
      })
    } catch (error) {
      console.error('Error submitting contact form:', error)
      res.status(500).json({ error: 'Failed to submit contact form' })
    }
  },
]










