# 🌐 Deployment Guide

Complete guide to deploy your portfolio on various platforms.

## 🎯 Before Deployment

1. **Update all content** in `src/data/config.js`
2. **Test locally**: `npm run dev`
3. **Build the project**: `npm run build`
4. **Test the build**: `npm run preview`

---

## 1️⃣ Netlify (EASIEST - Recommended)

### Method A: Drag & Drop (No CLI needed)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://app.netlify.com/)
3. Sign up/login
4. Click "Add new site" → "Deploy manually"
5. Drag the entire `dist/` folder into the upload area
6. Wait 30 seconds
7. Done! 🎉 Your site is live!

### Method B: Continuous Deployment (GitHub)

1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Import from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

**Custom Domain:**
- Go to Site settings → Domain management
- Add custom domain
- Update DNS records

---

## 2️⃣ Vercel (Fast & Easy)

### Method A: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production:
   ```bash
   vercel --prod
   ```

### Method B: GitHub Integration

1. Push to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click "Import Project"
4. Select your repository
5. Keep default settings (Vercel auto-detects Vite)
6. Click "Deploy"

---

## 3️⃣ GitHub Pages (Free Hosting)

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://Suryanshtyagi12.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Your repo name
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Save

6. Visit: `https://Suryanshtyagi12.github.io/portfolio`

---

## 4️⃣ Hugging Face Spaces

### Method A: Manual Upload

1. Go to [Hugging Face Spaces](https://huggingface.co/spaces)
2. Create new Space
3. Select "Static" template
4. Build project:
   ```bash
   npm run build
   ```
5. Upload all files from `dist/` folder
6. Done!

### Method B: Git Integration

1. Create Space on Hugging Face
2. Clone the Space:
   ```bash
   git clone https://huggingface.co/spaces/YOUR_USERNAME/SPACE_NAME
   ```
3. Copy `dist/` contents to the cloned folder
4. Create `README.md`:
   ```yaml
   ---
   title: Suryansh Portfolio
   emoji: 🚀
   colorFrom: blue
   colorTo: purple
   sdk: static
   pinned: false
   ---
   ```
5. Push:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push
   ```

---

## 5️⃣ Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize:
   ```bash
   firebase init hosting
   ```
   - Choose: Use existing project or create new
   - Public directory: `dist`
   - Configure as SPA: Yes
   - Overwrite index.html: No

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

## 6️⃣ Railway

1. Push to GitHub
2. Go to [Railway](https://railway.app/)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Add build settings:
   - Build Command: `npm run build`
   - Start Command: `npx vite preview --host 0.0.0.0 --port $PORT`
7. Deploy!

---

## 7️⃣ Render

1. Push to GitHub
2. Go to [Render](https://render.com/)
3. Click "New Static Site"
4. Connect GitHub repository
5. Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Create Static Site

---

## 🎨 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All images are visible
- [ ] Navigation works
- [ ] Animations are smooth
- [ ] Dark/light mode toggle works
- [ ] Contact form works (if configured)
- [ ] Resume downloads correctly
- [ ] All links open in new tabs
- [ ] Mobile responsive
- [ ] Fast loading speed

---

## 🔧 Common Issues & Fixes

### Issue: White screen after deployment

**Fix:**
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- For GitHub Pages, ensure base matches repo name

### Issue: Images not loading

**Fix:**
- Use absolute URLs (starting with `https://`)
- Test image URLs in browser
- Check CORS settings if using external images

### Issue: 404 on page refresh

**Fix:**
- Configure redirects for SPA:
  
**Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Issue: Contact form not working

**Fix:**
- Verify EmailJS credentials
- Check browser console
- Test in EmailJS dashboard
- Ensure domain is whitelisted

---

## 📊 Performance Optimization

### Before deployment:

1. **Optimize images:**
   ```bash
   # Use tools like TinyPNG, Squoosh
   # Recommended: 70-80% quality JPG
   ```

2. **Check bundle size:**
   ```bash
   npm run build
   # Check dist/ folder size
   ```

3. **Test performance:**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Use [GTmetrix](https://gtmetrix.com/)

---

## 🌐 Custom Domain Setup

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS at your registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: YOUR_SITE.netlify.app
   ```

### For Vercel:
1. Go to Project Settings → Domains
2. Add domain
3. Follow DNS instructions

### For GitHub Pages:
1. Add file `public/CNAME` with your domain
2. Update DNS:
   ```
   Type: A
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

---

## 📝 Environment Variables (if needed)

If you add any API keys or sensitive data:

### Netlify:
Site settings → Environment variables

### Vercel:
Project Settings → Environment Variables

### In code:
```javascript
const API_KEY = import.meta.env.VITE_API_KEY;
```

Create `.env`:
```
VITE_API_KEY=your_key_here
```

Add to `.gitignore`:
```
.env
.env.local
```

---

## 🚀 Quick Deploy Commands

```bash
# Netlify
netlify deploy --prod

# Vercel
vercel --prod

# GitHub Pages
npm run deploy

# Firebase
firebase deploy

# Manual (any platform)
npm run build
# Then upload dist/ folder
```

---

## 💡 Pro Tips

1. **Use Netlify/Vercel** for easiest deployment
2. **Set up custom domain** for professional look
3. **Enable HTTPS** (usually automatic)
4. **Monitor analytics** with Google Analytics
5. **Test on multiple devices** before sharing
6. **Keep dependencies updated**: `npm update`

---

**Need Help?** Open an issue or contact: tyagisurya.04@gmail.com

🎉 **Happy Deploying!**
