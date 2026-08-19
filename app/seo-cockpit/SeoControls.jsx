"use client";

import { useState } from "react";

export default function SeoControls({ defaultPage = "/" }) {
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function sync() {
    setSyncing(true);
    setMessage("");
    try {
      const response = await fetch("/api/seo/sync", { method: "POST" });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Sync fehlgeschlagen");
      setMessage("Search-Console-Daten wurden aktualisiert.");
      window.location.reload();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSyncing(false);
    }
  }

  async function saveChange(event) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/seo/changes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page: form.get("page"), note: form.get("note") }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Speichern fehlgeschlagen");
      event.currentTarget.reset();
      setMessage("Änderung wurde im SEO-Protokoll gespeichert.");
      window.location.reload();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[auto_1fr]">
      <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">Daten aktualisieren</p>
        <button onClick={sync} disabled={syncing} className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500 disabled:cursor-wait disabled:opacity-60">
          {syncing ? "Wird abgerufen …" : "Search Console jetzt abrufen"}
        </button>
      </div>
      <form onSubmit={saveChange} className="grid gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-5 md:grid-cols-[180px_1fr_auto] md:items-end">
        <label className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">Seite
          <input name="page" defaultValue={defaultPage} className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-blue-400" />
        </label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">Was wurde geändert?
          <input name="note" required placeholder="z. B. Title auf konkrete Suchintention angepasst" className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2.5 text-sm font-normal normal-case tracking-normal text-white outline-none focus:border-blue-400" />
        </label>
        <button disabled={saving} className="rounded-xl border border-white/15 px-5 py-3 text-sm font-bold text-white hover:bg-white/5 disabled:opacity-60">{saving ? "Speichert …" : "Änderung protokollieren"}</button>
      </form>
      {message && <p className="text-sm text-cyan-300 xl:col-span-2">{message}</p>}
    </div>
  );
}
