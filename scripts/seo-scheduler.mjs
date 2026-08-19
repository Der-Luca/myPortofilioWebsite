const syncUrl = process.env.SEO_SYNC_URL || "http://app:3000/api/seo/sync";
const syncSecret = process.env.SEO_SYNC_SECRET || "";
const interval = 24 * 60 * 60 * 1000;

async function runSync() {
  if (!syncSecret) {
    console.error("SEO_SYNC_SECRET fehlt; täglicher SEO-Abruf wurde übersprungen.");
    return;
  }

  try {
    const response = await fetch(syncUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${syncSecret}` },
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(body.error || `HTTP ${response.status}`);
    }
    console.log(`SEO-Sync erfolgreich: ${body.snapshot}`);
  } catch (error) {
    console.error(`SEO-Sync fehlgeschlagen: ${error.message}`);
  }
}

setTimeout(async () => {
  await runSync();
  setInterval(runSync, interval);
}, 60_000);
