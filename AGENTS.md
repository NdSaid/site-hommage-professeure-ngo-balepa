# Working in this repository

Site d'hommage à la Professeure Aurore Sara Ngo Balepa (Département de
Géographie, Université de Douala). Astro 7, sortie statique, Tailwind CSS 4.
Pas de serveur, pas de base de données.

Implémenté d'après un handoff de design **haute fidélité**
(`Site hommage professeur géographie`). Couleurs, typographie, échelle
d'espacement et états d'interaction y sont donnés comme définitifs.

## Langue et ton

- **Le site est en français.** L'anglais n'apparaît qu'aux deux endroits prévus
  par la maquette : la traduction du chapô sur l'accueil, et l'encart
  « ENGLISH » de la biographie. Ne pas angliciser l'interface.
- Ton académique et documentaire. C'est un mémorial : pas de voix marketing,
  pas de point d'exclamation, aucun motif d'engagement (pop-ups, bannières
  d'urgence, incitations).

## Règles de design à ne pas enfreindre

- **Aucun `border-radius`, aucune ombre portée.** Explicitement voulu par le
  handoff : la hiérarchie passe par les filets 1px et les changements de fond.
- Les accents vert et ocre partagent lightness et chroma (`oklch(0.42 0.055 H)`)
  et ne diffèrent que par la teinte. Conserver ce rapport.
- Responsive sans media query : `clamp()` pour la typographie et les marges,
  `repeat(auto-fit, minmax(Xpx, 1fr))` pour les grilles.
- Largeur maximale 1180px partout ; `.view` porte le padding de page.
- Focus clavier : `outline: 2px solid` vert, `outline-offset: 3px`. Jamais
  l'anneau bleu par défaut.

## Où se trouvent les choses

- `src/config.ts` — nom, affiliation, navigation, endpoint du livre d'or.
- `src/data/carriere.ts` — chronologie (les « Année » sont des emplacements).
- `src/data/captions.json` — légendes de galerie, indexées par nom de fichier.
- `src/content/travaux/` — une fiche par publication. Schéma dans
  `src/content.config.ts`.
- `src/content/messages/` — livre d'or, **après modération** (voir plus bas).
- `src/assets/photos/` — emplacements nommés (`portrait`, `enseignement`,
  `biographie-1`, `biographie-2`, `cartes`), chargés par `Frame.astro`.
- `src/assets/galerie/` — vignettes de la galerie.
- `src/styles/global.css` — bloc `@theme` : source unique des jetons, plus les
  classes du système (`.view`, `.eyebrow`, `.btn`, `.label`, `.pending`,
  `.lede`). Restyler ici, pas dans les classes des composants.

## Conventions

- Tailwind 4 configuré côté CSS : les jetons vivent dans `@theme` de
  `global.css`, il n'y a pas de `tailwind.config.js`.
- Utiliser les noms sémantiques (`text-ink`, `text-muted`, `bg-paper`,
  `border-line`, `text-green`, `text-ochre`) plutôt que la palette Tailwind
  brute, pour qu'un restylage reste contenu dans un seul fichier.
- Les valeurs `clamp()` de la maquette sont reprises telles quelles en valeurs
  arbitraires Tailwind ou en `style` inline quand c'est plus lisible.
- Les images optionnelles passent par `import.meta.glob`, jamais par un
  `import` direct : le site doit se construire avant l'arrivée des photos.
- Les collections vides rendent une note `.pending` plutôt qu'une page blanche.
  Garder ce motif.
- `Frame.astro` remplace le `image-slot.js` du prototype. `support.js` du
  handoff est le runtime du prototype et n'est pas porté.

## Livre d'or

Le handoff impose une **modération avant publication**. Le formulaire poste
vers un service externe (`site.guestbookEndpoint`) ; il n'écrit jamais dans
`src/content/messages/`. Les messages relus y sont ajoutés à la main. Ne pas
remplacer ce circuit par une publication automatique.

## Contenus en attente

Les blocs marqués `.pending` (« À compléter ») attendent des données réelles de
la famille : dates de naissance et de décès, formation, distinctions,
bibliographie exacte, années de carrière, photographies. Les laisser visibles
tant qu'ils ne sont pas renseignés — ils servent de liste de tâches.

## Vérifications avant de committer

```bash
npm run build && npm run lint && npm run format:check
```
