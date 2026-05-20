# 🗂️ Portfolio — Data Professional

A clean, professional, and fully data-driven portfolio SPA.  
All content lives in **JSON files** — no coding required to update your info.

---

## 📁 Project structure

```
portfolio/
├── index.html                  ← Main HTML shell (no content here)
├── netlify.toml                ← Netlify deployment config
│
├── data/                       ← 📝 YOUR CONTENT LIVES HERE
│   ├── config.json             ← Name, title, email, links, photo path
│   ├── about.json              ← Bio paragraphs + stats (years, projects…)
│   ├── skills.json             ← Tech stack grouped by category
│   ├── projects.json           ← Project cards + modal detail
│   ├── experience.json         ← Work history timeline
│   └── certifications.json     ← Certificates with verify links
│
└── assets/
    ├── css/styles.css          ← All styles (edit for color/font changes)
    ├── js/main.js              ← All logic (fetches JSON, renders site)
    └── images/
        ├── photo.jpg           ← 📷 Your profile photo (replace this)
        └── projects/
            ├── project-1.png   ← Project screenshots
            └── ...
```

---

## ✏️ How to customize your content

### 1. `data/config.json` — Your identity
```json
{
  "name": "Your Full Name",
  "initials": "YN",
  "title": "Data Analyst & BI Developer",
  "shortBio": "One or two punchy sentences about what you do.",
  "email": "you@email.com",
  "linkedin": "https://linkedin.com/in/yourhandle",
  "github": "https://github.com/yourhandle",
  "cv": "/assets/cv.pdf",             ← Drop your CV here
  "location": "Mexico City, Mexico 🇲🇽",
  "available": true,                   ← false hides the green badge
  "preferredStack": ["Python", "SQL"],
  "photo": "/assets/images/photo.jpg"  ← Path to your photo
}
```

### 2. `data/about.json` — Your story
- **bio**: Array of strings, each one becomes a paragraph.
- **facts**: The 4 stat cards (years, projects, certs, tools).

### 3. `data/skills.json` — Tech stack
Array of objects `{ "category": "...", "items": ["Tool1", "Tool2"] }`.  
Add or remove categories and items freely.

### 4. `data/projects.json` — Your work
Each project needs:
| Field | Description |
|-------|-------------|
| `title` | Project name |
| `shortDesc` | 1-2 sentence card summary |
| `longDesc` | Full paragraph for the modal |
| `tags` | Array of tech tags shown as chips |
| `thumbColor` | Hex background for the card thumbnail |
| `thumbAccent` | Hex color for the dataset label |
| `screenshots` | Array of 2 image paths (shown in modal) |
| `dataset` | Dataset info shown on thumbnail |
| `duration` | How long the project took |
| `role` | Your role on the project |
| `outcome` | Quantified result (the most important field!) |
| `github` | GitHub repo URL (leave `""` to hide) |
| `demo` | Live demo URL (leave `""` to hide) |

### 5. `data/experience.json` — Work history
Each job needs `company`, `role`, `type`, `startDate`, `endDate`, `bullets` (array), and `tags`.

### 6. `data/certifications.json` — Credentials
Each cert needs `name`, `issuer`, `date`, `credentialId`, `abbr` (2-3 chars), `color` (hex), `verifyUrl`.

---

## 🖼️ Adding photos & screenshots

### Profile photo
1. Add your photo as `assets/images/photo.jpg`
2. Make sure `config.json` points to `/assets/images/photo.jpg`
3. Square or portrait crops work best

### Project screenshots
1. Add images to `assets/images/projects/`
2. Update the `screenshots` array in `data/projects.json`:
   ```json
   "screenshots": [
     "/assets/images/projects/my-project-1.png",
     "/assets/images/projects/my-project-2.png"
   ]
   ```
3. If no screenshot is provided, a placeholder is shown automatically

### CV / Resume
1. Export your CV as `cv.pdf`
2. Place it at `assets/cv.pdf`

---

## 🚀 Deploy to Netlify (3 steps)

### Option A — Drag & drop (fastest)
1. Go to [netlify.com](https://netlify.com) and log in
2. Drag this entire `portfolio/` folder onto the Netlify dashboard
3. Done — your site is live in ~30 seconds ✅

### Option B — GitHub (recommended, enables auto-deploy)
1. Push this folder to a GitHub repo
2. Go to Netlify → **Add new site** → **Import from Git**
3. Select your repo — Netlify detects `netlify.toml` automatically
4. Click **Deploy** — every push to `main` auto-deploys ✅

### Contact form
The contact form works out of the box with Netlify Forms — no backend needed.  
Submissions appear in your Netlify dashboard under **Forms**.

---

## 🎨 Changing colors / fonts

Open `assets/css/styles.css` and edit the CSS variables at the top:

```css
:root {
  --bg:           #F8F7F4;   ← Page background
  --surface:      #FFFFFF;   ← Cards background
  --accent:       #2D8C6E;   ← Main green accent (CTAs, labels, links)
  --accent-light: #EAF5F1;   ← Light accent (badges, tags bg)
  --accent-mid:   #A8D9CA;   ← Mid accent (hover borders)
  --text:         #1C1C1A;   ← Main text color
  --text-muted:   #6B6B67;   ← Secondary text
  --border:       #E8E6E1;   ← All borders
  --serif:        'DM Serif Display', serif;   ← Heading font
  --sans:         'DM Sans', sans-serif;       ← Body font
}
```

To change the font, update the Google Fonts `<link>` in `index.html` and the font names in the CSS variables.

---

## ✅ Customization checklist

Before going live, make sure you've updated:

- [ ] `data/config.json` — name, title, bio, email, links
- [ ] `data/about.json` — bio paragraphs, stats
- [ ] `data/skills.json` — your actual tools
- [ ] `data/projects.json` — your real projects (at least 2-3)
- [ ] `data/experience.json` — your real work history
- [ ] `data/certifications.json` — your real certifications
- [ ] `assets/images/photo.jpg` — your photo
- [ ] `assets/images/projects/` — project screenshots
- [ ] `assets/cv.pdf` — your CV
- [ ] `index.html` meta description tag — SEO description

---

Built with vanilla HTML, CSS, and JavaScript. No framework, no build step, no dependencies.
