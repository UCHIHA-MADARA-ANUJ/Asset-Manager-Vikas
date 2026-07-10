# Project VIKAS

A cinematic digital exhibition website for TechNova 2047 — "Green Technology in India towards Viksit Bharat 2047". Built by Team Vikaas (Anuj Phulera & Aarav Choudhary), Colonel's Central Academy, Grade 10.

## Run & Operate

- `Project Vikas` workflow — runs the frontend dev server at port 23456
- `pnpm --filter @workspace/technova-2047 run dev` — manual start (requires PORT=23456 BASE_PATH=/)
- `pnpm --filter @workspace/technova-2047 run build` — production build
- `pnpm run typecheck` — full typecheck across all packages
- Required env: `DATABASE_URL` — Postgres connection string (for api-server, not needed for frontend-only use)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18, Vite 7, Tailwind CSS v4, shadcn/ui
- Animations: Framer Motion + GSAP (ScrollTrigger)
- Routing: wouter
- API: Express 5 (artifacts/api-server)
- DB: PostgreSQL + Drizzle ORM (lib/db)
- Validation: Zod (zod/v4), drizzle-zod
- API codegen: Orval (from OpenAPI spec)

## Where Things Live

- `artifacts/technova-2047/` — main React + Vite frontend (the competition website)
- `artifacts/api-server/` — Express 5 backend (not yet wired to frontend)
- `artifacts/mockup-sandbox/` — design mockup sandbox
- `lib/db/` — Drizzle ORM schema + database client
- `lib/api-spec/` — OpenAPI spec (source of truth for API contracts)
- `lib/api-client-react/` — generated React Query hooks (from Orval)
- `lib/api-zod/` — generated Zod schemas (from Orval)

## Architecture Decisions

- **Framer Motion for component-level animations** (hero entrances, page transitions, card hovers)
- **GSAP ScrollTrigger for scroll-driven section animations** (counters, cards, parallax) — no overlap with Framer Motion targets
- **Custom cursor gated by pointer media query** — only activates on `(hover: hover) and (pointer: fine)` devices; no-op on touch screens
- **Cinematic intro always plays on page load** — 7-8 second India flag/PROJECT VIKAS animation before the main site
- **Tricolor theme throughout** — saffron #FF9933, white, green #138808 used as accent colors, gradients, dividers

## Product

A multi-page exhibition website covering India's green technology initiatives:
- Home — cinematic hero with PROJECT VIKAS branding, impact stats, pavilion grid
- About Green Tech, Solar, Wind, EV Mobility, Bioenergy, Water/Rivers, Policy Schemes
- Vision 2047 — roadmap to net zero
- Team — team profile page

## User Preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The workflow must be started with `PORT=23456 BASE_PATH=/` env vars; vite.config.ts enforces these
- `@import url(...)` for Google Fonts must come BEFORE `@import 'tailwindcss'` in index.css to avoid postcss warnings
- GSAP and Framer Motion must not animate the same element's transform — assign each element to one system only
- The artifact isn't registered in Replit's artifact system (listArtifacts returns []); use the `Project Vikas` workflow directly
- api-server needs DATABASE_URL; frontend runs standalone without it

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
