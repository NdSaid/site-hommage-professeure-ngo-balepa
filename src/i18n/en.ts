import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    description:
      "In memory of Professor Aurore Sara Ngo Balepa, geographer and researcher " +
      "at the Department of Geography, University of Douala.",
    siteTitle: "In Memoriam",
  },
  nav: {
    home: "Home",
    biography: "Biography",
    research: "Research",
    career: "Career",
    gallery: "Gallery",
    guestbook: "Guest book",
  },
  header: {
    affiliation: "University of Douala · Geography",
    navLabel: "Primary navigation",
  },
  footer: {
    line: "Memorial site · University of Douala, Department of Geography",
  },
  switcher: {
    label: "Français",
    aria: "Lire cette page en français",
  },
  home: {
    eyebrow: "In memoriam",
    title: "Professor Aurore Sara Ngo Balepa",
    lede:
      "Geographer and researcher at the Department of Geography, University of " +
      "Douala. Head of the Geography Department, later Vice-Dean of the Faculty " +
      "of Arts and Humanities.",
    ctaPrimary: "Explore her career",
    ctaSecondary: "Leave a message",
    portraitCaption: "Portrait — caption and date to be confirmed",
    themes: [
      {
        title: "Douala",
        text: "Her university, her field, the city where she taught.",
      },
      {
        title: "Industrialisation",
        text: "The effects of industry on Cameroonian territories.",
      },
      {
        title: "Development",
        text: "Development read at the scale of places and populations.",
      },
    ],
    schoolTitle: "A teacher, a school of thought",
    schoolText:
      "Cohorts of students trained in geography at Douala. This site gathers " +
      "her work, her career, and the tributes of those who knew her.",
    schoolLink: "View her research",
    schoolCaption: "Photograph — caption to be confirmed",
  },
  biography: {
    eyebrow: "Biography · Biographie",
    title: "A life in geography",
    lede:
      "Professor Aurore Sara Ngo Balepa taught and researched at the Department " +
      "of Geography of the University of Douala.",
    body: [
      "She served there as Head of the Geography Department, and later as " +
        "Vice-Dean of the Faculty of Arts and Humanities (FLSH) at the " +
        "University of Douala.",
      "Her research addressed geography, industrialisation and development.",
    ],
    pending:
      "To be completed: dates of birth and death, education, distinctions, and a family text.",
    caption: "Caption to be confirmed",
  },
  research: {
    eyebrow: "Research · Travaux",
    title: "Publications and research",
    intro:
      "Geography, industrialisation, development. The references below are " +
      "placeholders awaiting the exact bibliography.",
    mapsTitle: "Maps and figures",
    mapsText:
      "Space for maps drawn from her research — industrial zones, the urban " +
      "dynamics of Douala, regional divisions.",
    mapsPending: "Send the data and the figures will be produced.",
    mapsCaption: "Map — caption to be confirmed",
    empty: "No work has been listed yet.",
  },
  career: {
    eyebrow: "Career · Carrière",
    title: "Timeline",
    pending:
      "Further dates and stages to be completed (education, scientific responsibilities).",
  },
  gallery: {
    eyebrow: "Gallery · Galerie",
    title: "In pictures",
    pending:
      "No photographs yet. Place files in src/assets/galerie/; captions are " +
      "set in src/data/captions.json.",
    zoom: "Enlarge",
    close: "Close",
  },
  guestbook: {
    eyebrow: "Guest book · Livre d'or",
    title: "Leave a message",
    intro:
      "Colleagues, students, family and friends: share a memory or a word of tribute.",
    fields: {
      name: { label: "Your name", placeholder: "First and last name" },
      relation: {
        label: "How you knew her",
        placeholder: "Former student, colleague, family…",
      },
      message: { label: "Your message", placeholder: "A memory, a few words…" },
    },
    submit: "Post the message",
    submitting: "Sending…",
    moderation: "Messages are reviewed before they appear on this page.",
    success:
      "Thank you. Your message has been sent; it will appear after review.",
    error:
      "Sending failed. Please try again in a moment, or write by email instead.",
    disabled: "Sending messages from the site is not enabled yet.",
    disabledContact: "In the meantime, tributes can be sent to",
    disabledNoContact: "In the meantime, tributes can be collected by email.",
    disabledPending:
      "To enable the form: set guestbookEndpoint in src/config.ts.",
    empty:
      "No messages published yet. Reviewed tributes are added to src/content/messages/.",
    honeypot: "Do not fill in",
  },
};
