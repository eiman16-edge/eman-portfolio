You are an expert Frontend Engineer. Your task is to refactor my portfolio from pure HTML/CSS/JavaScript into a modern React.js application using Tailwind CSS, React Router, and Framer Motion.

## Tech Stack

- React.js
- Tailwind CSS
- React Router
- Framer Motion

## Source Files

Please read the original source code directly from these files in the workspace:

- HTML: `./index.html`, `./about.html`, `./contact.html`, `./projects.html`
- CSS: `./css/style.css`
- JavaScript: `./js/script.js`

### Core Goals:

1. Break down the existing code into clean, reusable React components (e.g., Navbar, Hero, Footer).
2. Use Tailwind CSS for the styling, matching the exact spacing, typography, and clean aesthetic of the original design.
3. Keep the layout, content, and branding exactly the same as the current design. Do not redesign the core page.

### Architectural Requirements:

- Use React components and clean props passing to handle dynamic data (like an array of project objects).
- Implement React Router for navigation if there are multiple pages.
- Implement Framer Motion strictly for subtle, high-end transitions.

### Specific Motion Request (The Stacking Cards):

- On the right side of the hero section, where the 3 project images/mockups are stacked, implement an absolute-positioned layout.
- Use Framer Motion `variants` so that when the user hovers over the project showcase container, the cards smoothly and elegantly "fan out" or "unstack" (using subtle `x`, `y`, and `rotate` shifts) to reveal previews of all three images.
- Ensure the animations use spring physics (`type: "spring"`, `stiffness: 100`, `damping: 20`) for a premium, non-clunky aesthetic.

### Rules:

- DO NOT change the color palette, fonts, or overall layout structure.
- DO NOT invent complex, flashy animations for other parts of the site. Keep everything else clean and minimal.
- Deliver the final code structured cleanly into `/components`, and a `projectsData` array asset.

---

## Refactor Log (completed)

The static site was refactored into a React SPA at the repository root using **Vite + React (TypeScript) + Tailwind CSS v4 + React Router v7 + Framer Motion**.

### Structure

- `src/main.tsx` — entry; mounts `<App />` inside `<HashRouter>`.
- `src/App.tsx` — routes: `/` (Home), `/about`, `/projects`, `/contact`, and `*` → redirect to `/`.
- `src/components/` — `Layout`, `Navbar`, `Footer`, `Button`, `Hero`, `StackedMockups`, `SkillsSection`, `ProjectCard`, `PageTitle`, `ContactForm`, `ScrollToTop`.
- `src/pages/` — `Home`, `About`, `Projects`, `Contact`.
- `src/data/projectsData.ts` — `projectsData` (4 projects, Projects page) and `selectedProjects` (2 cards, Home "Selected Work"). Images imported from `src/assets/images/`.
- `src/hooks/usePageTitle.ts` — sets `document.title` per page (mirrors the original per-page `<title>`).
- `src/index.css` — Tailwind v4 entry (`@import "tailwindcss"`), `@theme` design tokens, base resets, and the `.shell` container.
- Legacy `css/`, `js/`, `about.html`, `projects.html`, `contact.html` deleted. The original `index.html` markup was recovered from git history before deletion.

### Styling / design tokens (`@theme`)

- Colors: `cream #f4f0e8`, `paper #faf8f3`, `ink #111111`, `muted #6e6a62`, `line #d8d2c7`, `dark #171717`.
- Fonts: `--font-sans` DM Sans, `--font-display` Playfair Display (loaded via Google Fonts in `index.html`).
- Breakpoints overridden to match the original media queries: `sm=560px`, `md=800px`, `lg=900px`.
- `.shell` replaces the original `.container` (`width: min(calc(100% - 30px), 1180px)`, `calc(100% - 48px)` from 801px up).

### Behaviors ported

- Mobile nav toggle (`menu-toggle` → `.nav.open`) via React state; menu closes on link click.
- Footer year rendered as `currentYear` (computed at module scope).
- Contact form: `preventDefault`, sets status message, resets the form.
- `ScrollToTop` scrolls to top on route change.

### Motion

- `StackedMockups` uses Framer Motion `variants` on an absolutely-positioned stack. Rest transforms match the original (`.mockup-card--back/middle/front`); hovering the container fans the cards out with subtle `x`/`y`/`rotate` shifts using spring physics (`type: "spring"`, `stiffness: 100`, `damping: 20`).
- All other motion is kept minimal: CSS transitions for buttons/cards, and a subtle fade/slide page transition on route change.

### Notes / decisions

- Footer socials reconciled across pages: GitHub (real URL), LinkedIn (real URL), Instagram (`#`).
- `body` uses `overflow-x: clip` so the fanned-out hero cards never cause horizontal scroll.
- **Routing / hosting:** the app uses `HashRouter` and Vite `base: "./"` (relative), so the same build works on Netlify (domain root) and GitHub Pages (subpath). Do not hard-code a subpath `base` — it breaks the Netlify deploy (asset 404s → blank screen).

### Verify

- `npm run dev` — local dev server.
- `npm run build` — `tsc -b && vite build`.
- `npm run lint` — oxlint (currently 0 warnings / 0 errors).
