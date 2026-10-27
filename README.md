# Eugene Patterson Portfolio

A modern, minimalist single-page portfolio website showcasing design and development work. Built with a "Cool Minimal" aesthetic featuring soft depth, generous negative space, and a restrained aqua mint accent color.

## Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body), Plus Jakarta Sans (headings), JetBrains Mono (labels)

## Features

- ✨ Fixed sidebar navigation with smooth page transitions
- 🎨 Light/dark theme toggle with system preference detection
- 📱 Fully responsive (mobile bottom tab bar under 900px)
- ♿ WCAG AA accessible (keyboard navigation, focus rings, semantic HTML)
- 🎭 Subtle animations with `prefers-reduced-motion` support
- 💬 Interactive chat widget (demo UI)
- 📊 Animated workflow visualization with SVG
- 🎯 Hash-based routing for deep linking
- 🔒 Honeypot spam protection on contact form
- 📈 Visit counter with localStorage

## Design Tokens

### Light Mode
- Background: `#F3F5F8` (cool mist)
- Surface: `#FFFFFF`
- Text: `#0A1226` (deep navy)
- Accent: `#22D3B7` (aqua mint)

### Dark Mode
- Background: `#070B14`
- Surface: `#0E1422`
- Text: `#EAF0FF`
- Accent: `#22D3B7`

## Project Structure

```
src/
├── components/
│   ├── BackgroundDecoration.tsx  # SVG background elements
│   ├── ChatWidget.tsx            # Floating chat interface
│   └── Sidebar.tsx               # Fixed left sidebar
├── pages/
│   ├── HomePage.tsx              # Bento grid dashboard
│   ├── ProjectsPage.tsx          # Portfolio projects
│   ├── ServicesPage.tsx          # Services + workflow
│   ├── ToolsPage.tsx             # AI builds
│   ├── TestimonialsPage.tsx     # Client testimonials
│   ├── AboutPage.tsx             # Background info
│   └── ContactPage.tsx           # FAQs + contact form
├── hooks/
│   ├── useTheme.ts               # Theme management
│   └── useVisitCounter.ts        # Visit tracking
├── data/
│   └── content.ts                # All site content (edit here!)
├── styles/
│   └── globals.css               # Global styles + tokens
└── App.tsx                       # Main app component
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

All content is centralized in `src/data/content.ts`. Update this file to personalize:

- Personal information (name, handle, role, etc.)
- Social media links
- Tools and skills
- Projects with screenshots, links, and tech stacks
- Services offered
- Testimonials
- About section
- FAQs

### Adding Images

1. Place images in the `public/` folder
2. Reference them in `content.ts` with paths like `/projects/image.jpg`
3. Recommended: Use optimized images (WebP format, compressed)

### Design Tokens

Modify design tokens in `tailwind.config.js` and `src/styles/globals.css`:

- Colors: Update CSS variables in `:root` and `.dark`
- Typography: Change font families in Tailwind config
- Spacing/radii: Adjust theme extension values

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the `dist` folder to Netlify
```

### Cloudflare Pages

```bash
npm run build
# Connect your repo to Cloudflare Pages
# Build command: npm run build
# Output directory: dist
```

## Performance

- Lazy-load images with native `loading="lazy"`
- Code-splitting via Vite
- Minimal bundle size with tree-shaking
- Target: Lighthouse 95+ (Performance, Accessibility, Best Practices, SEO)

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- Skip-to-content link
- Respects `prefers-reduced-motion`
- Color contrast meets WCAG AA standards

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox

## License

This is a personal portfolio template. Feel free to use it as inspiration, but please don't copy it verbatim. Create your own unique design!

## Support

For questions or issues, reach out via the contact form on the site.

---

Built with ❤️ by Eugene Patterson
