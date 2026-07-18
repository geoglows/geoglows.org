import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { blockSchema } from "./schemas/blocks";
import { linkSchema } from "./schemas/shared";

const settings = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/settings" }),
  schema: z.object({
    brandName: z.string(),
    tagline: z.string(),
    nav: z.array(linkSchema),
    navCta: linkSchema,
    ticker: z.array(z.object({ date: z.string(), text: z.string() })).default([]),
    footerBlurb: z.string(),
    footerColumns: z.array(
      z.object({ title: z.string(), links: z.array(linkSchema) }),
    ),
    footerLegal: z.array(linkSchema).default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    blocks: z.array(blockSchema).default([]),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    url: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    tag: z.string().default("News"),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    year: z.number(),
    journal: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    topics: z.array(z.string()).default([]),
    abstract: z.string().optional(),
  }),
});

export const collections = { settings, pages, news, publications };
