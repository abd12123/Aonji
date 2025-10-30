import { Request, Response } from 'express'
import Testimonial from '../models/Testimonial'

export const getTestimonials = async (req: Request, res: Response) => {
  try {
    const { featured } = req.query
    
    const filter: any = { active: true }
    if (featured === 'true') filter.featured = true
    
    const testimonials = await Testimonial.find(filter)
      .select('-__v')
      .sort({ createdAt: -1 })
    
    res.json(testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    res.status(500).json({ error: 'Failed to fetch testimonials' })
  }
}












