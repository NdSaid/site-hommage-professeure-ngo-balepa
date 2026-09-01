import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Her published work. Add a paper by dropping a Markdown file into
 * src/content/works/ — it is sorted, grouped by year, and rendered
 * automatically. The body of the file is the abstract or a note.
 */
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    /** Journal, conference, publisher, or venue. */
    venue: z.string().optional(),
    /** Co-authors, in publication order. Her own name may be omitted. */
    authors: z.array(z.string()).default([]),
    type: z
      .enum(["article", "book", "chapter", "talk", "thesis", "other"])
      .default("article"),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    /** A file in public/papers/ — e.g. "/papers/1998-title.pdf" */
    pdf: z.string().optional(),
    /** Pins an entry to the top of its year. */
    featured: z.boolean().default(false),
  }),
});

/**
 * Remembrances from colleagues, students, and family.
 * One Markdown file per tribute; the body is the message.
 */
const tributes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tributes" }),
  schema: z.object({
    author: z.string(),
    /** e.g. "Doctoral student, 2009–2014" or "Colleague, Dept. of History" */
    relation: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { works, tributes };
