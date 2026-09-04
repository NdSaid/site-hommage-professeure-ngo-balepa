import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    description:
      "Site d'hommage à la Professeure Aurore Sara Ngo Balepa, géographe, " +
      "enseignante-chercheure au Département de Géographie de l'Université de Douala.",
    siteTitle: "Hommage",
  },
  nav: {
    home: "Accueil",
    biography: "Biographie",
    research: "Travaux",
    career: "Carrière",
    gallery: "Galerie",
    guestbook: "Livre d'or",
  },
  header: {
    affiliation: "Université de Douala · Géographie",
    navLabel: "Navigation principale",
  },
  footer: {
    line: "Site d'hommage · Université de Douala, Département de Géographie",
  },
  /** Libellé du lien vers l'AUTRE langue. */
  switcher: {
    label: "English",
    aria: "Read this page in English",
  },
  home: {
    eyebrow: "In memoriam",
    title: "Professeure Aurore Sara Ngo Balepa",
    lede:
      "Géographe, enseignante-chercheure au Département de Géographie de " +
      "l'Université de Douala. Cheffe de département, puis Vice-Doyenne de la " +
      "Faculté des Lettres et Sciences Humaines.",
    ctaPrimary: "Découvrir son parcours",
    ctaSecondary: "Laisser un message",
    portraitCaption: "Portrait — légende et date à préciser",
    themes: [
      {
        title: "Douala",
        text: "Son université, son terrain, sa ville d'enseignement.",
      },
      {
        title: "Industrialisation",
        text: "Les effets de l'industrie sur les territoires camerounais.",
      },
      {
        title: "Développement",
        text: "Le développement lu à l'échelle des lieux et des populations.",
      },
    ],
    schoolTitle: "Un enseignement, une école",
    schoolText:
      "Des promotions d'étudiants formées à la géographie à Douala. Ce site " +
      "rassemble ses travaux, sa carrière et les hommages de celles et ceux " +
      "qui l'ont connue.",
    schoolLink: "Voir les travaux",
    schoolCaption: "Photographie — légende à préciser",
  },
  biography: {
    eyebrow: "Biographie · Biography",
    title: "Une vie de géographe",
    lede:
      "La Professeure Aurore Sara Ngo Balepa a exercé comme enseignante-chercheure " +
      "au Département de Géographie de l'Université de Douala.",
    body: [
      "Elle y a occupé le poste de cheffe de département de géographie, avant " +
        "d'être Vice-Doyenne à la Faculté des Lettres et Sciences Humaines (FLSH) " +
        "de l'Université de Douala.",
      "Ses travaux de recherche portaient notamment sur la géographie, " +
        "l'industrialisation et le développement.",
    ],
    pending:
      "À compléter : dates de naissance et de décès, formation, distinctions, texte familial.",
    caption: "Légende à préciser",
  },
  research: {
    eyebrow: "Travaux · Research",
    title: "Publications et recherches",
    intro:
      "Géographie, industrialisation, développement. Les références ci-dessous " +
      "sont des emplacements prêts à recevoir la bibliographie exacte.",
    mapsTitle: "Cartes et figures",
    mapsText:
      "Emplacement pour les cartes issues de ses recherches — zones industrielles, " +
      "dynamiques urbaines de Douala, découpages régionaux.",
    mapsPending: "Envoyez les données et les graphiques seront produits.",
    mapsCaption: "Carte — légende à préciser",
    empty: "Aucun travail référencé pour l'instant.",
  },
  career: {
    eyebrow: "Carrière · Career",
    title: "Chronologie",
    pending:
      "Dates et étapes supplémentaires à compléter (formation, responsabilités scientifiques).",
  },
  gallery: {
    eyebrow: "Galerie · Gallery",
    title: "En images",
    pending:
      "Aucune photographie pour l'instant. Déposer les fichiers dans " +
      "src/assets/galerie/ ; les légendes se renseignent dans src/data/captions.json.",
    zoom: "Agrandir",
    close: "Fermer",
  },
  guestbook: {
    eyebrow: "Livre d'or · Guest book",
    title: "Laisser un message",
    intro:
      "Collègues, étudiants, proches : partagez un souvenir ou un mot d'hommage.",
    fields: {
      name: { label: "Votre nom", placeholder: "Nom et prénom" },
      relation: {
        label: "Lien avec elle",
        placeholder: "Ancien étudiant, collègue, famille…",
      },
      message: { label: "Votre message", placeholder: "Un souvenir, un mot…" },
    },
    submit: "Publier le message",
    submitting: "Envoi en cours…",
    moderation: "Les messages sont relus avant d'être publiés sur cette page.",
    success:
      "Merci. Votre message a bien été envoyé ; il sera publié après relecture.",
    error:
      "L'envoi a échoué. Merci de réessayer dans un instant, ou d'écrire par courriel.",
    disabled: "L'envoi de messages depuis le site n'est pas encore activé.",
    disabledContact: "En attendant, les hommages peuvent être adressés à",
    disabledNoContact:
      "En attendant, les hommages peuvent être recueillis par courriel.",
    disabledPending:
      "Pour activer le formulaire : renseigner guestbookEndpoint dans src/config.ts.",
    empty:
      "Aucun message publié pour l'instant. Les hommages relus se déposent dans src/content/messages/.",
    honeypot: "Ne pas remplir",
  },
};
