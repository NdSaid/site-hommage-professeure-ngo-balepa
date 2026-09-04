# Site d'hommage — Pr. Aurore Sara Ngo Balepa

Site mémoriel bilingue (français principal, anglais secondaire) rendant hommage
à la Professeure Aurore Sara Ngo Balepa, enseignante-chercheure au Département
de Géographie de l'Université de Douala, cheffe de département puis Vice-Doyenne
de la Faculté des Lettres et Sciences Humaines (FLSH).

Six vues : Accueil, Biographie, Travaux, Carrière, Galerie, Livre d'or —
en français (`/travaux/`) et en anglais (`/en/research/`), avec un sélecteur
de langue dans l'en-tête.

Réalisé avec [Astro](https://astro.build) et Tailwind CSS, d'après le handoff
de design `Site hommage professeur géographie`. Le site est entièrement
statique : il se compile en HTML et s'héberge partout, gratuitement.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
```

| Commande          | Effet                                 |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Serveur de développement              |
| `npm run build`   | Compile le site statique dans `dist/` |
| `npm run preview` | Sert le site compilé localement       |
| `npm run lint`    | ESLint                                |
| `npm run format`  | Prettier                              |

## Ce qui reste à compléter

Le handoff signale explicitement les contenus en attente de la famille :

- **Dates de naissance et de décès** → `src/pages/biographie.astro`
- **Formation et distinctions** → `src/pages/biographie.astro`, `src/data/carriere.ts`
- **Années de carrière** (« Année » est un emplacement) → `src/data/carriere.ts`
- **Bibliographie exacte** → `src/content/travaux/`
- **Photographies** — onze emplacements, voir ci-dessous
- **Données et cartes de recherche** → `src/assets/photos/cartes.jpg`

## Ajouter du contenu

**Nom, affiliation, navigation** → `src/config.ts`.

**Travaux** — une fiche par fichier Markdown dans `src/content/travaux/` :

```markdown
---
theme: "Industrialisation"
title: "Titre exact de la publication"
reference: "Revue, éditeur, année."
order: 1
accent: "green" # ou "ochre" pour les directions de thèse
url: "https://…"
---

Résumé en deux ou trois lignes.
```

**Carrière** → `src/data/carriere.ts`, une entrée par étape.

**Photographies** — déposer les fichiers dans `src/assets/photos/`, nommés
exactement ainsi (`.jpg`, `.png` ou `.webp`) :

| Fichier        | Ratio | Emplacement          |
| -------------- | ----- | -------------------- |
| `portrait`     | 4/5   | Hero de l'accueil    |
| `enseignement` | 16/10 | Accueil, bas de page |
| `biographie-1` | 3/4   | Biographie           |
| `biographie-2` | 4/3   | Biographie           |
| `cartes`       | 16/10 | Travaux              |

**Galerie** — déposer les images dans `src/assets/galerie/` (six vignettes 3/4
dans la maquette ; le nombre est libre). Les légendes se renseignent dans
`src/data/captions.json`, indexées par nom de fichier. Une lightbox s'ouvre au
clic. Tant qu'aucune image n'est fournie, des cadres vides tiennent la grille.

## Livre d'or

Le handoff demande une **modération avant publication** — c'est un site
mémoriel public. L'architecture retenue le respecte :

1. Le formulaire envoie les messages à un service externe
   (`guestbookEndpoint` dans `src/config.ts` — Formspree, Netlify Forms,
   Web3Forms…). Tant que ce champ est vide, le formulaire est remplacé par une
   invitation à écrire par courriel.
2. Les messages reçus sont relus, puis publiés en ajoutant un fichier Markdown
   dans `src/content/messages/` :

```markdown
---
nom: "Nom et prénom"
lien: "Ancien étudiant"
date: 2026-09-01
---

Le message.
```

Un champ-piège masqué (`site-web`) filtre les robots. Supprimer
`src/content/messages/exemple.md` avant la mise en ligne.

## Design

Tous les jetons — couleurs, polices, échelles — sont définis dans le bloc
`@theme` en tête de `src/styles/global.css`. Points fixés par le handoff, à ne
pas modifier sans raison :

- **Aucun `border-radius`, aucune ombre portée.** Angles droits partout ; la
  hiérarchie passe par les filets 1px et les fonds.
- Les deux accents (vert, ocre) partagent lightness et chroma et ne diffèrent
  que par la teinte — conserver ce rapport si la palette évolue.
- Le responsive repose sur `clamp()` et `repeat(auto-fit, minmax(…))`, sans
  media query.

## Traduire

Tous les textes d'interface sont dans `src/i18n/fr.ts` et `src/i18n/en.ts`.
Les deux fichiers sont tenus par l'interface `Dictionary` (`src/i18n/types.ts`) :
ajouter une clé d'un seul côté fait échouer la compilation, ce qui empêche les
deux versions de diverger sans qu'on s'en aperçoive.

La maquette prévoyait deux blocs anglais à l'intérieur des pages françaises
(sous le chapô de l'accueil, et un encart « ENGLISH » en biographie). Ils ont
été retirés : la version anglaise complète les rend redondants, et le
sélecteur de langue de l'en-tête remplit désormais ce rôle.

Pour les travaux, le titre d'une publication ne se traduit pas. Ajouter
seulement `themeEn`, `referenceEn` et `summaryEn` au besoin :

```markdown
---
theme: "Industrialisation"
themeEn: "Industrialisation"
title: "Titre exact, tel que publié"
summary: "Résumé français."
summaryEn: "English summary."
---
```

## Mettre en ligne

Le site est déployé sur **GitHub Pages** à chaque push sur `main`, par
`.github/workflows/deploy.yml` (lint, format, build, puis publication).

**https://ndsaid.github.io/site-hommage-professeure-ngo-balepa/**

Comme GitHub Pages sert le site depuis un sous-chemin, `astro.config.mjs`
définit `base`. Conséquence pratique : **tout lien interne doit passer par
`path(lang, route)`** de `src/i18n` — un `href="/travaux/"` écrit en dur
fonctionne en développement et casse en production.

Avec un nom de domaine propre, remettre `base: "/"` et ajuster `site`.

### Avant la mise en ligne réelle

Le site est actuellement **bloqué à l'indexation**, pour que le nom de la
Professeure ne remonte pas dans les moteurs de recherche attaché à un
brouillon. Le jour où le contenu est complet :

1. `draft: false` dans `src/config.ts`
2. vider `public/robots.txt`
3. supprimer `src/content/messages/exemple.md`
