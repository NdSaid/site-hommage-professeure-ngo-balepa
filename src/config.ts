/**
 * Réglages du site. Les textes traduits vivent dans src/i18n/, pas ici.
 */
export const site = {
  name: "Aurore Sara Ngo Balepa",
  shortName: "Pr. Aurore Sara Ngo Balepa",

  /**
   * Empêche l'indexation par les moteurs de recherche.
   * Laisser à `true` tant que la page Travaux affiche
   * « Titre de la publication » et la carrière « Année » : le nom de la
   * Professeure ne doit pas être indexé attaché à un brouillon.
   * Passer à `false` le jour de la mise en ligne réelle.
   */
  draft: true,

  /**
   * Endpoint de réception du livre d'or (Formspree, Netlify Forms, Web3Forms…).
   * Vide ⇒ le formulaire est remplacé par une invitation à écrire par courriel.
   */
  guestbookEndpoint: "",
  contactEmail: "",
} as const;
