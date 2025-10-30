import express from 'express'
import { getTestimonials } from '../controllers/testimonialsController'

const router = express.Router()

router.get('/', getTestimonials)

export default router












