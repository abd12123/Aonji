import { Request, Response } from 'express'
import Service from '../models/Service'

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find({ active: true }).select('-__v')
    res.json(services)
  } catch (error) {
    console.error('Error fetching services:', error)
    res.status(500).json({ error: 'Failed to fetch services' })
  }
}

export const getServiceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const service = await Service.findOne({ id, active: true }).select('-__v')
    
    if (!service) {
      return res.status(404).json({ error: 'Service not found' })
    }
    
    res.json(service)
  } catch (error) {
    console.error('Error fetching service:', error)
    res.status(500).json({ error: 'Failed to fetch service' })
  }
}










