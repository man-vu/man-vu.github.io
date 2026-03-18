# CLAUDE.md - AI Assistant Guide for man-vu.github.io

## Project Overview

Personal portfolio website for **Man Vu** — a Software Developer. The site showcases professional experience, projects, skills, education, certifications, and testimonials. Hosted on GitHub Pages at **manvu.ca**.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5 (with SWC compiler)
- **Styling**: Tailwind CSS 3 with CSS variables (HSL-based theming)
- **UI Components**: shadcn/ui (Radix primitives, base color: slate)
- **Animation**: Framer Motion
- **Icons**: Lucide React + Iconify (`@iconify/react`)
- **Routing**: React Router v6
- **State/Data**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes (class-based dark mode)
- **Package Manager**: pnpm 8.10.0

## Commands

```bash
pnpm install          # Install dependencies
pnpm run dev          # Start dev server (localhost:5173)
pnpm run build        # Production build to dist/
pnpm run lint         # ESLint (quiet mode, src/ only)
pnpm run preview      # Preview production build
pnpm run deploy       # Build + copy dist to root + commit + push
```

## Project Structure

```
src/
├── App.tsx                    # Root component with React Router setup
├── main.tsx                   # Entry point
├── index.css                  # Global styles + Tailwind directives + CSS variables
├── portfolio.js               # ALL portfolio data (skills, experience, projects, etc.)
├── assets/
│   ├── fonts/                 # Custom fonts (Agustina, etc.)
│   └── images/                # Avatar, project screenshots, cert logos
├── components/
│   ├── common/                # Reusable: Navbar, BackgroundElements
│   ├── sections/              # Page sections: Hero, Skills, Experience, Education,
│   │                          #   Certifications, Projects, Testimonials, Contact, Footer
│   └── ui/                    # shadcn/ui components (auto-generated, do not edit manually)
├── pages/
│   ├── Index.tsx              # Home page (composes all sections)
│   ├── NotFound.tsx           # 404 page
│   └── resume/Resume.tsx      # PDF resume viewer
├── lib/
│   └── utils.ts               # cn() utility (clsx + tailwind-merge)
├── hooks/                     # Custom React hooks
└── utils/
    └── getImageUrl.ts         # Vite-compatible image URL helper using import.meta.url
```

### Other directories

- `public/` — Static assets (favicons, manifest, robots.txt)
- `assets/resumes/` — PDF resume file
- `crs-tool/` — Standalone CRS Score Visualizer sub-project (plain HTML/JS)

## Key Architecture Decisions

### Data Layer

**All portfolio content lives in `src/portfolio.js`**. This is the single source of truth for:
- `greeting` — name, title, subtitle, resume link
- `socialMediaLinks` — GitHub, LinkedIn, email, Facebook
- `skills` — grouped into categories with Iconify icon classes
- `experience` — work history with descriptions
- `degrees` — completed and in-progress education
- `certifications` — professional certifications array
- `projects` — project showcase with images, videos, badges, tech stacks
- `testimonials` — colleague recommendations
- `contactPageData` — contact methods and social links

When updating portfolio content, edit `portfolio.js` — components read from it directly.

### Component Patterns

- **Framer Motion everywhere**: All sections use `motion.div` with `whileInView` scroll triggers
- **Viewport config**: `viewport={{ once: true, margin: "-100px" }}` is the standard pattern
- **Glass panels**: Use the `glass-panel` CSS class for glassmorphism effects
- **Gradient text**: `bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600`
- **Section layout**: Each section component is self-contained with `id` for anchor navigation

### Styling Conventions

- Tailwind utility classes for all styling (no separate CSS files per component)
- Dark mode via `dark:` variant (class-based toggling via next-themes)
- HSL CSS variables defined in `index.css` for theming consistency
- Responsive breakpoints: `md:` (tablet), `lg:` (desktop)
- Container max-width: 1400px, centered with 2rem padding

### Icon System

- **Lucide React** for UI icons (Navbar, social links, buttons)
- **Iconify** (`@iconify/react`) for technology/skill icons using `simple-icons:*` and `logos:*` prefixes
- Skills use `fontAwesomeClassname` key (legacy naming) but actually reference Iconify icon IDs

### Image Handling

Images are loaded via `getImageUrl()` utility which uses Vite's `import.meta.url` for proper asset resolution. Project and certification logos are stored in `src/assets/images/`.

## Naming Conventions

- **Components**: PascalCase files and exports (`Hero.tsx`, `Skills.tsx`)
- **Utilities**: camelCase (`getImageUrl.ts`)
- **Data objects**: camelCase in `portfolio.js`
- **CSS classes**: Tailwind utilities, custom classes in kebab-case
- **Directories**: lowercase (`components/`, `sections/`, `common/`)

## Deployment

- **Hosting**: GitHub Pages at manvu.ca (CNAME configured)
- **Build output**: `dist/` directory, then copied to repo root
- **No CI/CD**: Manual deployment via `pnpm run deploy`
- **`.nojekyll`** file disables Jekyll processing on GitHub Pages

## Important Notes

- TypeScript strict mode is **disabled** for app code (`tsconfig.app.json`)
- The `src/components/ui/` directory contains shadcn/ui components — add new ones via `npx shadcn-ui@latest add <component>`, don't edit existing ones manually
- Path alias `@` maps to `./src` (configured in both `vite.config.ts` and `tsconfig.json`)
- The project uses ESM (`"type": "module"` in package.json)
