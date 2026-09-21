// Only the first block on a page can hold the LCP element, so BlockRenderer
// passes priority={i === 0}. This maps that one flag to the three attributes
// that express it, so the blocks carrying images cannot drift apart.
export const priorityAttrs = (priority?: boolean) =>
  priority === true
    ? { loading: "eager" as const, fetchpriority: "high" as const, decoding: "sync" as const }
    : { loading: "lazy" as const, fetchpriority: "auto" as const, decoding: "async" as const };
