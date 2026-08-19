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
  cta: linkSchema.optional(),
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
  logos: z.array(
    z.object({
      name: z.string(),
      image: z.string().optional(),
      url: z.string().optional(),
    }),
  ),
  cta: linkSchema.optional(),
  anchor: z.string().optional(),
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
  anchor: z.string().optional(),
});

const toolsGridBlock = z.object({
  type: z.literal("toolsGrid"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  category: z.string().optional(),
  limit: z.number().optional(),
  cta: linkSchema.optional(),
});

const peopleGridBlock = z.object({
  type: z.literal("peopleGrid"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  group: z.string().optional(),
  anchor: z.string().optional(),
});

const workingGroupsBlock = z.object({
  type: z.literal("workingGroups"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  anchor: z.string().optional(),
});

const missionHeroBlock = z.object({
  type: z.literal("missionHero"),
  eyebrow: z.string().default("Mission"),
  heading: z.string(),
  lede: z.string().optional(),
  image: z.string().optional(),
  spotlight: z
    .array(z.object({ tag: z.string(), text: z.string() }))
    .default([]),
  spotlightLink: linkSchema.optional(),
  socialHeading: z.string().default("Latest from GEOGLOWS"),
  socialCount: z.number().default(3),
});

const trustStripBlock = z.object({
  type: z.literal("trustStrip"),
  groups: z
    .array(
      z.object({
        label: z.string(),
        logos: z
          .array(
            z.object({
              name: z.string(),
              image: z.string().optional(),
              url: z.string().optional(),
              invert: z.boolean().optional(),
            }),
          )
          .default([]),
        tail: z.string().optional(),
      }),
    )
    .default([]),
});

const partnerCardsBlock = z.object({
  type: z.literal("partnerCards"),
  eyebrow: z.string().optional(),
  stageTag: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  cards: z.array(
    z.object({ mark: z.string(), title: z.string(), text: z.string() }),
  ),
});

const pillarsBlock = z.object({
  type: z.literal("pillars"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  introLink: linkSchema.optional(),
  anchor: z.string().optional(),
  items: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      text: z.string(),
      tag: z.string().optional(),
      image: z.string().optional(),
    }),
  ),
});

const impactCycleBlock = z.object({
  type: z.literal("impactCycle"),
  eyebrow: z.string().optional(),
  stageTag: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  steps: z.array(
    z.object({ idx: z.string(), title: z.string(), text: z.string() }),
  ),
  stats: z.array(z.object({ num: z.string(), lbl: z.string() })).default([]),
  quote: z
    .object({
      text: z.string(),
      who: z.string(),
      note: z.string().optional(),
    })
    .optional(),
  story: z
    .object({
      image: z.string(),
      location: z.string(),
      title: z.string(),
      href: z.string().optional(),
      note: z.string().optional(),
    })
    .optional(),
});

const investmentBlock = z.object({
  type: z.literal("investment"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  stats: z.array(z.object({ value: z.string(), label: z.string() })),
  note: z.string().optional(),
  cta: ctaSchema.optional(),
});

const audienceCardsBlock = z.object({
  type: z.literal("audienceCards"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  items: z.array(
    z.object({ kicker: z.string(), title: z.string(), text: z.string() }),
  ),
  contactEmail: z.string().optional(),
});

const timelineBlock = z.object({
  type: z.literal("timeline"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  items: z.array(z.object({ year: z.string(), text: z.string() })),
  note: z.string().optional(),
  cards: z
    .array(z.object({ title: z.string(), items: z.array(z.string()) }))
    .default([]),
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
  missionHeroBlock,
  trustStripBlock,
  partnerCardsBlock,
  pillarsBlock,
  impactCycleBlock,
  investmentBlock,
  audienceCardsBlock,
  timelineBlock,
]);

export type Block = z.infer<typeof blockSchema>;
