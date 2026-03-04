# Portfolio Website — Technical Plan

## Owner
GitHub: snirbennissim

## Tech Stack
| Layer | Choice | Reason |
|-------|--------|--------|
| Build tool | Vite | Fast HMR, minimal config |
| Framework | React 19 | Component model, ecosystem |
| Language | JavaScript | As specified |
| Styling | Tailwind CSS v3 | Utility-first, responsive |
| Fonts | Inter + JetBrains Mono | Sans headings + mono technical |
| Icons | lucide-react | Lightweight, consistent |
| Data | GitHub REST API v3 | Live project data |
| Deployment | GitHub Pages + Vercel | Free, fast, CI/CD-friendly |

## Design Theme — Metallic Industrial Workspace (v2)

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| metal-950 | #090909 | Deepest background |
| metal-900 | #0f0f0f | Primary section bg |
| metal-800 | #161616 | Card surface |
| metal-700 | #1f1f1f | Borders, dividers |
| metal-500 | #383838 | Inactive elements |
| metal-300 | #787878 | Secondary text |
| metal-100 | #cccccc | Primary text |
| blue (accent) | #00d4ff | Electric blue — highlights only |
| blue-dim | #0099bb | Hover/secondary accent |

### Typography
- **Headings**: Inter, font-black, tight tracking
- **Technical labels / metadata / code**: JetBrains Mono
- **Mono label pattern**: `// SECTION 0N — LABEL` in blue, small caps

### CSS Utilities (index.css)
- `.metal-surface` — brushed gradient (light top → dark bottom)
- `.bevel` — 4-sided bevel (white top-left, black bottom-right)
- `.module-card` — industrial component card with hover blue-glow
- `.with-screws` — corner screws via ::before/::after pseudo-elements
- `.btn-blue` — electric blue mechanical button with inner highlight
- `.btn-metal` — dark metal button with bevel + pressed state
- `.terminal-input` — inset-shadow dark input with mono font
- `.section-divider` — subtle horizontal gradient separator
- `.mono-label` — section prefix label in mono + blue
- `.blueprint-bg` (body) — radial dot grid background pattern
- `.blue-glow`, `.blue-glow-hover` — electric glow effects

### Components
| Component | Design Notes |
|-----------|-------------|
| Navbar | Metal control panel bar, `// SECTION` mono links, SBN.DEV badge, ONLINE status |
| Hero | Blueprint grid, scan-line animation, terminal prompt, blue gradient name |
| About | ID card module with corner screws + spec rows, beveled stats panels |
| TechStack | Toggle-switch filter buttons, module cards with index numbers |
| Projects | Hardware module cards with MOD-NNN IDs + ACTIVE status badge |
| Contact | Terminal panel with `$ cmd` social links, inset-shadow form inputs |
| Footer | Dark metal panel, system status bar, mono nav |

---

## Site Structure

```
Portfolio/
├── frontend/                # React + Vite + Tailwind SPA
│   ├── public/
│   │   ├── resume.pdf          # CV download
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── TechStack.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/
│   │   │   ├── useGitHubProjects.js
│   │   │   └── useScrollAnimation.js
│   │   ├── data/
│   │   │   └── techStack.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── backend/                 # Placeholder Node/Express API
│   ├── server.js
│   └── package.json
├── package.json             # Root scripts delegating to frontend/
└── .gitignore
```

---

## Component Breakdown

### Navbar
- Fixed, blurs on scroll (backdrop-blur-md)
- Links: About | Tech Stack | Projects | Contact
- Resume download button (primary CTA)
- Mobile hamburger menu

### Hero
- Full viewport height
- Animated greeting with name + title
- Gradient background (dark theme)
- CTA buttons: View Projects / Contact Me
- Subtle particle or gradient animation

### About
- 2-column layout: text | profile image placeholder
- Brief bio paragraph
- 3-4 stat cards (GitHub repos count, years exp, etc.)

### TechStack
- Grid of technology badges with icons
- Categories: Frontend, Backend, Tools, Cloud
- Hover scale animations

### Projects (GitHub API)
- Fetches repos via: GET /users/snirbennissim/repos?sort=updated&per_page=12
- Filters out forks (optional toggle)
- Cards showing: name, description, language, stars, forks, last updated
- "View on GitHub" and "Live Demo" (homepage field) links
- Skeleton loading state
- Language color dots (matching GitHub's color scheme)

### Contact
- Name / Email / Message form fields
- Form validation (HTML5 + JS)
- mailto: fallback; EmailJS-ready for serverless send
- Social links: GitHub, LinkedIn, Twitter/X, Email

### Footer
- Copyright line
- Resume PDF download link
- Social icon links

---

## GitHub API Integration

```js
// useGitHubProjects.js
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'snirbennissim';
const API = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=12&type=public`;
```

No auth token required for public repos (60 req/hr rate limit is sufficient).
Optionally add `VITE_GITHUB_TOKEN` env var to raise limit to 5000/hr.

---

## Design System

### Color Palette (Dark Theme)
- Background: `#0a0a0f` (near-black)
- Surface: `#111118` / `#1a1a2e`
- Accent: `#6366f1` (indigo-500) → `#818cf8` (indigo-400)
- Text primary: `#f1f5f9`
- Text secondary: `#94a3b8`
- Border: `#1e293b`

### Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed

### Animations
- Fade-in-up on section enter (Intersection Observer)
- Hover scale on cards (scale-105)
- Gradient text on name

---

## Deployment

### GitHub Pages
```json
// package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
- `vite.config.js` → `base: '/portfolio/'`

### Vercel (Preferred)
- Connect repo to Vercel dashboard
- Zero-config for Vite projects
- Custom domain support
- Environment variables via Vercel UI

---

## Implementation Phases

| Phase | Tasks | Status |
|-------|-------|--------|
| 1 | PLAN.md + MEMORY.md | ✅ Done |
| 2 | Vite init + Tailwind + deps | ✅ Done |
| 3 | GitHub repo creation | ✅ Done |
| 4 | Core components (Navbar, Hero, About) | ✅ Done |
| 5 | TechStack + Projects (GitHub API) | ✅ Done |
| 6 | Contact + Footer | ✅ Done |
| 7 | Polish: Metallic Industrial Workspace UI + schematic icons | ✅ Done |
| 8 | Deployment config + deploy (GitHub Pages) | ✅ Done |
| 9 | Restructure: frontend/ + backend/ folders | ✅ Done |
