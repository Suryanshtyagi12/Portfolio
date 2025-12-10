# 📝 Content Addition Guide

This guide shows you exactly WHERE and HOW to add your images, links, and content.

---

## 🎯 Single File to Edit

**📂 File: `src/data/config.js`**

This is the ONLY file you need to edit for all your content!

---

## 1️⃣ Profile Photo

### Where to add:
```javascript
personal: {
  profileImage: "YOUR_IMAGE_URL_HERE",
}
```

### How to get image URL:

#### Option A: Imgur (Recommended)
1. Go to [imgur.com](https://imgur.com)
2. Click "New post"
3. Upload your photo
4. Right-click uploaded image → "Copy image address"
5. Paste in config.js

#### Option B: GitHub
1. Create a public repo called "assets"
2. Upload your photo
3. Click on the image
4. Click "Download" button → Right-click → "Copy link address"
5. Paste in config.js

#### Option C: Direct URL
- Any image hosting service URL
- Must end in `.jpg`, `.png`, `.webp`

### Example:
```javascript
profileImage: "https://i.imgur.com/abc123.jpg",
```

---

## 2️⃣ Resume PDF

### Where to add:
```javascript
personal: {
  resumeLink: "YOUR_RESUME_URL_HERE",
}
```

### How to get resume URL:

#### Google Drive (Recommended):
1. Upload PDF to Google Drive
2. Right-click file → Share
3. Change to "Anyone with the link"
4. Copy link
5. Paste in config.js

**Format:** `https://drive.google.com/file/d/YOUR_FILE_ID/view`

### Example:
```javascript
resumeLink: "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0/view",
```

---

## 3️⃣ LinkedIn Profile

### Where to add:
```javascript
social: {
  linkedin: "YOUR_LINKEDIN_URL",
}
```

### How to get:
1. Go to your LinkedIn profile
2. Copy URL from browser
3. Paste in config.js

### Example:
```javascript
linkedin: "https://linkedin.com/in/suryanshtyagi",
```

---

## 4️⃣ Projects

### Where to add:
```javascript
projects: [
  {
    id: 1,
    title: "PROJECT_NAME",
    description: "BRIEF_DESCRIPTION",
    image: "PROJECT_SCREENSHOT_URL",
    github: "GITHUB_REPO_URL",
    demo: "LIVE_DEMO_URL", // Optional
    tags: ["Tech1", "Tech2", "Tech3"],
  },
  // Add more projects...
]
```

### How to add project images:

#### Screenshots:
1. Open your project
2. Take screenshot (full window)
3. Upload to Imgur/GitHub
4. Copy image URL
5. Paste in `image:` field

### Example:
```javascript
{
  id: 1,
  title: "AI Chatbot",
  description: "An intelligent chatbot using GPT-4 and React",
  image: "https://i.imgur.com/project1.png",
  github: "https://github.com/Suryanshtyagi12/ai-chatbot",
  demo: "https://mychatbot.netlify.app",
  tags: ["React", "Python", "OpenAI"],
}
```

### Tips:
- Use 16:9 ratio screenshots (1200x800px ideal)
- Show the main UI/feature
- Clear, high-quality images
- If no demo, leave empty: `demo: ""`

---

## 5️⃣ Certificates

### Where to add:
```javascript
certificates: [
  {
    id: 1,
    title: "CERTIFICATE_NAME",
    issuer: "ORGANIZATION_NAME",
    date: "YEAR",
    image: "CERTIFICATE_IMAGE_URL",
    link: "VERIFICATION_URL",
  },
  // Add more certificates...
]
```

### How to add certificate images:

#### Option A: Full Certificate
1. Download certificate PDF
2. Take screenshot or convert to JPG
3. Upload to Imgur
4. Copy image URL

#### Option B: Organization Logo
1. Google: "Organization name logo"
2. Download logo
3. Upload to Imgur
4. Copy image URL

### Example:
```javascript
{
  id: 1,
  title: "Data Science Professional Certificate",
  issuer: "IBM",
  date: "2024",
  image: "https://i.imgur.com/cert1.png",
  link: "https://coursera.org/verify/ABC123XYZ",
}
```

### Tips:
- Use clear, professional images
- Add verification links when available
- If no link, use: `link: ""`

---

## 6️⃣ Education & Personal Info

### Where to edit:
```javascript
education: {
  degree: "YOUR_DEGREE",
  university: "YOUR_UNIVERSITY",
  year: "START_YEAR - END_YEAR",
  cgpa: "YOUR_CGPA",
}

personal: {
  name: "YOUR_NAME",
  tagline: "YOUR_TAGLINE",
  bio: "YOUR_BIO",
  goal: "YOUR_CAREER_GOAL",
}
```

### Example:
```javascript
education: {
  degree: "B.Tech in Computer Science",
  university: "Lovely Professional University",
  year: "2022 - 2026",
  cgpa: "8.5",
}

personal: {
  name: "Suryansh Tyagi",
  tagline: "Full Stack Developer & AI Enthusiast",
  bio: "Passionate about building AI-powered applications...",
  goal: "Secure a role at a top tech company",
}
```

---

## 7️⃣ Skills

### Where to edit:
```javascript
skills: {
  languages: ["Python", "JavaScript", "SQL"],
  frameworks: ["React", "Django", "TensorFlow"],
  tools: ["Git", "Docker", "AWS"],
  concepts: ["Machine Learning", "Web Development"],
}
```

### Tips:
- Add your strongest skills
- Use official names (e.g., "JavaScript" not "JS")
- Group by category

---

## 8️⃣ Contact Form Setup (Optional)

### Where to add:
```javascript
emailjs: {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
}
```

### How to set up:

1. **Sign up at [EmailJS.com](https://www.emailjs.com/)**
2. **Create Email Service:**
   - Go to Email Services
   - Add Email Service (Gmail/Outlook)
   - Follow connection steps
   - Copy Service ID

3. **Create Email Template:**
   - Go to Email Templates
   - Create New Template
   - Use these variables:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{subject}}`
     - `{{message}}`
   - Copy Template ID

4. **Get Public Key:**
   - Go to Account → API Keys
   - Copy Public Key

5. **Add to config.js:**
```javascript
emailjs: {
  serviceId: "service_abc123",
  templateId: "template_xyz789",
  publicKey: "your_public_key_here",
}
```

---

## 📋 Quick Checklist

Before you're done:
- [ ] Profile photo added
- [ ] Resume link added
- [ ] LinkedIn profile added
- [ ] All projects have images & links
- [ ] All certificates have images
- [ ] Skills updated
- [ ] Education details correct
- [ ] Bio and goal written
- [ ] EmailJS configured (optional)

---

## 🎨 Image Best Practices

### Profile Photo:
- ✅ Professional headshot
- ✅ 400x400px or larger
- ✅ Square ratio
- ✅ Clear face, good lighting
- ❌ Low quality, blurry
- ❌ Group photos

### Project Screenshots:
- ✅ 16:9 ratio (1200x800px)
- ✅ Full UI visible
- ✅ Light mode (more visible)
- ✅ Clear text
- ❌ Cropped/partial UI
- ❌ Too small

### Certificates:
- ✅ Full certificate or logo
- ✅ 600x400px or larger
- ✅ Clear text
- ❌ Blurry scan
- ❌ Watermarked

---

## 🔗 URL Testing

Before adding any URL:
1. Copy URL
2. Open in new browser tab
3. Verify it loads correctly
4. Then add to config.js

---

## 💡 Pro Tips

1. **Use Imgur** for all images (easiest)
2. **Test all links** before deploying
3. **Keep descriptions short** (1-2 sentences)
4. **Use consistent naming** (e.g., all caps for titles)
5. **Add at least 4 projects** for good showcase
6. **Update regularly** with new projects/certs

---

## 🆘 Need Help?

### Can't upload images?
- Try Imgur (no account needed)
- Or create GitHub repo called "portfolio-assets"

### Wrong image URL format?
- Must be direct link ending in `.jpg`, `.png`, `.webp`
- Not a webpage link

### Resume not showing?
- Google Drive: Change sharing to "Anyone with link"
- Use `/view` at end, not `/edit`

---

**All set!** Run `npm run dev` to see your changes! 🚀
