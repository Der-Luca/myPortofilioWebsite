const sum = (rows, field) => rows.reduce((total, row) => total + Number(row[field] || 0), 0);

function weightedPosition(rows) {
  const impressions = sum(rows, "impressions");
  if (!impressions) return 0;
  return rows.reduce((total, row) => total + row.position * row.impressions, 0) / impressions;
}

function totals(rows) {
  const clicks = sum(rows, "clicks");
  const impressions = sum(rows, "impressions");
  return {
    clicks,
    impressions,
    ctr: impressions ? clicks / impressions : 0,
    position: weightedPosition(rows),
  };
}

function previousMap(rows) {
  return new Map(rows.map((row) => [`${row.query}|${row.page}`, row]));
}

export function analyzeSnapshot(snapshot) {
  if (!snapshot) {
    return { current: totals([]), previous: totals([]), opportunities: [], topQueries: [], topPages: [] };
  }

  const currentRows = snapshot.current?.rows || [];
  const previousRows = snapshot.previous?.rows || [];
  const prior = previousMap(previousRows);
  const opportunities = [];

  for (const row of currentRows) {
    const old = prior.get(`${row.query}|${row.page}`);
    if (row.impressions >= 8 && row.position >= 4 && row.position <= 20) {
      opportunities.push({
        type: "quick-win",
        score: row.impressions * (21 - row.position),
        title: `Nähe zu Seite 1: „${row.query}“`,
        detail: `${row.impressions} Impressionen · Position ${row.position.toFixed(1)}`,
        action: "Seite inhaltlich vertiefen, Suchintention schärfen und passende interne Links ergänzen.",
        page: row.page,
      });
    }
    if (row.impressions >= 15 && row.position <= 10 && row.ctr < 0.025) {
      opportunities.push({
        type: "ctr",
        score: row.impressions * 8,
        title: `Niedrige Klickrate: „${row.query}“`,
        detail: `${row.impressions} Impressionen · ${(row.ctr * 100).toFixed(1)} % CTR`,
        action: "Title und Description konkreter auf Problem, Nutzen und Zielgruppe ausrichten.",
        page: row.page,
      });
    }
    if (old && old.impressions >= 8 && row.position - old.position >= 3) {
      opportunities.push({
        type: "decline",
        score: row.impressions * (row.position - old.position),
        title: `Ranking verloren: „${row.query}“`,
        detail: `Von ${old.position.toFixed(1)} auf ${row.position.toFixed(1)}`,
        action: "Seite, Konkurrenz und mögliche technische Änderungen prüfen.",
        page: row.page,
      });
    }
    if (!old && row.impressions >= 5) {
      opportunities.push({
        type: "new",
        score: row.impressions * 3,
        title: `Neue Suchanfrage: „${row.query}“`,
        detail: `${row.impressions} erste Impressionen · Position ${row.position.toFixed(1)}`,
        action: "Prüfen, ob die bestehende Seite die Anfrage vollständig beantwortet.",
        page: row.page,
      });
    }
  }

  const pageMap = new Map();
  for (const row of currentRows) {
    const page = pageMap.get(row.page) || { page: row.page, clicks: 0, impressions: 0 };
    page.clicks += row.clicks;
    page.impressions += row.impressions;
    pageMap.set(row.page, page);
  }

  return {
    current: snapshot.current?.totals || totals(currentRows),
    previous: snapshot.previous?.totals || totals(previousRows),
    opportunities: opportunities.sort((a, b) => b.score - a.score).slice(0, 20),
    topQueries: [...currentRows].sort((a, b) => b.impressions - a.impressions).slice(0, 30),
    topPages: [...pageMap.values()].sort((a, b) => b.impressions - a.impressions).slice(0, 20),
  };
}

export function analyzeEvents(events, days = 28) {
  const now = Date.now();
  const currentCutoff = now - days * 86400000;
  const previousCutoff = now - days * 2 * 86400000;
  const current = events.filter((event) => Date.parse(event.at) >= currentCutoff);
  const previous = events.filter((event) => {
    const timestamp = Date.parse(event.at);
    return timestamp >= previousCutoff && timestamp < currentCutoff;
  });

  const summarize = (items) => ({
    pageviews: items.filter((event) => event.event === "pageview").length,
    ctaClicks: items.filter((event) => event.event === "cta").length,
    visitors: new Set(items.map((event) => event.visitorId).filter(Boolean)).size,
  });

  const pages = new Map();
  for (const event of current) {
    const page = pages.get(event.path) || { path: event.path, pageviews: 0, ctaClicks: 0, visitorIds: new Set() };
    if (event.event === "cta") page.ctaClicks += 1;
    else page.pageviews += 1;
    if (event.visitorId) page.visitorIds.add(event.visitorId);
    pages.set(event.path, page);
  }

  return {
    current: summarize(current),
    previous: summarize(previous),
    pages: [...pages.values()].map(({ visitorIds, ...page }) => ({ ...page, visitors: visitorIds.size })).sort((a, b) => b.pageviews - a.pageviews),
    recent: [...current].sort((a, b) => Date.parse(b.at) - Date.parse(a.at)).slice(0, 30),
  };
}
