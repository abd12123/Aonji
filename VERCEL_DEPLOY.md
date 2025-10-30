# Quick Vercel Deployment Guide

## ✅ Your Project is Ready to Deploy!

This repository is configured and ready for Vercel deployment.

## 🚀 Deploy Now

### Method 1: Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub

2. **Import Repository**
   - Click "Import Git Repository"
   - Select `abd12123/Aonji`
   - Click "Import"

3. **Configure Project**
   Vercel will auto-detect settings, but verify:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   Name: VITE_API_URL
   Value: /api
   
   Name: VITE_SITE_URL
   Value: https://your-project.vercel.app
   ```
   
   > **Note**: You'll update `VITE_SITE_URL` after first deployment

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live!

6. **Update Environment Variable**
   - After deployment, copy your Vercel URL (e.g., `https://aonji.vercel.app`)
   - Go to Project Settings → Environment Variables
   - Update `VITE_SITE_URL` with your actual URL
   - Redeploy (Settings → Deployments → Redeploy)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? (press enter for default)
# - Directory? ./ (press enter)
# - Override settings? No

# Deploy to production
vercel --prod
```

## ⚙️ What's Configured

✅ **vercel.json** - Optimized configuration with:
- SPA routing (all routes → index.html)
- Security headers
- Asset caching
- Framework detection

✅ **.vercelignore** - Excludes:
- Backend directory
- Development files
- Documentation

✅ **.env.example** - Template for environment variables

✅ **package.json** - Build scripts configured

## 📝 Important Notes

### Frontend Only
This deployment includes **only the frontend**. The backend needs separate deployment.

### Backend Deployment Required
For full functionality (contact form, newsletter), deploy backend to:
- **Railway** (recommended): [railway.app](https://railway.app)
- **Render**: [render.com](https://render.com)
- **Heroku**: [heroku.com](https://heroku.com)

After backend deployment:
1. Get your backend URL (e.g., `https://your-app.railway.app`)
2. Update Vercel environment variable:
   ```
   VITE_API_URL=https://your-app.railway.app/api
   ```
3. Redeploy frontend

### Features Without Backend
Until backend is deployed:
- ✅ All pages will load
- ✅ Navigation works
- ✅ Animations and UI work
- ❌ Contact form won't submit
- ❌ Newsletter signup won't work

## 🔄 Automatic Deployments

Once connected, Vercel will automatically deploy:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## 🌐 Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. SSL certificate auto-configured

## 🐛 Troubleshooting

### Build Failed
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### 404 on Routes
- Verify `vercel.json` rewrites are configured
- Check that SPA routing is enabled

### Environment Variables Not Working
- Ensure variables start with `VITE_`
- Redeploy after adding/changing variables
- Check variable names match exactly

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Full Deployment Guide](./DEPLOYMENT.md)

## ✨ Next Steps

1. Deploy frontend to Vercel ✓
2. Deploy backend to Railway/Render
3. Configure environment variables
4. Test all functionality
5. Add custom domain (optional)

---

**Ready to deploy?** Click here: [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/abd12123/Aonji)
