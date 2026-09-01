/**
 * Détails du site. Source unique pour le nom, les titres et la navigation.
 */
export const site = {
  name: "Aurore Sara Ngo Balepa",
  fullName: "Professeure Aurore Sara Ngo Balepa",
  shortName: "Pr. Aurore Sara Ngo Balepa",
  affiliation: "Université de Douala · Géographie",
  footerLine:
    "Site d'hommage · Université de Douala, Département de Géographie",
  description:
    "Site d'hommage à la Professeure Aurore Sara Ngo Balepa, géographe, " +
    "enseignante-chercheure au Département de Géographie de l'Université de Douala.",

  /**
   * Endpoint de réception du livre d'or (Formspree, Netlify Forms, Web3Forms…).
   * Laisser vide tant qu'aucun service n'est configuré : le formulaire
   * affiche alors une adresse de contact à la place.
   * Voir la section « Livre d'or » du README.
   */
  guestbookEndpoint: "",
  /** Adresse de repli utilisée si guestbookEndpoint est vide. */
  contactEmail: "",
} as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/biographie/", label: "Biographie" },
  { href: "/travaux/", label: "Travaux" },
  { href: "/carriere/", label: "Carrière" },
  { href: "/galerie/", label: "Galerie" },
  { href: "/livre-d-or/", label: "Livre d'or" },
] as const;
