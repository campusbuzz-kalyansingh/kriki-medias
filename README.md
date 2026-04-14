# KRIKI Media — AI Video Agency Website

A futuristic, ultra-neon React website for KRIKI Media, an AI video ad agency.

## Tech Stack

- **React 18** + **Vite 5**
- **CSS Modules** for component-scoped styles
- **CSS Custom Properties** for the design token system
- No external UI libraries — pure custom components

## Design System

| Token | Value | Usage |
|---|---|---|
| `--cyan` | `#00fff7` | Primary neon accent |
| `--magenta` | `#ff00ea` | Secondary neon |
| `--violet` | `#7000ff` | Gradient base |
| `--bg` | `#02000a` | Deep space black |
| `--bg2` | `#06040f` | Section alt bg |
| `--font-display` | Syne | Headings |
| `--font-body` | Inter | Body text |

## Project Structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx      # Neon dot + ring cursor
│   │   ├── CustomCursor.module.css
│   │   ├── Footer.jsx            # Footer with social links
│   │   ├── Footer.module.css
│   │   ├── Hero.jsx              # Full-screen cinematic hero
│   │   ├── Hero.module.css
│   │   ├── Loader.jsx            # Animated loading screen
│   │   ├── Loader.module.css
│   │   ├── Navbar.jsx            # Fixed blur-on-scroll nav
│   │   ├── Navbar.module.css
│   │   ├── Sections.jsx          # All page sections
│   │   ├── Sections.module.css   #   Clients, Services, Portfolio,
│   │   ├── StickyCTA.jsx         #   Process, Testimonials, Pricing, CTA
│   │   └── StickyCTA.module.css
│   ├── data/
│   │   └── siteData.js           # All site content (single source of truth)
│   ├── hooks/
│   │   ├── useCustomCursor.js    # Cursor movement + hover expand
│   │   ├── useParticleCanvas.js  # Neon particle network renderer
│   │   └── useScrollReveal.js    # IntersectionObserver fade-in
│   ├── styles/
│   │   └── globals.css           # CSS tokens, resets, utilities
│   ├── App.jsx                   # Root layout + section orchestration
│   └── main.jsx                  # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customisation

### Change site content
All text, data, and copy lives in **`src/data/siteData.js`** —
edit that one file to update any section without touching component code.

### Change colours
All design tokens live in **`src/styles/globals.css`** inside `:root {}`.
Update `--cyan`, `--magenta`, or `--violet` to retheme the whole site instantly.

### Add a new section
1. Add your data to `src/data/siteData.js`
2. Create `YourSection.jsx` + `YourSection.module.css` in `src/components/`
3. Import and place it in `src/App.jsx`

## Features

- ✦ Cinematic loader with hex logo, live progress bar & status messages
- ✦ Custom neon cursor (dot + lagging ring, expands on hover)
- ✦ Particle network canvas on loader + hero
- ✦ Dot-grid hero with floating video preview cards + scanline animation
- ✦ Scroll-triggered section reveal (IntersectionObserver)
- ✦ Neon underline nav links, blur-on-scroll navbar
- ✦ 3D tilt on service cards (mouse-tracking perspective transform)
- ✦ Portfolio hover: scanline sweep + cyan play button glow
- ✦ Auto-rotating testimonials with fade transition
- ✦ CTA section with corner brackets + top gradient line
- ✦ Sticky floating CTA button with neon glow
- ✦ Fully responsive (mobile, tablet, desktop)
- ✦ CSS Modules — zero style leakage between components

