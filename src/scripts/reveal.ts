/** Reveals each section once as it enters the viewport (see .reveal-ready styles). */
const targets = document.querySelectorAll<HTMLElement>(
  "main .block, .hero-inner, main .stat-band",
);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  targets.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0 },
  );
  targets.forEach((el) => observer.observe(el));
}
