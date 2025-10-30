import mongoose, { Document, Schema } from 'mongoose'

export interface INewsletter extends Document {
  email: string
  status: 'active' | 'unsubscribed'
  source: string
  ipAddress?: string
  subscribedAt: Date
  unsubscribedAt?: Date
  createdAt: Date
  updatedAt: Date
}

const newsletterSchema = new Schema<INewsletter>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    status: { type: String, enum: ['active', 'unsubscribed'], default: 'active' },
    source: { type: String, default: 'website' },
    ipAddress: { type: String },
    subscribedAt: { type: Date, default: Date.now },
    unsubscribedAt: { type: Date },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<INewsletter>('Newsletter', newsletterSchema)












