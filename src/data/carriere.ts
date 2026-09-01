/**
 * Chronologie de carrière. Renseigner `annee` au fur et à mesure que les
 * dates sont confirmées par la famille ; « Année » reste affiché tant que
 * la valeur n'est pas remplacée.
 */
export interface Etape {
  annee: string;
  poste: string;
  precision: string;
}

export const etapes: Etape[] = [
  {
    annee: "Année",
    poste: "Enseignante-chercheure",
    precision: "Département de Géographie, Université de Douala.",
  },
  {
    annee: "Année",
    poste: "Cheffe de département",
    precision: "Département de Géographie, Université de Douala.",
  },
  {
    annee: "Année",
    poste: "Vice-Doyenne",
    precision:
      "Faculté des Lettres et Sciences Humaines (FLSH), Université de Douala.",
  },
];
