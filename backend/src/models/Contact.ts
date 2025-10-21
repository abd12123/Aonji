import mongoose, { Document, Schema } from 'mongoose'

export interface IContact extends Document {
  name: string
  email: string
  company: string
  serviceInterest: string
  message: string
  status: 'new' | 'read' | 'replied' | 'archived'
  ipAddress?: string
  createdAt: Date
  updatedAt: Date
}

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    serviceInterest: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new' },
    ipAddress: { type: String },
  },
  {
    timestamps: true,
  }
)

contactSchema.index({ email: 1, createdAt: -1 })

export default mongoose.model<IContact>('Contact', contactSchema)










