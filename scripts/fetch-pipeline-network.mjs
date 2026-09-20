// Bakes a real TDX-Hydro stream network into src/data for the grid-to-network
// figure. Re-run to refresh. Committed output is a snapshot, not a live feed.
//   node scripts/fetch-pipeline-network.mjs
import { writeFileSync } from "node:fs";

// Centred on the Karnali reach the forecast chart plots, so the figure and the
// chart below it are the same river.
const REACH = 441185104;
// Banner proportions: one wide frame reads better than three small ones.
const BOX = { w: 80.62, s: 28.55, e: 81.72, n: 29.01 };
const CELL = 0.1; // ECMWF IFS 48r1 ensemble grid, about 9 km
const SERVICE =
  "https://livefeeds3.arcgis.com/arcgis/rest/services/GEOGLOWS/GlobalWaterModel_Medium/MapServer/0/query";

const params = new URLSearchParams({
  geometry: `${BOX.w},${BOX.s},${BOX.e},${BOX.n}`,
  geometryType: "esriGeometryEnvelope",
  inSR: "4326",
  outSR: "4326",
  spatialRel: "esriSpatialRelIntersects",
  outFields: "comid,streamorder,upstreamarea",
  returnGeometry: "true",
  f: "geojson",
});
const res = await fetch(`${SERVICE}?${params}`, { headers: { "User-Agent": "geoglows.org build" } });
if (!res.ok) throw new Error(`stream query -> ${res.status}`);
const gj = await res.json();
if (gj.error) throw new Error(JSON.stringify(gj.error).slice(0, 200));

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Ramer-Douglas-Peucker. Raw geometry is ~1.1 MB, far more precision than a
// 300px panel can show; this keeps the shape and drops the rest.
const rdp = (pts, eps) => {
  if (pts.length < 3) return pts;
  const [ax, ay] = pts[0];
  const [bx, by] = pts[pts.length - 1];
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.hypot(dx, dy) || 1e-9;
  let worst = 0;
  let idx = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / len;
    if (d > worst) [worst, idx] = [d, i];
  }
  return worst > eps
    ? [...rdp(pts.slice(0, idx + 1), eps).slice(0, -1), ...rdp(pts.slice(idx), eps)]
    : [pts[0], pts[pts.length - 1]];
};
// Project to a 0..1 box once, here, so the component stays presentation-only.
const px = (x) => (clamp(x, BOX.w, BOX.e) - BOX.w) / (BOX.e - BOX.w);
const py = (y) => 1 - (clamp(y, BOX.s, BOX.n) - BOX.s) / (BOX.n - BOX.s);

const reaches = [];
for (const f of gj.features ?? []) {
  const g = f.geometry;
  const parts = g.type === "MultiLineString" ? g.coordinates : [g.coordinates];
  for (const part of parts) {
    if (part.length < 2) continue;
    const full = part.map(([x, y]) => [px(x), py(y)]);
    const pts = rdp(full, 0.0015).map(([x, y]) => [+x.toFixed(3), +y.toFixed(3)]);
    reaches.push({
      order: f.properties.streamorder ?? 1,
      main: f.properties.comid === REACH,
      // Midpoint from the full geometry: taking it after simplification moved
      // the per-cell counts, which are the figure's whole claim.
      mid: full[Math.floor(full.length / 2)],
      d: pts,
    });
  }
}

// Cell corners in the same 0..1 space, aligned to the real grid graticule.
const cells = [];
for (let x = Math.floor(BOX.w / CELL) * CELL; x < BOX.e; x += CELL) {
  for (let y = Math.floor(BOX.s / CELL) * CELL; y < BOX.n; y += CELL) {
    const x0 = px(x), x1 = px(x + CELL), y0 = py(y + CELL), y1 = py(y);
    if (x1 - x0 < 0.01 || y1 - y0 < 0.01) continue;
    cells.push({ x: +x0.toFixed(4), y: +y0.toFixed(4), w: +(x1 - x0).toFixed(4), h: +(y1 - y0).toFixed(4) });
  }
}

// How many reaches fall in each cell: the whole point of the figure.
const perCell = cells.map((c) => {
  const n = reaches.filter(
    (r) => r.mid[0] >= c.x && r.mid[0] < c.x + c.w && r.mid[1] >= c.y && r.mid[1] < c.y + c.h,
  ).length;
  return { ...c, n };
});

writeFileSync(
  "src/data/pipeline-network.json",
  JSON.stringify(
    {
      label: "Karnali basin, Nepal",
      reach_id: REACH,
      retrieved: new Date().toISOString().slice(0, 10),
      cell_degrees: CELL,
      reach_count: reaches.length,
      cells: perCell,
      reaches: reaches.map(({ mid, ...r }) => r),
    },
    null,
    0,
  ) + "\n",
);
const busiest = Math.max(...perCell.map((c) => c.n));
console.log(
  `wrote src/data/pipeline-network.json: ${reaches.length} reaches, ${perCell.length} grid cells, busiest cell holds ${busiest}`,
);
