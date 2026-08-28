export const formatPostDate = (d: Date): string =>
  d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
