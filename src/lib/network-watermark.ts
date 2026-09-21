import net from "../data/pipeline-network.json";

// Builds the section watermark as a standalone SVG document, one per theme.
// It ships as an image rather than inline markup so the geometry is fetched
// once and cached, instead of riding in the HTML of every page that draws it.
// Every width draws it, so phones fetch it too; below 900px it sits behind the
// text at a third of the opacity rather than beside it.
// Colours are baked here because an external image cannot read the page's
// custom properties.

const W = 1100;
// Height follows the frame's own aspect, so a degree is the same distance in
// both axes and the 0.1 degree cells stay square whatever box is baked.
const H = Math.round((W * (net.box.n - net.box.s)) / (net.box.e - net.box.w));

// Integer precision: one unit is 0.09% of the frame, and nothing here is read.
const path = (pts: number[][]) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"}${Math.round(x * W)} ${Math.round(y * H)}`).join("");

// Every order, down to the headwaters. Drawing the trunks alone left the
// network as a handful of parallel lines ending in mid-air; the capillaries are
// what make it read as one drainage basin rather than fragments.
// reduce, not spread: the comments below invite BOX and CELL to change, and a
// spread of a few hundred thousand reaches throws RangeError from a library
// import, a long way from the edit that caused it.
const minOrder = net.reaches.reduce((m, r) => Math.min(m, r.order), Infinity);
// Geometric, not linear. A linear ramp put a headwater and a trunk within 2:1
// of each other, which is the one relationship a river drawing has to get
// right. The floor keeps the smallest streams above a hairline.
const strokeFor = (order: number) => 0.9 + 0.55 * Math.pow(1.75, order - minOrder);

// The grid's pitch and alignment are read back off the baked cells rather than
// assumed, so the lattice stays true if the basin or the cell size changes.
const uniq = (v: number[]) => [...new Set(v.map(Math.round))].sort((a, b) => a - b);
const colEdges = uniq(net.cells.flatMap((c) => [c.x * W, (c.x + c.w) * W]));
const rowEdges = uniq(net.cells.flatMap((c) => [c.y * H, (c.y + c.h) * H]));
// The first and last gaps are cells the bounding box cut through, so the true
// pitch is the widest one. Anchoring on an interior edge keeps the lattice in
// register with the cells the reaches were counted into.
const widestGap = (e: number[]) => e.slice(1).reduce((m, v, i) => Math.max(m, v - e[i]), 0);
const [pitchX, pitchY] = [widestGap(colEdges), widestGap(rowEdges)];
const [anchorX, anchorY] = [colEdges[1], rowEdges[1]];

// Half-degree lines carry the graticule; the 0.1 degree cells sit inside them.
// A flat lattice of identical lines read as graph paper, which is the one thing
// a meteorological grid is not.
const lonAt = (x: number) => net.box.w + (x / W) * (net.box.e - net.box.w);
const latAt = (y: number) => net.box.n - (y / H) * (net.box.n - net.box.s);
const isRound = (deg: number) => Math.abs(deg / 0.5 - Math.round(deg / 0.5)) < 0.02;

const ticks = (anchor: number, pitch: number, extent: number) => {
  const first = anchor - Math.floor(anchor / pitch) * pitch;
  const out: number[] = [];
  for (let v = first; v <= extent; v += pitch) out.push(v);
  return out;
};

export const WATERMARK_THEMES = { light: "#0a6157", dark: "#6fd0c0" } as const;
export type WatermarkTheme = keyof typeof WATERMARK_THEMES;

export function watermarkSvg(stroke: string): string {
  const mesh = [
    ...ticks(anchorX, pitchX, W).map((x) => ({ d: `M${x} 0V${H}`, major: isRound(lonAt(x)) })),
    ...ticks(anchorY, pitchY, H).map((y) => ({ d: `M0 ${y}H${W}`, major: isRound(latAt(y)) })),
  ];
  const grid = mesh
    .map((m) => `<path d="${m.d}"${m.major ? ' class="maj"' : ""}/>`)
    .join("");
  const rivers = net.reaches
    .map((r) => `<path d="${path(r.d)}" stroke-width="${strokeFor(r.order).toFixed(2)}"/>`)
    .join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" ` +
    `preserveAspectRatio="xMidYMid slice">` +
    `<style>` +
    `g{fill:none;stroke:${stroke};stroke-linecap:round;stroke-linejoin:round}` +
    // Lighter than the streams it sits over: the grid is the surface the water
    // arrives on, not the subject.
    `.mesh path{stroke-width:1.3;stroke-opacity:.45}` +
    `.mesh .maj{stroke-width:2;stroke-opacity:.8}` +
    `</style>` +
    `<g class="mesh">${grid}</g>` +
    `<g>${rivers}</g>` +
    `</svg>`
  );
}
