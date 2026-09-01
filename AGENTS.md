# Working in this repository

A memorial website for a university professor. Astro 7 (static output) with
Tailwind CSS 4. No server, no database — everything compiles to static HTML.

## Tone matters here

This is a memorial. Copy should be plain and dignified: no marketing voice, no
exclamation marks, no growth-hacking patterns (popups, urgency banners,
engagement prompts). When adding UI, prefer restraint over decoration.

## Where things live

- `src/config.ts` — her name, dates, honorific, nav. Edit before anything else.
- `src/data/career.ts` — education, appointments, honors (rendered as timelines).
- `src/data/captions.json` — gallery captions, keyed by image filename.
- `src/content/works/` — one Markdown file per publication. Schema in
  `src/content.config.ts`.
- `src/content/tributes/` — one Markdown file per remembrance.
- `src/assets/gallery/` — photographs; picked up by `import.meta.glob`.
- `src/assets/portrait.jpg` — optional portrait, also globbed so its absence
  does not break the build.
- `src/styles/global.css` — the `@theme` block is the single source of truth
  for color, type, and spacing. Restyle there, not in component classes.

## Conventions

- Tailwind 4 is configured CSS-first: tokens live in the `@theme` block in
  `global.css`, not in a `tailwind.config.js` (there isn't one).
- Use the semantic token names (`text-ink`, `text-ink-soft`, `bg-parchment`,
  `border-rule`, `text-accent`) rather than raw Tailwind palette colors, so a
  future restyle stays contained to one file.
- Optional images are loaded with `import.meta.glob`, never a direct `import`,
  so the build succeeds before real photographs are added.
- Empty collections render an explanatory placeholder rather than a blank page.
  Keep that pattern when adding new content-driven sections.

## Checks before committing

```bash
npm run build && npm run lint && npm run format:check
```
