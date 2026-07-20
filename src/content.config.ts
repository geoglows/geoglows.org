import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { blockSchema } from "./schemas/blocks";
import { linkSchema, navItemSchema } from "./schemas/shared";

const settings = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/settings" }),
  schema: z.object({
    brandName: z.string(),
    tagline: z.string(),
    nav: z.array(navItemSchema),
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
    image: z.string().optional(),
    abstract: z.string().optional(),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.string().default("Tools"),
    icon: z.string().default("globe"),
    image: z.string().optional(),
    appUrl: z.string().optional(),
    order: z.number().default(0),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    organization: z.string().optional(),
    country: z.string().optional(),
    groups: z.array(z.string()).default(["Project leaders"]),
    photo: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
    email: z.string().optional(),
    orcid: z.string().optional(),
    order: z.number().default(0),
  }),
});

const workingGroups = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/working-groups" }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/videos" }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    order: z.number().default(0),
  }),
});

const webinars = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/webinars" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    youtubeId: z.string(),
    presenter: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const social = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/social" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    url: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    tag: z.string().default("LinkedIn"),
  }),
});

export const collections = {
  settings,
  pages,
  news,
  publications,
  tools,
  people,
  workingGroups,
  videos,
  webinars,
  social,
};
