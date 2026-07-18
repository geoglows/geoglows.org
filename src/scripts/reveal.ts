/** Reveals sections as they scroll into view (see .reveal-ready styles). */
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
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );
  targets.forEach((el) => observer.observe(el));
}
