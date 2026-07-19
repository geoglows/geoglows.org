import { z } from "astro:content";

export const ctaStyles = ["amber", "white", "outline", "navy", "green"] as const;

export const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const navItemSchema = linkSchema.extend({
  children: z.array(linkSchema).optional(),
});

export const ctaSchema = linkSchema.extend({
  style: z.enum(ctaStyles).default("amber"),
});

export const sectionHeadingSchema = z.object({
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
});
