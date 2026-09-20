// Bakes a real GEOGLOWS forecast into src/data so the page never depends on the
// API at build or request time. Re-run to refresh; the committed JSON is a dated
// snapshot, not a live feed.
//   node scripts/fetch-pipeline-forecast.mjs
import { writeFileSync } from "node:fs";

// The Karnali, one of the three basins the Nepal case study names. Chosen over
// larger rivers because a huge catchment damps 15 days of weather uncertainty
// almost to nothing: the Amazon main stem spreads 0.2%, which would draw as a
// single flat line and show nothing about what an ensemble is.
const RIVER = 441185104;
const API = "https://geoglows.ecmwf.int/api/v2";
const UA = { "User-Agent": "geoglows.org build" };

const get = async (p) => {
  const r = await fetch(`${API}/${p}`, { headers: UA });
  if (!r.ok) throw new Error(`${p} -> ${r.status}`);
  return r.json();
};
const quantile = (sorted, q) => {
  const i = (sorted.length - 1) * q;
  const lo = Math.floor(i);
  const hi = Math.ceil(i);
  return lo === hi ? sorted[lo] : sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo);
};

const ens = await get(`forecastensemble/${RIVER}?format=json`);
const members = Object.keys(ens).filter((k) => k.startsWith("ensemble_"));

// Two traps here. Keeping every step that had *any* value collapsed the band to
// a line on two thirds of them, because a few members report off the 3-hourly
// cadence. But demanding *every* member cut the series at day 10, because the
// high-resolution member stops there, which would have drawn a 10-day chart on a
// page that says 15-day. Require nearly all, which keeps the full horizon.
const QUORUM = Math.ceil(members.length * 0.9);
const steps = ens.datetime
  .map((t, i) => ({ t, vals: members.map((m) => ens[m][i]).filter((v) => v !== "" && v != null) }))
  .filter((s) => s.vals.length >= QUORUM);

const forecast = steps.map(({ t, vals }) => {
  const s = [...vals].sort((a, b) => a - b);
  return { t, lo: quantile(s, 0), p25: quantile(s, 0.25), med: quantile(s, 0.5), p75: quantile(s, 0.75), hi: quantile(s, 1) };
});

// The retrospective's normal range for the same calendar window: exactly what
// the pipeline says stage 06 is for.
const retro = await get(`retrospectivedaily/${RIVER}?format=json`);
const series = retro[String(RIVER)] ?? retro[Object.keys(retro).find((k) => k !== "datetime" && k !== "metadata")];
const byDay = new Map();
retro.datetime.forEach((t, i) => {
  const v = series[i];
  if (v === "" || v == null) return;
  const key = t.slice(5, 10);
  (byDay.get(key) ?? byDay.set(key, []).get(key)).push(v);
});
const normal = forecast.map(({ t }) => {
  const s = (byDay.get(t.slice(5, 10)) ?? []).sort((a, b) => a - b);
  return s.length ? { t, p10: quantile(s, 0.1), p50: quantile(s, 0.5), p90: quantile(s, 0.9) } : null;
});

const years = new Set(retro.datetime.map((t) => t.slice(0, 4)));
writeFileSync(
  "src/data/pipeline-forecast.json",
  JSON.stringify(
    {
      river_id: RIVER,
      label: "Karnali River, Nepal",
      retrieved: new Date().toISOString().slice(0, 10),
      members: members.length,
      retrospective_years: years.size,
      retrospective_from: retro.datetime[0].slice(0, 4),
      forecast,
      normal: normal.filter(Boolean),
    },
    null,
    1,
  ) + "\n",
);
console.log(`wrote src/data/pipeline-forecast.json: ${forecast.length} steps, ${members.length} members, ${years.size} years of retrospective`);
