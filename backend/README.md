# Optimal Solutions Backend API

RESTful API built with Node.js, Express, TypeScript, and MongoDB for the Optimal Solutions company website.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Seed database with sample data
npm run seed

# Start development server
npm run dev
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Health Check
```
GET /health
```

### Services

#### Get All Services
```
GET /api/services
```

Response:
```json
[
  {
    "id": "digital-transformation",
    "title": "Digital Transformation Consulting",
    "shortDescription": "...",
    "fullDescription": "...",
    "keyBenefits": [...],
    "deliverables": [...],
    "technologies": [...],
    "pricingTier": "Enterprise"
  }
]
```

#### Get Service by ID
```
GET /api/services/:id
```

### Portfolio

#### Get All Portfolio Items
```
GET /api/portfolio
```

Query Parameters:
- `industry` - Filter by industry (retail, healthcare, finance, etc.)
- `year` - Filter by year
- `serviceType` - Filter by service type
- `featured` - Filter featured projects (true/false)

Example:
```
GET /api/portfolio?industry=retail&featured=true
```

#### Get Portfolio Item by ID
```
GET /api/portfolio/:id
```

### Testimonials

#### Get All Testimonials
```
GET /api/testimonials
```

Query Parameters:
- `featured` - Filter featured testimonials (true/false)

### Contact Form

#### Submit Contact Form
```
POST /api/contact
```

Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "serviceInterest": "digital-transformation",
  "message": "I'm interested in your services..."
}
```

Response:
```json
{
  "message": "Contact form submitted successfully",
  "id": "..."
}
```

**Rate Limit**: 5 requests per hour per IP

### Newsletter

#### Subscribe to Newsletter
```
POST /api/newsletter
```

Body:
```json
{
  "email": "user@example.com"
}
```

## 🗄️ Database Models

### Service
```typescript
{
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
```

### Portfolio
```typescript
{
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: { metric: string, value: string }[]
  testimonial: { text: string, author: string, position: string }
  images: string[]
  technologies: string[]
  duration: string
  teamSize: number
  year: string
  serviceType: string
  featured: boolean
  active: boolean
}
```

### Testimonial
```typescript
{
  id: string
  clientName: string
  position: string
  company: string
  rating: number
  text: string
  avatar: string
  projectRef: string
  featured: boolean
  active: boolean
}
```

### Contact
```typescript
{
  name: string
  email: string
  company: string
  serviceInterest: string
  message: string
  status: 'new' | 'read' | 'replied' | 'archived'
  ipAddress: string
}
```

### Newsletter
```typescript
{
  email: string
  status: 'active' | 'unsubscribed'
  source: string
  ipAddress: string
  subscribedAt: Date
}
```

## 🔐 Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting
- Input validation
- SQL injection prevention (NoSQL)
- XSS protection

## 📧 Email Configuration

The API uses Nodemailer for sending emails. Configure your email service in `.env`:

### Gmail Example
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**Note**: For Gmail, you need to use an App Password, not your regular password.

### Other Providers
- **SendGrid**: Use SMTP or their API
- **Mailgun**: SMTP configuration
- **AWS SES**: SMTP or SDK

## 🛠️ Scripts

```bash
# Development
npm run dev          # Start with hot reload

# Production
npm run build        # Compile TypeScript
npm start            # Run compiled code

# Database
npm run seed         # Seed database with sample data
```

## 📦 Dependencies

### Production
- express - Web framework
- mongoose - MongoDB ODM
- cors - CORS middleware
- helmet - Security headers
- express-validator - Input validation
- nodemailer - Email sending
- express-rate-limit - Rate limiting
- morgan - HTTP logger
- compression - Response compression
- dotenv - Environment variables

### Development
- typescript - Type safety
- ts-node-dev - Development server
- @types/* - TypeScript definitions

## 🔧 Configuration

### Rate Limiting
Default configuration:
- General API: 100 requests per 15 minutes
- Contact Form: 5 submissions per hour

Customize in `.env`:
```env
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### MongoDB
```env
MONGODB_URI=mongodb://localhost:27017/optimal-solutions
```

For production, use MongoDB Atlas or similar:
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db?retryWrites=true&w=majority
```

## 🚀 Deployment

### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### Render
1. Connect GitHub repository
2. Set environment variables
3. Deploy

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 📊 Monitoring

Recommended tools:
- **Logs**: Winston or Pino
- **APM**: New Relic or DataDog
- **Errors**: Sentry
- **Uptime**: UptimeRobot

## 🧪 Testing

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## 📝 Error Handling

The API uses consistent error responses:

```json
{
  "error": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 429: Too Many Requests
- 500: Internal Server Error

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests
5. Submit a pull request

## 📄 License

MIT License

---

For more information, visit the main [README](../README.md)










