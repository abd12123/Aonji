import mongoose, { Document, Schema } from 'mongoose'

export interface ITestimonial extends Document {
  id: string
  clientName: string
  position: string
  company: string
  rating: number
  text: string
  avatar: string
  projectRef?: string
  featured: boolean
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const testimonialSchema = new Schema<ITestimonial>(
  {
    id: { type: String, required: true, unique: true },
    clientName: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    text: { type: String, required: true },
    avatar: { type: String, required: true },
    projectRef: { type: String },
    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<ITestimonial>('Testimonial', testimonialSchema)












