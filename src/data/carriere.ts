/**
 * Chronologie de carrière, bilingue.
 * `annee` reste « Année » / "Year" tant que la date n'est pas confirmée.
 */
export interface Etape {
  annee: { fr: string; en: string };
  poste: { fr: string; en: string };
  precision: { fr: string; en: string };
}

export const etapes: Etape[] = [
  {
    annee: { fr: "Année", en: "Year" },
    poste: { fr: "Enseignante-chercheure", en: "Lecturer and researcher" },
    precision: {
      fr: "Département de Géographie, Université de Douala.",
      en: "Department of Geography, University of Douala.",
    },
  },
  {
    annee: { fr: "Année", en: "Year" },
    poste: { fr: "Cheffe de département", en: "Head of Department" },
    precision: {
      fr: "Département de Géographie, Université de Douala.",
      en: "Department of Geography, University of Douala.",
    },
  },
  {
    annee: { fr: "Année", en: "Year" },
    poste: { fr: "Vice-Doyenne", en: "Vice-Dean" },
    precision: {
      fr: "Faculté des Lettres et Sciences Humaines (FLSH), Université de Douala.",
      en: "Faculty of Arts and Humanities (FLSH), University of Douala.",
    },
  },
];
