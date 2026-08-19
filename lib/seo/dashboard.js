import { analyzeEvents, analyzeSnapshot } from "./analysis";
import { getMissingSearchConsoleConfig } from "./search-console";
import { readSeoEvents, readSeoStore } from "./storage";

export async function getSeoDashboardData() {
  const [store, events] = await Promise.all([readSeoStore(), readSeoEvents(90)]);
  const snapshot = store.snapshots[0] || null;
  return {
    configured: getMissingSearchConsoleConfig().length === 0,
    missingConfig: getMissingSearchConsoleConfig(),
    updatedAt: store.updatedAt,
    snapshot,
    search: analyzeSnapshot(snapshot),
    traffic: analyzeEvents(events),
    changes: store.changes.slice(0, 20),
  };
}
