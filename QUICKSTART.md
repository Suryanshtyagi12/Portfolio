# ⚡ QUICK START GUIDE

Get your portfolio running in 5 minutes!

---

## 🚀 Step 1: Install (30 seconds)

```bash
npm install
```

---

## 📝 Step 2: Add Your Content (3 minutes)

Open **`src/data/config.js`** and update:

### ✅ Essential (Must Change):
1. **Profile Photo** - Line 14
2. **Resume Link** - Line 21
3. **LinkedIn URL** - Line 29
4. **Projects** (at least 2-3) - Line 55+
5. **Your Skills** - Line 105+

### 📸 Where to Upload Images:

**Quick Upload to Imgur:**
1. Go to https://imgur.com
2. Click "New post"
3. Upload image
4. Right-click → "Copy image address"
5. Paste in config.js

---

## 🎯 Step 3: Run It! (10 seconds)

```bash
npm run dev
```

Open: http://localhost:3000

---

## 🌐 Step 4: Deploy (2 minutes)

### Easiest Method - Netlify:

1. Build:
```bash
npm run build
```

2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder
4. Done! 🎉

Your site is live!

---

## 📋 Minimum Content Needed

Before deploying, make sure you have:

- [ ] Profile photo URL
- [ ] Resume PDF link (Google Drive)
- [ ] LinkedIn profile URL
- [ ] 2-3 projects with:
  - [ ] Title & description
  - [ ] Screenshot URL
  - [ ] GitHub link
- [ ] Your email

Everything else can be added later!

---

## 🎨 Quick Customization (Optional)

### Change Colors:

Edit `tailwind.config.js` (line 12-13):
```javascript
colors: {
  primary: '#3B82F6', // Change to your color
  accent: '#8B5CF6',  // Change to your color
}
```

Popular colors:
- Blue: `#3B82F6`
- Purple: `#8B5CF6`
- Green: `#10B981`
- Red: `#EF4444`
- Orange: `#F59E0B`

---

## 🔧 Troubleshooting

### Issue: npm install fails
```bash
# Clear cache and retry
npm cache clean --force
npm install
```

### Issue: Port 3000 already in use
```bash
# Use different port
npm run dev -- --port 3001
```

### Issue: Images not showing
- Make sure URLs end with `.jpg`, `.png`, or `.webp`
- Test URL in browser first
- Use Imgur for hosting

---

## 📱 Test Before Deploying

- [ ] Profile photo loads
- [ ] Resume link works
- [ ] All project links work
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive (resize browser)
- [ ] Navigation smooth scroll works

---

## 🎓 Full Documentation

- **Content Guide**: See `CONTENT_GUIDE.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Main README**: See `README.md`

---

## 💡 Pro Tips

1. **Use placeholder images initially** - Deploy fast, update later
2. **Test locally first** - Always run `npm run dev` before deploy
3. **Keep it simple** - Start with 2-3 projects, add more later
4. **Mobile matters** - Test on phone
5. **Speed matters** - Use compressed images (< 500KB each)

---

## 🆘 Quick Help

### Can't find config.js?
```
src/data/config.js
```

### Where to upload photos?
```
https://imgur.com (no account needed)
```

### Where to host resume?
```
Google Drive (make it public)
```

### Best deployment platform?
```
Netlify (drag & drop, free)
```

---

## ✨ You're Ready!

1. `npm install`
2. Edit `src/data/config.js`
3. `npm run dev` (test)
4. `npm run build`
5. Deploy to Netlify

**That's it!** 🎉

Need more help? Check:
- `README.md` - Full guide
- `CONTENT_GUIDE.md` - Detailed content instructions
- `DEPLOYMENT.md` - All deployment options

---

**Questions?** Email: tyagisurya.04@gmail.com

🚀 **Happy Building!**
