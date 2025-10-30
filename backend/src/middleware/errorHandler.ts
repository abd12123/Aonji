import { Request, Response, NextFunction } from 'express'

interface ErrorResponse {
  message: string
  errors?: any[]
  stack?: string
}

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err)

  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  const response: ErrorResponse = {
    message,
  }

  if (err.errors) {
    response.errors = err.errors
  }

  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack
  }

  res.status(statusCode).json(response)
}












