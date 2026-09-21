export const isExternal = (href: string): boolean => /^https?:\/\//.test(href);

// Six blocks each rebuilt these attrs around isExternal. Two shapes are
// genuinely needed: some elements set their own href, some take it from here.
export const externalAttrs = (href: string) =>
  isExternal(href) ? { target: "_blank", rel: "noopener" } : {};

export const linkAttrs = (href?: string) => (href ? { href, ...externalAttrs(href) } : {});
