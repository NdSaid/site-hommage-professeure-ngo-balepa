import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Travaux — publications, recherches, directions de thèse.
 * Une fiche par fichier Markdown dans src/content/travaux/.
 * Le corps du fichier sert de résumé (deux ou trois lignes).
 */
const travaux = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/travaux" }),
  schema: z.object({
    /** Étiquette de la fiche : Industrialisation, Développement, … */
    theme: z.string(),
    title: z.string(),
    /** « Revue, éditeur, année. » */
    reference: z.string().optional(),
    /** Ordre d'affichage ; les plus petits d'abord. */
    order: z.number().default(99),
    /** Une fiche « Direction de thèse » s'affiche en ocre. */
    accent: z.enum(["green", "ochre"]).default("green"),
    url: z.string().url().optional(),
    /** Fichier déposé dans public/documents/ */
    pdf: z.string().optional(),
  }),
});

/**
 * Livre d'or — messages publiés APRÈS modération.
 * Le formulaire du site n'écrit pas ici : les messages reçus sont relus,
 * puis ajoutés à la main comme fichiers Markdown. C'est voulu (site
 * mémoriel public — voir « modération avant publication » dans le handoff).
 */
const messages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/messages" }),
  schema: z.object({
    /** Vide ⇒ « Anonyme ». */
    nom: z.string().default("Anonyme"),
    /** Ancien étudiant, collègue, famille… Vide ⇒ « Hommage ». */
    lien: z.string().default("Hommage"),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { travaux, messages };
