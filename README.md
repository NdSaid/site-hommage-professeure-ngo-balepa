# Memorial Site

A memorial website for a university professor — her life, her education and
career, and above all a lasting, findable archive of her work.

Built with [Astro](https://astro.build) and Tailwind CSS. The site is fully
static: it compiles to plain HTML and can be hosted anywhere, free, with
nothing to maintain and no database to keep running.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Dev server with live reload        |
| `npm run build`   | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally       |
| `npm run lint`    | ESLint                             |
| `npm run format`  | Prettier, writes in place          |

## Adding content

Nearly everything is edited as plain text — no code changes needed.

**Her name, dates, and title** — `src/config.ts`. Edit this first; the values
flow into every page, the browser tab titles, and the footer.

**The remembrance on the homepage** — `src/pages/index.astro`, under the
"In Memoriam" heading.

**Education, appointments, honors** — `src/data/career.ts`. Three lists;
add or remove entries freely.

**Her work** — add one Markdown file per item to `src/content/works/`:

```markdown
---
title: "The Title, Exactly as Published"
year: 1998
venue: "Journal of ___, vol. 12, no. 3, pp. 145–172"
authors: ["J. Doe", "A. Colleague"]
type: "article" # article | book | chapter | talk | thesis | other
doi: "10.1000/example"
url: "https://example.org/paper"
pdf: "/papers/1998-title.pdf"
featured: false
---

Optional abstract or note. Appears on the entry's own page.
```

Every field except `title` and `year` is optional. Entries group by year
automatically and each gets its own page. To host a PDF, drop it in
`public/papers/` and point `pdf:` at it.

**Photographs** — drop image files into `src/assets/gallery/`. They appear on
the gallery page automatically, resized and optimized at build time. To caption
one, add an entry keyed by filename in `src/data/captions.json`.

**Her portrait** — save it as `src/assets/portrait.jpg` (`.png` and `.webp`
also work). The homepage picks it up on its own.

**Tributes** — add one Markdown file per tribute to `src/content/tributes/`:

```markdown
---
author: "A. Student"
relation: "Doctoral student, 2009–2014"
date: 2025-06-14
---

The tribute itself.
```

## Changing the design

All colors, fonts, and spacing are defined as tokens at the top of
`src/styles/global.css`. Editing that one block restyles the entire site.

## Deploying

`npm run build` produces a `dist/` folder of static files. Any host will serve
it — Netlify, Vercel, Cloudflare Pages, and GitHub Pages all have free tiers
suitable for a site like this.
