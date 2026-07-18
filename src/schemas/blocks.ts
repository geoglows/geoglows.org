import { z } from "astro:content";
import { ctaSchema, linkSchema } from "./shared";

const heroBlock = z.object({
  type: z.literal("hero"),
  eyebrow: z.string().optional(),
  headingLead: z.string(),
  headingEmphasis: z.string().optional(),
  subtitle: z.string().optional(),
  image: z.string().optional(),
  ctas: z.array(ctaSchema).default([]),
  featured: z
    .object({ tag: z.string(), title: z.string(), text: z.string(), href: z.string() })
    .optional(),
});

const statBandBlock = z.object({
  type: z.literal("statBand"),
  stats: z.array(z.object({ value: z.string(), label: z.string() })),
});

const coverageBlock = z.object({
  type: z.literal("coverage"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  items: z.array(z.object({ image: z.string(), title: z.string(), text: z.string() })),
});

const impactStoriesBlock = z.object({
  type: z.literal("impactStories"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  stories: z.array(
    z.object({ image: z.string(), location: z.string(), title: z.string(), href: z.string() }),
  ),
  cta: linkSchema.optional(),
});

const iconItem = z.object({ icon: z.string(), title: z.string(), text: z.string() });
const titleTextItem = z.object({ title: z.string(), text: z.string() });

const valuePropsBlock = z.object({
  type: z.literal("valueProps"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  items: z.array(titleTextItem),
  cta: linkSchema.optional(),
});

const useCasesBlock = z.object({
  type: z.literal("useCases"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  items: z.array(iconItem),
});

const testimonialsBlock = z.object({
  type: z.literal("testimonials"),
  quotes: z.array(
    z.object({ quote: z.string(), name: z.string(), role: z.string(), initials: z.string() }),
  ),
});

const partnersBlock = z.object({
  type: z.literal("partners"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  logos: z.array(z.string()),
  cta: linkSchema.optional(),
});

const howItWorksBlock = z.object({
  type: z.literal("howItWorks"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  steps: z.array(z.object({ title: z.string(), text: z.string() })),
});

const newsletterBlock = z.object({
  type: z.literal("newsletter"),
  heading: z.string(),
  text: z.string().optional(),
  buttonLabel: z.string().default("Subscribe"),
});

const closingCtaBlock = z.object({
  type: z.literal("closingCta"),
  heading: z.string(),
  ctas: z.array(ctaSchema).default([]),
});

const newsGridBlock = z.object({
  type: z.literal("newsGrid"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  count: z.number().default(3),
  cta: linkSchema.optional(),
});

const richTextBlock = z.object({
  type: z.literal("richText"),
  eyebrow: z.string().optional(),
  heading: z.string().optional(),
  body: z.string(),
  background: z.enum(["page", "muted"]).default("page"),
});

const toolsGridBlock = z.object({
  type: z.literal("toolsGrid"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  category: z.string().optional(),
});

const peopleGridBlock = z.object({
  type: z.literal("peopleGrid"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  group: z.string().optional(),
});

const workingGroupsBlock = z.object({
  type: z.literal("workingGroups"),
  eyebrow: z.string().optional(),
  heading: z.string(),
});

export const blockSchema = z.discriminatedUnion("type", [
  heroBlock,
  statBandBlock,
  coverageBlock,
  impactStoriesBlock,
  valuePropsBlock,
  useCasesBlock,
  testimonialsBlock,
  partnersBlock,
  howItWorksBlock,
  newsletterBlock,
  closingCtaBlock,
  newsGridBlock,
  richTextBlock,
  toolsGridBlock,
  peopleGridBlock,
  workingGroupsBlock,
]);

export type Block = z.infer<typeof blockSchema>;
