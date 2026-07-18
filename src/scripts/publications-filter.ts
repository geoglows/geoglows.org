/** Client-side search + topic filtering for the publications list. */
const search = document.querySelector<HTMLInputElement>("#pub-search");
const chips = Array.from(document.querySelectorAll<HTMLButtonElement>(".topic-chip"));
const rows = Array.from(document.querySelectorAll<HTMLElement>(".pub"));
const count = document.querySelector<HTMLElement>("#pub-count");
const empty = document.querySelector<HTMLElement>("#pub-empty");

let activeTopic = "all";

function matches(row: HTMLElement, query: string): boolean {
  const byTopic =
    activeTopic === "all" || (row.dataset.topics ?? "").split("|").includes(activeTopic);
  const byText = !query || (row.dataset.search ?? "").includes(query);
  return byTopic && byText;
}

function applyFilter(): void {
  const query = (search?.value ?? "").trim().toLowerCase();
  let shown = 0;
  for (const row of rows) {
    const visible = matches(row, query);
    row.hidden = !visible;
    if (visible) shown += 1;
  }
  if (count) count.textContent = `${shown} of ${rows.length}`;
  if (empty) empty.hidden = shown !== 0;
}

function selectTopic(chip: HTMLButtonElement): void {
  activeTopic = chip.dataset.topic ?? "all";
  chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
  applyFilter();
}

search?.addEventListener("input", applyFilter);
chips.forEach((chip) => chip.addEventListener("click", () => selectTopic(chip)));
