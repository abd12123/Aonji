import mongoose, { Document, Schema } from 'mongoose'

interface IResult {
  metric: string
  value: string
}

interface ITestimonial {
  text: string
  author: string
  position: string
}

export interface IPortfolio extends Document {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: IResult[]
  testimonial: ITestimonial
  images: string[]
  technologies: string[]
  duration: string
  teamSize: number
  year: string
  serviceType: string
  featured: boolean
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const portfolioSchema = new Schema<IPortfolio>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    client: { type: String, required: true },
    industry: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    results: [
      {
        metric: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    testimonial: {
      text: { type: String, required: true },
      author: { type: String, required: true },
      position: { type: String, required: true },
    },
    images: [{ type: String }],
    technologies: [{ type: String }],
    duration: { type: String, required: true },
    teamSize: { type: Number, required: true },
    year: { type: String, required: true },
    serviceType: { type: String, required: true },
    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

portfolioSchema.index({ industry: 1, year: 1, serviceType: 1 })

export default mongoose.model<IPortfolio>('Portfolio', portfolioSchema)












