import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Travaux — publications, recherches, directions de thèse.
 *
 * Le titre d'une publication ne se traduit pas : il reste tel qu'il a été
 * publié. Seuls l'étiquette de thème et le résumé ont une version anglaise.
 * `themeEn` / `summaryEn` absents ⇒ la version française est réutilisée.
 */
const travaux = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/travaux" }),
  schema: z.object({
    theme: z.string(),
    themeEn: z.string().optional(),
    title: z.string(),
    reference: z.string().optional(),
    referenceEn: z.string().optional(),
    /** Résumé français. Le corps Markdown sert de repli. */
    summary: z.string().optional(),
    summaryEn: z.string().optional(),
    order: z.number().default(99),
    accent: z.enum(["green", "ochre"]).default("green"),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
  }),
});

/**
 * Livre d'or — messages publiés APRÈS modération.
 * Les hommages restent dans la langue de leur auteur : ils s'affichent
 * tels quels dans les deux versions du site.
 */
const messages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/messages" }),
  schema: z.object({
    nom: z.string().default("Anonyme"),
    lien: z.string().default("Hommage"),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { travaux, messages };
