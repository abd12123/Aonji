import mongoose, { Document, Schema } from 'mongoose'

export interface IService extends Document {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  keyBenefits: string[]
  deliverables: string[]
  technologies: string[]
  pricingTier: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const serviceSchema = new Schema<IService>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    icon: { type: String, required: true },
    keyBenefits: [{ type: String }],
    deliverables: [{ type: String }],
    technologies: [{ type: String }],
    pricingTier: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<IService>('Service', serviceSchema)












