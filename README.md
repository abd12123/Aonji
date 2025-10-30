# Optimal Solutions - Professional Company Website

A modern, full-stack company website built with React, TypeScript, Node.js, Express, and MongoDB. Features beautiful animations, responsive design, and a complete backend API.

![Optimal Solutions](https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop)

## 🚀 Features

### Frontend
- ⚡ **Modern Tech Stack**: React 18, TypeScript, Vite
- 🎨 **Beautiful UI**: Tailwind CSS with custom design system
- ✨ **Smooth Animations**: Framer Motion for delightful interactions
- 📱 **Fully Responsive**: Mobile-first design approach
- 🎯 **SEO Optimized**: React Helmet for meta tags
- 🚦 **Code Splitting**: Lazy loading for optimal performance
- ♿ **Accessible**: ARIA labels and keyboard navigation
- 🌙 **Cookie Consent**: GDPR-compliant cookie banner

### Backend
- 🔐 **Secure API**: Express with Helmet and CORS
- 📊 **MongoDB Database**: Mongoose ODM
- ✉️ **Email Integration**: Nodemailer for contact forms
- 🛡️ **Rate Limiting**: Protection against abuse
- ✅ **Input Validation**: Express-validator
- 📝 **Logging**: Morgan for request logging
- 🗜️ **Compression**: Gzip compression for responses

### Pages
1. **Home** - Hero section, stats, services preview, portfolio highlights, testimonials
2. **About** - Company mission, timeline, team, core values, awards
3. **Services** - 6 comprehensive service offerings with details
4. **Portfolio** - 8+ case studies with filtering and detailed modals
5. **Contact** - Form with validation, office locations, FAQs
6. **404** - Creative not found page

## 📁 Project Structure

```
website/
├── frontend (React + TypeScript + Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
└── backend (Node.js + Express + TypeScript)
    ├── src/
    │   ├── controllers/    # Request handlers
    │   ├── models/         # Mongoose models
    │   ├── routes/         # API routes
    │   ├── middleware/     # Custom middleware
    │   ├── config/         # Configuration
    │   ├── utils/          # Utility functions
    │   ├── scripts/        # Database scripts
    │   └── server.ts       # Server entry point
    ├── package.json
    └── tsconfig.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn

### Frontend Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration

# Seed the database
npm run seed

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The backend will run on `http://localhost:5000`

## 🔧 Environment Variables

### Frontend (`.env`)
```env
VITE_API_URL=http://localhost:5000/api
VITE_SITE_URL=http://localhost:3000
```

### Backend (`backend/.env`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/optimal-solutions
NODE_ENV=development

# Email Configuration (Example with Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=contact@optimalsolutions.com

# CORS
CORS_ORIGIN=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 📡 API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID

### Portfolio
- `GET /api/portfolio` - Get all portfolio items (supports filtering)
  - Query params: `industry`, `year`, `serviceType`, `featured`
- `GET /api/portfolio/:id` - Get portfolio item by ID

### Testimonials
- `GET /api/testimonials` - Get all testimonials
  - Query params: `featured`

### Contact
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, company, serviceInterest, message }`

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
  - Body: `{ email }`

## 🎨 Design System

### Colors
- **Primary**: Indigo (#4F46E5)
- **Navy**: Deep blue (#1A2332)
- **Gradients**: Primary to lighter shades

### Typography
- **Headings**: Poppins (display font)
- **Body**: Inter (sans-serif)

### Components
- Buttons (Primary, Secondary)
- Cards (with hover effects)
- Forms (with validation)
- Modals & Overlays
- Loading states
- Toast notifications

## 🚀 Deployment

### Quick Deploy to Vercel (Frontend)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abd12123/Aonji)

#### Option 1: Vercel Dashboard (Recommended)

1. **Push to GitHub** (already done ✓)
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import `abd12123/Aonji` repository
   
3. **Configure Build Settings**
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**
   ```
   VITE_API_URL=/api
   VITE_SITE_URL=https://your-project.vercel.app
   ```
   
   > **Note**: Update `VITE_SITE_URL` after first deployment with your actual Vercel URL

5. **Deploy** - Click "Deploy" button

#### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

### Backend Deployment (Required for Full Functionality)

The backend must be deployed separately. Choose one:

#### Railway (Recommended)

1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Select `backend` folder as root directory
4. Add environment variables (see `backend/.env.example`)
5. Deploy

#### Render

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Root Directory: `backend`
5. Build Command: `npm install && npm run build`
6. Start Command: `npm start`
7. Add environment variables
8. Deploy

#### After Backend Deployment

Update your Vercel environment variables:
```
VITE_API_URL=https://your-backend.railway.app/api
```

Then redeploy the frontend on Vercel.

### Alternative: Docker

```bash
# Build and run with Docker Compose
docker-compose up -d
```

### Post-Deployment Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway/Render
- [ ] Environment variables configured
- [ ] Database connected (MongoDB Atlas)
- [ ] Email service configured
- [ ] Test contact form
- [ ] Test newsletter signup
- [ ] Verify all pages load correctly

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📊 Features Breakdown

### Animations
- Framer Motion for page transitions
- Scroll-triggered animations
- Hover effects
- Loading spinners
- Parallax effects

### Forms
- React Hook Form for state management
- Zod for validation
- Real-time error messages
- Success/error notifications
- Rate limiting protection

### Performance
- Code splitting
- Lazy loading
- Image optimization
- Compression
- Caching strategies

### SEO
- Meta tags
- Open Graph
- Twitter Cards
- Sitemap ready
- Semantic HTML

## 🧪 Testing

```bash
# Frontend tests
npm run test

# Backend tests
cd backend && npm run test

# E2E tests
npm run test:e2e
```

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact:
- Email: contact@optimalsolutions.com
- Website: https://optimalsolutions.com

## 🙏 Acknowledgments

- Design inspired by: Stripe, Vercel, Apple
- Images from: Unsplash
- Icons: Lucide React
- UI Framework: Tailwind CSS

---

Built with ❤️ by Optimal Solutions Team



