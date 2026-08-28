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
  eyebrow: z.string().optional(),
  heading: z.string().optional(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
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
  anchor: z.string().optional(),
  stories: z.array(
    z.object({ image: z.string(), location: z.string(), title: z.string(), href: z.string() }),
  ),
  cta: linkSchema.optional(),
});

const caseStudiesBlock = z.object({
  type: z.literal("caseStudies"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  items: z.array(
    z.object({
      location: z.string(),
      title: z.string(),
      text: z.string(),
      source: z.string().optional(),
      href: z.string().optional(),
    }),
  ),
  cta: linkSchema.optional(),
});

const countriesMapBlock = z.object({
  type: z.literal("countriesMap"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  note: z.string().optional(),
  points: z.array(
    z.object({
      country: z.string(),
      lat: z.number(),
      lng: z.number(),
      pos: z.enum(["top", "bottom", "left", "right"]).optional(),
    }),
  ),
  cta: linkSchema.optional(),
});

const communityFeedBlock = z.object({
  type: z.literal("communityFeed"),
  eyebrow: z.string().optional(),
  heading: z.string().optional(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  webinarsCount: z.number().default(3),
  newsCount: z.number().default(5),
});

const dataAccessBlock = z.object({
  type: z.literal("dataAccess"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  background: z.enum(["page", "muted"]).optional(),
  items: z.array(
    z.object({
      icon: z.string().default("layers"),
      tag: z.string().optional(),
      title: z.string(),
      text: z.string(),
      code: z.string().optional(),
      links: z.array(linkSchema).default([]),
    }),
  ),
});

const featureSectionBlock = z.object({
  type: z.literal("featureSection"),
  anchor: z.string().optional(),
  eyebrow: z.string().optional(),
  heading: z.string(),
  tag: z.string().optional(),
  body: z.string(),
  image: z.string().optional(),
  imageSide: z.enum(["left", "right"]).optional(),
  background: z.enum(["page", "muted"]).optional(),
  points: z
    .array(z.object({ title: z.string(), text: z.string() }))
    .default([]),
  cta: linkSchema.optional(),
});

const iconItem = z.object({ icon: z.string(), title: z.string(), text: z.string() });
const titleTextItem = z.object({ title: z.string(), text: z.string() });

const valuePropsBlock = z.object({
  type: z.literal("valueProps"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  anchor: z.string().optional(),
  intro: z.string().optional(),
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
  intro: z.string().optional(),
  anchor: z.string().optional(),
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
  anchor: z.string().optional(),
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
  anchor: z.string().optional(),
  eyebrow: z.string().optional(),
  heading: z.string().optional(),
  intro: z.string().optional(),
  cta: linkSchema.optional(),
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
              emblem: z.boolean().optional(),
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
    z.object({
      mark: z.string(),
      title: z.string(),
      text: z.string(),
      href: z.string().optional(),
    }),
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
      id: z.string().optional(),
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
    z.object({
      kicker: z.string(),
      title: z.string(),
      text: z.string(),
      href: z.string().optional(),
    }),
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

const featuredMediaBlock = z.object({
  type: z.literal("featuredMedia"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  video: z
    .object({ youtubeId: z.string(), title: z.string().optional() })
    .optional(),
  items: z.array(
    z.object({
      title: z.string(),
      location: z.string().optional(),
      image: z.string().optional(),
      youtubeId: z.string().optional(),
      href: z.string().optional(),
    }),
  ),
  cta: linkSchema.optional(),
});

const resourceTabsBlock = z.object({
  type: z.literal("resourceTabs"),
  eyebrow: z.string().optional(),
  heading: z.string(),
  intro: z.string().optional(),
  anchor: z.string().optional(),
  tabs: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
      description: z.string().optional(),
      icon: z.string().optional(),
      group: z.string().optional(),
    }),
  ),
});

export const blockSchema = z.discriminatedUnion("type", [
  heroBlock,
  statBandBlock,
  coverageBlock,
  impactStoriesBlock,
  caseStudiesBlock,
  countriesMapBlock,
  featureSectionBlock,
  communityFeedBlock,
  dataAccessBlock,
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
  featuredMediaBlock,
  resourceTabsBlock,
]);

export type Block = z.infer<typeof blockSchema>;
