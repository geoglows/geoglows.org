/** Reveals each section's inner items in a staggered cascade as it enters the
    viewport, re-animating in both scroll directions. See .reveal-ready styles. */
const targets = document.querySelectorAll<HTMLElement>(
  "main .block, .hero-inner, main .stat-band",
);

const STAGGER_MS = 90;

function cascadeItems(section: HTMLElement): NodeListOf<HTMLElement> {
  if (section.classList.contains("hero-inner")) {
    return section.querySelectorAll<HTMLElement>(":scope > *");
  }
  if (section.classList.contains("stat-band")) {
    return section.querySelectorAll<HTMLElement>(":scope > .inner > *");
  }
  return section.querySelectorAll<HTMLElement>(
    ":scope > .shell > *:not(.grid):not(.layout), :scope > .shell > .grid > *, :scope > .shell > .layout > *",
  );
}

function applyDelays(section: HTMLElement): void {
  cascadeItems(section).forEach((item, index) => {
    item.style.transitionDelay = `${index * STAGGER_MS}ms`;
  });
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  targets.forEach((el) => el.classList.add("is-visible"));
} else {
  targets.forEach(applyDelays);
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      }
    },
    { rootMargin: "0px 0px -18% 0px", threshold: 0 },
  );
  targets.forEach((el) => observer.observe(el));
}
