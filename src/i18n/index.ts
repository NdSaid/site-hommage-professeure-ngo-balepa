import { fr } from "./fr";
import { en } from "./en";

export const languages = {
  fr: { label: "Français", htmlLang: "fr", ogLocale: "fr_FR" },
  en: { label: "English", htmlLang: "en", ogLocale: "en_GB" },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "fr";
export const langs = Object.keys(languages) as Lang[];

/** Slug de chaque vue, par langue. Le français n'est pas préfixé. */
export const routes = {
  home: { fr: "", en: "" },
  biography: { fr: "biographie", en: "biography" },
  research: { fr: "travaux", en: "research" },
  career: { fr: "carriere", en: "career" },
  gallery: { fr: "galerie", en: "gallery" },
  guestbook: { fr: "livre-d-or", en: "guest-book" },
} as const;

export type RouteKey = keyof typeof routes;
export const routeKeys = Object.keys(routes) as RouteKey[];

const strip = (s: string) => s.replace(/^\/+|\/+$/g, "");

/**
 * Chemin absolu d'une vue, préfixe de déploiement compris.
 *
 * `base` d'Astro n'est PAS appliqué automatiquement aux `href` écrits à la
 * main : tous les liens internes doivent passer par cette fonction, sinon
 * ils cassent sous GitHub Pages (site servi depuis /<repo>/).
 */
export function path(lang: Lang, key: RouteKey): string {
  const segments = [
    strip(import.meta.env.BASE_URL),
    lang === defaultLang ? "" : lang,
    routes[key][lang],
  ].filter(Boolean);
  return "/" + (segments.length ? segments.join("/") + "/" : "");
}

/** Idem, pour un fichier servi tel quel depuis public/. */
export function asset(file: string): string {
  const segments = [strip(import.meta.env.BASE_URL), strip(file)].filter(
    Boolean,
  );
  return "/" + segments.join("/");
}

const dictionaries = { fr, en } as const;

export function t(lang: Lang) {
  return dictionaries[lang];
}

/** Langue opposée — pour le sélecteur de langue. */
export function otherLang(lang: Lang): Lang {
  return lang === "fr" ? "en" : "fr";
}
