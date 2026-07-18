#!/usr/bin/env node
/**
 * Create a publication entry from a DOI using the open Crossref API.
 * Usage: node scripts/fetch-doi.mjs 10.3390/hydrology9070113 [topic ...]
 */
import { writeFile } from "node:fs/promises";

const CROSSREF = "https://api.crossref.org/works/";
const OUT_DIR = "src/content/publications";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

function toEntry(work, doi, topics) {
  return {
    title: work.title?.[0] ?? "Untitled",
    authors: (work.author ?? []).map((a) => `${a.family}, ${a.given}`.trim()),
    year: work.issued?.["date-parts"]?.[0]?.[0] ?? new Date().getFullYear(),
    journal: work["container-title"]?.[0],
    doi,
    url: `https://doi.org/${doi}`,
    topics,
  };
}

function toFrontmatter(entry) {
  const list = (xs) => `[${xs.map((x) => JSON.stringify(x)).join(", ")}]`;
  const lines = [
    `title: ${JSON.stringify(entry.title)}`,
    `authors: ${list(entry.authors)}`,
    `year: ${entry.year}`,
    entry.journal && `journal: ${JSON.stringify(entry.journal)}`,
    `doi: ${JSON.stringify(entry.doi)}`,
    `url: ${entry.url}`,
    `topics: ${list(entry.topics)}`,
  ].filter(Boolean);
  return `---\n${lines.join("\n")}\n---\n`;
}

async function main() {
  const [doi, ...topics] = process.argv.slice(2);
  if (!doi) {
    console.error("Usage: node scripts/fetch-doi.mjs <doi> [topic ...]");
    process.exit(1);
  }
  const response = await fetch(CROSSREF + encodeURIComponent(doi));
  if (!response.ok) {
    console.error(`Crossref lookup failed for ${doi} (${response.status})`);
    process.exit(1);
  }
  const { message } = await response.json();
  const entry = toEntry(message, doi, topics);
  const path = `${OUT_DIR}/${slugify(entry.title)}.md`;
  await writeFile(path, toFrontmatter(entry));
  console.log(`Wrote ${path}`);
}

main();
