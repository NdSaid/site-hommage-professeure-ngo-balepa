/**
 * Forme commune aux deux dictionnaires. TypeScript signale toute clé
 * ajoutée d'un côté et oubliée de l'autre — c'est le garde-fou contre
 * la dérive entre les versions française et anglaise.
 */
export interface Dictionary {
  meta: { description: string; siteTitle: string };
  nav: {
    home: string;
    biography: string;
    research: string;
    career: string;
    gallery: string;
    guestbook: string;
  };
  header: { affiliation: string; navLabel: string };
  footer: { line: string };
  switcher: { label: string; aria: string };
  home: {
    eyebrow: string;
    title: string;
    lede: string;
    /** Traduction sous le chapô. Français uniquement — absente en anglais. */
    ledeAlt?: string;
    ctaPrimary: string;
    ctaSecondary: string;
    portraitCaption: string;
    themes: { title: string; text: string }[];
    schoolTitle: string;
    schoolText: string;
    schoolLink: string;
    schoolCaption: string;
  };
  biography: {
    eyebrow: string;
    title: string;
    lede: string;
    body: string[];
    /** Encart de la maquette. Français uniquement — redondant en anglais. */
    inset?: { heading: string; text: string };
    pending: string;
    caption: string;
  };
  research: {
    eyebrow: string;
    title: string;
    intro: string;
    mapsTitle: string;
    mapsText: string;
    mapsPending: string;
    mapsCaption: string;
    empty: string;
  };
  career: { eyebrow: string; title: string; pending: string };
  gallery: {
    eyebrow: string;
    title: string;
    pending: string;
    zoom: string;
    close: string;
  };
  guestbook: {
    eyebrow: string;
    title: string;
    intro: string;
    fields: {
      name: { label: string; placeholder: string };
      relation: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    submit: string;
    submitting: string;
    moderation: string;
    success: string;
    error: string;
    disabled: string;
    disabledContact: string;
    disabledNoContact: string;
    disabledPending: string;
    empty: string;
    honeypot: string;
  };
}
