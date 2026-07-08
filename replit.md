# Rice Spice Dice — Marketing Site

## Overview
A single-page marketing site for Rice Spice Dice, a family-run international grocery store in Kogarah, NSW. Built with TanStack Start (React 19 + Vite + Tailwind v4), imported from Lovable. The page (`src/routes/index.tsx`) is one long scroll-based landing page: hero, freshness signals, chicken counter, category grid, international flavours, weekly specials, recipes, community story, gallery, testimonials, visit/location, newsletter, footer.

## Running the app
- `bun install` then `bun run dev` (bound via the "Start application" workflow).
- Dev server runs at `0.0.0.0:5000` — see "User preferences" below for why this override exists.
- `bun run build` / `bun run lint` / `bun run format` also available (lint can be slow — allow 60s+).

## User preferences
- Content/copy direction: the site follows a deliberate customer-psychology/CRO positioning as "the neighbourhood destination for fresh food and authentic international flavours" (not "another grocery store"). Section order follows an emotional storytelling arc: Welcome → Freshness → Quality (chicken) → Choice (categories) → International Flavours → Specials → Recipes → Community → Store → Trust/social proof → Visit. Keep this arc and positioning when adding/editing sections rather than reverting to a generic grid-of-features layout.
- Preserve the existing visual system (saffron/ink/cream palette, editorial/motion design in `src/styles.css`) — do not redesign from scratch unless explicitly asked.
