# Deployment Guide

This guide covers deploying both frontend and backend of the Optimal Solutions website.

## 🎯 Overview

- **Frontend**: Deploy to Vercel (recommended) or Netlify
- **Backend**: Deploy to Railway, Render, or Heroku
- **Database**: MongoDB Atlas (cloud database)

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database seeded with data
- [ ] Email service configured
- [ ] CORS origins updated for production
- [ ] API URL updated in frontend
- [ ] SSL/HTTPS enabled
- [ ] Error tracking setup (optional)
- [ ] Analytics integrated (optional)

## 🗄️ Database Setup (MongoDB Atlas)

### 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new cluster (free tier available)

### 2. Configure Database
```bash
# Get connection string
mongodb+srv://<username>:<password>@cluster.mongodb.net/optimal-solutions?retryWrites=true&w=majority

# Add to backend .env
MONGODB_URI=your_connection_string
```

### 3. Seed Database
```bash
cd backend
npm run seed
```

### 4. Configure Network Access
- Add IP addresses that can access the database
- For testing: Allow access from anywhere (0.0.0.0/0)
- For production: Whitelist specific IPs

## 🚀 Frontend Deployment (Vercel)

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub Integration

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

6. Add Environment Variables:
   ```
   VITE_API_URL=https://your-backend.railway.app/api
   VITE_SITE_URL=https://your-site.vercel.app
   ```

7. Deploy

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 🔧 Backend Deployment (Railway)

### Method 1: Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
cd backend
railway init

# Add variables
railway variables set MONGODB_URI="your_mongo_uri"
railway variables set EMAIL_USER="your_email"
# ... add all environment variables

# Deploy
railway up
```

### Method 2: GitHub Integration

1. Push code to GitHub
2. Go to [Railway](https://railway.app)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Configure:
   - **Root Directory**: `/backend`
   - **Start Command**: `npm start`

7. Add Environment Variables:
   ```
   PORT=5000
   MONGODB_URI=your_connection_string
   NODE_ENV=production
   CORS_ORIGIN=https://your-site.vercel.app
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email
   EMAIL_PASSWORD=your_app_password
   EMAIL_FROM=contact@optimalsolutions.com
   ```

8. Deploy

### Get Railway URL
```bash
railway domain
```

Update this URL in your frontend environment variables.

## 🌐 Alternative: Render

### Backend on Render

1. Go to [Render](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - **Name**: optimal-solutions-api
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend`

5. Add Environment Variables (same as Railway)

6. Create Service

## 📧 Email Service Setup

### Gmail Setup
1. Enable 2FA on your Google account
2. Generate App Password:
   - Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other"
   - Copy the 16-character password

3. Add to environment variables:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ```

### SendGrid (Alternative)
```bash
# Install SendGrid
npm install @sendgrid/mail

# Configure
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your_sendgrid_api_key
```

## 🔒 Environment Variables Reference

### Frontend (.env.production)
```env
VITE_API_URL=https://your-api.railway.app/api
VITE_SITE_URL=https://your-site.vercel.app
```

### Backend (.env or Railway/Render variables)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
CORS_ORIGIN=https://your-site.vercel.app

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=contact@optimalsolutions.com

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🐳 Docker Deployment

### Create Dockerfile (Backend)
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

### Create docker-compose.yml
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=${MONGODB_URI}
      - NODE_ENV=production
    depends_on:
      - mongodb

  mongodb:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

### Deploy
```bash
docker-compose up -d
```

## 📊 Post-Deployment

### 1. Test Deployment
```bash
# Test backend
curl https://your-api.railway.app/health

# Test frontend
curl https://your-site.vercel.app
```

### 2. Monitor Application
- Check logs in Railway/Render dashboard
- Monitor error rates
- Set up uptime monitoring (UptimeRobot, Pingdom)

### 3. Setup Error Tracking (Optional)
```bash
# Install Sentry
npm install @sentry/node @sentry/react

# Configure in code
Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production"
})
```

### 4. Enable Analytics (Optional)
- Google Analytics
- Mixpanel
- Plausible (privacy-friendly)

## 🔧 Troubleshooting

### CORS Errors
- Verify `CORS_ORIGIN` matches your frontend URL exactly
- Check protocol (http vs https)
- Ensure no trailing slash

### Database Connection Failed
- Verify MongoDB connection string
- Check IP whitelist in MongoDB Atlas
- Ensure database credentials are correct

### Email Not Sending
- Verify email credentials
- Check spam folder
- Enable "Less secure app access" or use App Password
- Check email service logs

### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

## 🔄 Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Railway
        run: |
          npm i -g @railway/cli
          railway up
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

## 📝 SSL/HTTPS

Both Vercel and Railway provide automatic SSL certificates. No additional configuration needed!

## 💰 Cost Estimate

### Free Tier
- **Vercel**: Free (with limits)
- **Railway**: $5/month credit (enough for small apps)
- **Render**: Free tier available
- **MongoDB Atlas**: Free tier (512MB storage)

### Paid (if needed)
- Vercel Pro: $20/month
- Railway: Pay as you go (~$10-20/month)
- MongoDB Atlas: Starting at $9/month

## ✅ Post-Deployment Checklist

- [ ] Both frontend and backend deployed
- [ ] Database connected and seeded
- [ ] Email service working
- [ ] Contact form tested
- [ ] Newsletter signup tested
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present
- [ ] Analytics tracking (if implemented)
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

## 🆘 Support

If you encounter issues:
1. Check application logs
2. Review environment variables
3. Test API endpoints individually
4. Check database connection
5. Verify CORS configuration

---

Happy Deploying! 🚀












