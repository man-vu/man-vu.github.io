# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for **Man Vu** — a Software Developer. Hosted on GitHub Pages at **manvu.ca**. Single-page app showcasing experience, projects, skills, education, certifications, and testimonials.

## Commands

```bash
pnpm install          # Install dependencies
pnpm run dev          # Start dev server (localhost:5173)
pnpm run build        # Production build to dist/
pnpm run lint         # ESLint (quiet mode, src/ only)
pnpm run preview      # Preview production build
pnpm run deploy       # Build + copy dist to root + commit + push (uses npm internally)
```

No test framework is configured. There are no unit or integration tests.

## Tech Stack

React 18 + TypeScript, Vite 5 (SWC), Tailwind CSS 3 (HSL CSS variables), shadcn/ui (Radix), Framer Motion, Lucide React + Iconify, React Router v6, TanStack React Query, React Hook Form + Zod, next-themes (class-based dark mode). Package manager: pnpm 8.10.0.

## Architecture

### Data Layer

**All portfolio content lives in `src/portfolio.js`** — the single source of truth. Exports: `greeting`, `socialMediaLinks`, `skills`, `experience`, `degrees`, `certifications`, `projects`, `testimonials`, `contactPageData`. To update portfolio content, edit this file only.

### Routing (App.tsx)

Three routes: `/` (Index — composes all sections), `/resume` (PDF viewer), `*` (404). Wrapped in QueryClientProvider → ThemeProvider → BrowserRouter.

### Page Composition (Index.tsx)

Index renders sections in order: Hero → Skills → Experience → Education → Certifications → Projects → Testimonials → Contact → Footer. Each section is self-contained with an `id` for anchor navigation.

### Component Patterns

- **Framer Motion**: All sections use `motion.div` with `whileInView` scroll triggers and `viewport={{ once: true, margin: "-100px" }}`
- **Glass panels**: `glass-panel` CSS class for glassmorphism effects
- **Gradient text**: `bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600`
- **Icons**: Lucide React for UI icons; Iconify (`@iconify/react`) with `simple-icons:*` and `logos:*` prefixes for tech/skill icons. The `fontAwesomeClassname` key in portfolio.js is legacy naming — values are actually Iconify icon IDs.
- **Images**: Loaded via `getImageUrl()` in `src/utils/getImageUrl.ts` (uses Vite's `import.meta.url`)

### Styling

- Tailwind utilities only (no per-component CSS files)
- Dark mode via `dark:` variant (class-based, next-themes)
- HSL CSS variables in `src/index.css`
- Responsive: `md:` (tablet), `lg:` (desktop), container max-width 1400px

### Other Directories

- `crs-tool/` — Pre-built standalone CRS Score Visualizer (Vite build output, not part of main app build)
- `public/` — Static assets (favicons, manifest, robots.txt, CNAME)
- `assets/resumes/` — PDF resume file

## Important Notes

- TypeScript strict mode is **disabled** (`tsconfig.app.json`)
- `src/components/ui/` contains shadcn/ui components — add via `npx shadcn-ui@latest add <component>`, don't edit manually
- Path alias `@` → `./src` (configured in `vite.config.ts` and `tsconfig.json`)
- ESM project (`"type": "module"`)
- The deploy script (`pnpm run deploy`) copies `dist/*` to repo root, commits, and pushes — it modifies the working tree outside `dist/`
- `.nojekyll` disables Jekyll processing on GitHub Pages
