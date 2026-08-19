/** Counts numeric stats up from zero when they scroll into view.
    Preserves any prefix/suffix (e.g. "$", "M+", "~", "%", "-day"). */
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const els = document.querySelectorAll<HTMLElement>("[data-count]");

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

function run(el: HTMLElement): void {
  const raw = el.dataset.final ?? "";
  const match = raw.match(/-?\d[\d,]*\.?\d*/);
  if (!match) return;
  const numStr = match[0].replace(/,/g, "");
  const target = parseFloat(numStr);
  const decimals = (numStr.split(".")[1] ?? "").length;
  const prefix = raw.slice(0, match.index);
  const suffix = raw.slice((match.index ?? 0) + match[0].length);
  const duration = 1100;
  let startedAt: number | null = null;

  const tick = (now: number): void => {
    startedAt ??= now;
    const progress = Math.min(1, (now - startedAt) / duration);
    const value = (target * easeOutCubic(progress)).toFixed(decimals);
    el.textContent = `${prefix}${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = raw;
  };
  requestAnimationFrame(tick);
}

if (els.length > 0 && !reduce && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        obs.unobserve(entry.target);
        run(entry.target as HTMLElement);
      }
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => {
    el.dataset.final = el.textContent ?? "";
    observer.observe(el);
  });
}
