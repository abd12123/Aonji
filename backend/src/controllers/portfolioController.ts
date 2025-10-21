import { Request, Response } from 'express'
import Portfolio from '../models/Portfolio'

export const getPortfolioItems = async (req: Request, res: Response) => {
  try {
    const { industry, year, serviceType, featured } = req.query
    
    const filter: any = { active: true }
    
    if (industry) filter.industry = industry
    if (year) filter.year = year
    if (serviceType) filter.serviceType = serviceType
    if (featured === 'true') filter.featured = true
    
    const portfolioItems = await Portfolio.find(filter)
      .select('-__v')
      .sort({ year: -1, createdAt: -1 })
    
    res.json(portfolioItems)
  } catch (error) {
    console.error('Error fetching portfolio items:', error)
    res.status(500).json({ error: 'Failed to fetch portfolio items' })
  }
}

export const getPortfolioById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const portfolioItem = await Portfolio.findOne({ id, active: true }).select('-__v')
    
    if (!portfolioItem) {
      return res.status(404).json({ error: 'Portfolio item not found' })
    }
    
    res.json(portfolioItem)
  } catch (error) {
    console.error('Error fetching portfolio item:', error)
    res.status(500).json({ error: 'Failed to fetch portfolio item' })
  }
}










