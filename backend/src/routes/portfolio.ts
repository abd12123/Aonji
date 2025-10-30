import express from 'express'
import { getPortfolioItems, getPortfolioById } from '../controllers/portfolioController'

const router = express.Router()

router.get('/', getPortfolioItems)
router.get('/:id', getPortfolioById)

export default router












