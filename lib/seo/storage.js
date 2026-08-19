import { appendFile, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const dataDirectory = process.env.SEO_DATA_DIR || path.join(process.cwd(), "data");
const snapshotPath = path.join(dataDirectory, "seo-history.json");
const eventPath = path.join(dataDirectory, "seo-events.ndjson");

const emptyStore = () => ({
  version: 1,
  updatedAt: null,
  snapshots: [],
  changes: [],
});

async function ensureDirectory() {
  await mkdir(dataDirectory, { recursive: true });
}

export async function readSeoStore() {
  try {
    const parsed = JSON.parse(await readFile(snapshotPath, "utf8"));
    return {
      ...emptyStore(),
      ...parsed,
      snapshots: Array.isArray(parsed.snapshots) ? parsed.snapshots : [],
      changes: Array.isArray(parsed.changes) ? parsed.changes : [],
    };
  } catch (error) {
    if (error.code === "ENOENT") return emptyStore();
    throw error;
  }
}

export async function writeSeoStore(store) {
  await ensureDirectory();
  const tempPath = `${snapshotPath}.tmp`;
  await writeFile(tempPath, JSON.stringify(store, null, 2), "utf8");
  await rename(tempPath, snapshotPath);
}

export async function saveSearchSnapshot(snapshot) {
  const store = await readSeoStore();
  const snapshots = [snapshot, ...store.snapshots]
    .filter((item, index, all) => all.findIndex((entry) => entry.id === item.id) === index)
    .slice(0, 180);

  await writeSeoStore({
    ...store,
    updatedAt: new Date().toISOString(),
    snapshots,
  });
  await pruneSeoEvents(180);

  return snapshots[0];
}

export async function addSeoChange(change) {
  const store = await readSeoStore();
  const entry = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    page: String(change.page || "/").slice(0, 240),
    note: String(change.note || "").trim().slice(0, 1000),
  };

  await writeSeoStore({
    ...store,
    updatedAt: new Date().toISOString(),
    changes: [entry, ...store.changes].slice(0, 200),
  });

  return entry;
}

export async function appendSeoEvent(event) {
  await ensureDirectory();
  const entry = {
    at: new Date().toISOString(),
    event: event.event === "cta" ? "cta" : "pageview",
    path: String(event.path || "/").slice(0, 240),
    fromPath: String(event.fromPath || "").slice(0, 240),
    label: String(event.label || "").slice(0, 100),
    referrerHost: String(event.referrerHost || "direkt").slice(0, 160),
    visitorId: String(event.visitorId || "").slice(0, 64),
    sessionId: String(event.sessionId || "").slice(0, 64),
    source: String(event.source || "").slice(0, 60),
  };
  await appendFile(eventPath, `${JSON.stringify(entry)}\n`, "utf8");
}

export async function readSeoEvents(days = 90) {
  try {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    const contents = await readFile(eventPath, "utf8");
    return contents
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      })
      .filter((event) => event && Date.parse(event.at) >= cutoff);
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

export async function pruneSeoEvents(days = 180) {
  const events = await readSeoEvents(days);
  await ensureDirectory();
  const tempPath = `${eventPath}.tmp`;
  await writeFile(tempPath, `${events.map((event) => JSON.stringify(event)).join("\n")}\n`, "utf8");
  await rename(tempPath, eventPath);
}
