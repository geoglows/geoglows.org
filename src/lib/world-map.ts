import { createRequire } from "module";
import { geoEquirectangular, geoPath } from "d3-geo";
import { feature } from "topojson-client";

// The projection the Impact map is drawn in, shared by the block and by the
// endpoint that renders its base landmass, so the two cannot drift apart.

// The deployments span 215 deg of longitude but only 71 of latitude. Fitting the
// whole globe left 74% of the frame as empty ocean and Antarctica and pushed the
// Central America pins to 6.9px apart, closer than the dots are wide. Fitting the
// inhabited band instead makes the populated area 2.53x larger at the same width.
export const LNG0 = -102;
export const LNG1 = 113;
export const LAT0 = -25;
export const LAT1 = 46;
export const W = 1000;
export const H = Math.round((W * (LAT1 - LAT0)) / (LNG1 - LNG0));

// fitSize() cannot express this: it measures a polygon's edges as great circles,
// which bulge poleward and inflate the bounds back to the whole globe. The
// equirectangular projection is linear in lon/lat, so the fit is exact by hand.
const RAD = Math.PI / 180;
const k = W / ((LNG1 - LNG0) * RAD);
export const projection = geoEquirectangular()
  .scale(k)
  .translate([-k * LNG0 * RAD, k * LAT1 * RAD]);

// One unit is about one rendered pixel here, so three decimals of coordinate
// precision (d3's default) was 149 KB of sub-pixel detail in a single path.
// One decimal keeps a tenth of a pixel, which no display resolves.
export const path = geoPath(projection).digits(1);

const require = createRequire(import.meta.url);
const topo = require("world-atlas/countries-110m.json");
export const countries = feature(topo, topo.objects.countries) as any;

// world-atlas abbreviates a few names, so the aliases bridge content to shapes.
const ALIAS: Record<string, string> = { "Dominican Republic": "Dominican Rep." };
export const shapeName = (c: string) => ALIAS[c] ?? c;

export const MAP_THEMES = {
  light: { land: "#d3dbe1", border: "#ffffff" },
  dark: { land: "#263749", border: "#101b28" },
} as const;
export type MapTheme = keyof typeof MAP_THEMES;

// Every country, as one path. It ships as an image rather than inline markup
// because it is the only part of the map nothing can click: 149 KB of static
// coastline was travelling in the HTML of every Impact page view. The project
// countries draw over it from the block, so this file never depends on content.
export function worldBaseSvg(theme: MapTheme): string {
  const { land, border } = MAP_THEMES[theme];
  const d = path(countries) ?? "";
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" ` +
    `preserveAspectRatio="none">` +
    `<path d="${d}" fill="${land}" stroke="${border}" stroke-width="0.4"/>` +
    `</svg>`
  );
}
