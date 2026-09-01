/**
 * Site-wide details. Edit this file first — her name, dates, and the nav
 * labels flow from here into every page, the <title> tags, and the footer.
 */
export const site = {
  name: "Professor Jane Doe",
  /** Shown under her name on the homepage. */
  honorific: "Professor of ___, University of ___",
  born: "1952",
  died: "2025",
  /** One line, used as the page description and in search results. */
  tagline:
    "A scholar, teacher, and mentor — a record of her life and her work.",
  /** Optional: drop a portrait at src/assets/portrait.jpg to enable it. */
  portrait: "portrait.jpg",
  /** Shown in the footer. */
  maintainer: "Maintained by her family, colleagues, and students.",
  contact: "",
} as const;

export const nav = [
  { href: "/", label: "In Memoriam" },
  { href: "/career/", label: "Education & Career" },
  { href: "/work/", label: "Her Work" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/tributes/", label: "Tributes" },
] as const;
