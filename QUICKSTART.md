# ⚡ Quick Start Guide

Get the Optimal Solutions website up and running in 5 minutes!

## 🚀 Fast Setup (Using Docker)

The easiest way to get started is using Docker Compose:

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd website

# 2. Start everything with Docker
docker-compose up -d

# 3. Wait for services to start (about 30 seconds)
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# MongoDB: localhost:27017
```

That's it! The website should be running with sample data.

## 🔧 Manual Setup (Without Docker)

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))
- MongoDB 6+ ([Download](https://www.mongodb.com/try/download/community))

### Step 1: Install Frontend Dependencies
```bash
npm install
```

### Step 2: Setup Frontend Environment
```bash
# Copy example environment file
cp .env.example .env

# Edit .env if needed (defaults work for local development)
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 4: Setup Backend Environment
```bash
# Copy example environment file
cp .env.example .env

# IMPORTANT: Edit backend/.env and configure:
# - MONGODB_URI (if not using default)
# - EMAIL_* variables (for contact form)
```

### Step 5: Start MongoDB
```bash
# If installed locally
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in backend/.env
```

### Step 6: Seed Database
```bash
cd backend
npm run seed
```

You should see:
```
✅ Inserted 6 services
✅ Inserted 8 portfolio items
✅ Inserted 8 testimonials
🎉 Database seeded successfully!
```

### Step 7: Start Backend Server
```bash
# In backend directory
npm run dev
```

Backend should start on `http://localhost:5000`

### Step 8: Start Frontend Server
```bash
# In root directory (new terminal)
npm run dev
```

Frontend should start on `http://localhost:3000`

## ✅ Verify Installation

1. **Frontend**: Open http://localhost:3000
   - ✓ Homepage loads
   - ✓ Navigation works
   - ✓ All pages accessible

2. **Backend**: Open http://localhost:5000/health
   - ✓ Returns `{"status":"ok"}`

3. **Database**: Test API endpoints
   - ✓ http://localhost:5000/api/services
   - ✓ http://localhost:5000/api/portfolio
   - ✓ http://localhost:5000/api/testimonials

## 📱 Test Features

### Test Contact Form
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check backend logs for email (won't actually send without email config)

### Test Newsletter
1. Go to http://localhost:3000
2. Scroll to newsletter section
3. Enter email and subscribe
4. Check MongoDB for new subscriber

### Test Portfolio Filters
1. Go to http://localhost:3000/portfolio
2. Click different industry filters
3. Click on a project card to see details

## 🎨 Customize

### Update Company Information
Edit these files:
- `src/components/Footer.tsx` - Footer contact info
- `src/pages/About.tsx` - Company details
- `src/pages/Contact.tsx` - Office locations

### Update Mock Data
Edit backend seed data:
- `backend/src/scripts/seed.ts`
Then re-run: `npm run seed`

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#YOUR_COLOR',
    // ...
  }
}
```

### Update Logo
Replace logo in:
- `src/components/Navigation.tsx`
- `src/components/Footer.tsx`

## 📧 Email Configuration

To enable contact form emails:

### Option 1: Gmail
```bash
# In backend/.env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password  # Generate at myaccount.google.com
EMAIL_FROM=contact@optimalsolutions.com
```

### Option 2: SendGrid
```bash
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_FROM=contact@optimalsolutions.com
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 5000
npx kill-port 5000
```

### MongoDB Connection Failed
```bash
# Check if MongoDB is running
mongosh

# Or use MongoDB Atlas (free cloud database)
# Sign up at mongodb.com/cloud/atlas
# Update MONGODB_URI in backend/.env
```

### Module Not Found
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# Do the same in backend/
cd backend
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

## 📚 Next Steps

1. **Customize Content**: Update text, images, and data
2. **Add Features**: Implement blog, chat, etc.
3. **Deploy**: Follow [DEPLOYMENT.md](DEPLOYMENT.md)
4. **Contribute**: See [CONTRIBUTING.md](CONTRIBUTING.md)

## 🆘 Need Help?

- 📖 Read the full [README.md](README.md)
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for production setup
- 🔧 Review [backend/README.md](backend/README.md) for API docs
- 💬 Open an issue on GitHub

## 🎉 Success!

If everything is working:
- ✅ Frontend running on port 3000
- ✅ Backend running on port 5000  
- ✅ Database connected and seeded
- ✅ All pages loading correctly

You're ready to start customizing! 🚀

---

**Happy Coding!** ❤️




