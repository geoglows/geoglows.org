/** Reveals sections as they enter the viewport and re-animates them on the way
    back (both scroll directions). See the .reveal-ready styles. */
const targets = document.querySelectorAll<HTMLElement>(
  "main .block, .hero-inner, main .stat-band",
);

function revealAll(): void {
  targets.forEach((el) => el.classList.add("is-visible"));
}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealAll();
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      }
    },
    { rootMargin: "-8% 0px -8% 0px", threshold: 0.08 },
  );
  targets.forEach((el) => observer.observe(el));
}
