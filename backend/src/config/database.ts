import mongoose from 'mongoose'

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/optimal-solutions'
    
    await mongoose.connect(mongoUri)
    
    console.log('✅ MongoDB connected successfully')
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err)
    })
    
    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected')
    })
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw error
  }
}

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await mongoose.disconnect()
    console.log('MongoDB disconnected')
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error)
    throw error
  }
}












