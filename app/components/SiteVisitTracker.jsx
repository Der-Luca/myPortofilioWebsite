"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Cookie } from "lucide-react";

const CONSENT_COOKIE = "pc_consent";
const VISITOR_COOKIE = "pc_visitor_id";
const CONSENT_EVENT = "pc-consent-changed";
const SETTINGS_EVENT = "pc-open-consent";
const MAX_AGE = 60 * 60 * 24 * 180;

function readCookie(name) {
  const prefix = `${name}=`;
  const cookie = document.cookie.split("; ").find((item) => item.startsWith(prefix));
  return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : null;
}

function writeCookie(name, value, maxAge = MAX_AGE) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

function removeVisitorId() {
  writeCookie(VISITOR_COOKIE, "", 0);
  try {
    sessionStorage.removeItem("pc_session_id");
  } catch {}
}

function ensureTrackingIds() {
  let visitorId = readCookie(VISITOR_COOKIE);
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    writeCookie(VISITOR_COOKIE, visitorId);
  }

  let sessionId;
  try {
    sessionId = sessionStorage.getItem("pc_session_id");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem("pc_session_id", sessionId);
    }
  } catch {
    sessionId = crypto.randomUUID();
  }

  return { visitorId, sessionId };
}

function trackingSource(pathname) {
  let source = "";
  try {
    const requestedSource = new URLSearchParams(window.location.search).get("source") || "";
    if (/^[a-z0-9-]{2,60}$/.test(requestedSource)) {
      source = requestedSource;
      sessionStorage.setItem("pc_tracking_source", source);
      window.history.replaceState(window.history.state, "", pathname || "/");
    } else {
      source = sessionStorage.getItem("pc_tracking_source") || "";
    }
  } catch {}
  return source;
}

function currentConsent() {
  return readCookie(CONSENT_COOKIE) === "analytics" ? "analytics" : readCookie(CONSENT_COOKIE) === "essential" ? "essential" : null;
}

function CookieConsent() {
  const [choice, setChoice] = useState(undefined);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = currentConsent();
    setChoice(saved);
    setOpen(saved === null);

    const openSettings = () => {
      setOpen(true);
    };
    window.addEventListener(SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(SETTINGS_EVENT, openSettings);
  }, []);

  const save = (nextChoice) => {
    writeCookie(CONSENT_COOKIE, nextChoice);
    if (nextChoice !== "analytics") removeVisitorId();
    setChoice(nextChoice);
    setOpen(false);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: nextChoice }));
  };

  if (choice === undefined) return null;

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Cookie-Einstellungen öffnen"
        title="Cookie-Einstellungen"
        className="fixed bottom-4 left-4 z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/90 text-slate-300 shadow-lg shadow-black/30 backdrop-blur transition hover:border-blue-400/60 hover:text-blue-300"
      >
        <Cookie className="h-5 w-5" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] sm:right-auto sm:w-[390px]">
      <section
        role="dialog"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
        className="rounded-2xl border border-white/15 bg-slate-950/95 p-5 text-slate-200 shadow-2xl shadow-black/50 backdrop-blur-xl"
      >
        <div>
          <h2 id="cookie-title" className="text-lg font-bold text-white">Cookie-Einstellungen</h2>
          <p id="cookie-description" className="mt-2 text-sm leading-6 text-slate-400">
            Wir verwenden Cookies für anonymes Tracking. Damit sehen wir, welche Seiten besucht werden und ob jemand wiederkehrt.
          </p>
          <Link href="/datenschutz" className="mt-2 inline-block text-sm text-blue-300 underline decoration-blue-400/40 underline-offset-4 hover:text-blue-200">
            Mehr in der Datenschutzerklärung
          </Link>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <button type="button" onClick={() => save("essential")} className="min-h-11 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10">
              Ablehnen
            </button>
            <button type="button" onClick={() => save("analytics")} className="min-h-11 rounded-xl border border-blue-400 bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500">
              Akzeptieren
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function VisitTracking() {
  const pathname = usePathname();
  const [consent, setConsent] = useState(null);
  const previousPath = useRef("");
  const lastTrackedPath = useRef("");

  useEffect(() => {
    const updateConsent = () => setConsent(currentConsent());
    updateConsent();
    window.addEventListener(CONSENT_EVENT, updateConsent);
    return () => window.removeEventListener(CONSENT_EVENT, updateConsent);
  }, []);

  useEffect(() => {
    if (consent !== "analytics" || !pathname || lastTrackedPath.current === pathname) return;

    const ids = ensureTrackingIds();
    const source = trackingSource(pathname);
    let referrerHost = "direkt";
    if (!previousPath.current && document.referrer) {
      try {
        referrerHost = new URL(document.referrer).hostname || "direkt";
      } catch {
        referrerHost = "unbekannt";
      }
    }

    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "pageview",
        path: pathname,
        fromPath: previousPath.current,
        referrerHost,
        source,
        ...ids,
      }),
      keepalive: true,
    }).catch(() => {});

    previousPath.current = pathname;
    lastTrackedPath.current = pathname;
  }, [consent, pathname]);

  useEffect(() => {
    if (consent !== "analytics") return undefined;

    const trackCtaClick = (event) => {
      const target = event.target.closest?.("[data-track]");
      if (!target) return;
      fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "cta",
          label: target.dataset.track,
          path: window.location.pathname,
          fromPath: previousPath.current,
          referrerHost: "intern",
          source: trackingSource(window.location.pathname),
          ...ensureTrackingIds(),
        }),
        keepalive: true,
      }).catch(() => {});
    };

    document.addEventListener("click", trackCtaClick);
    return () => document.removeEventListener("click", trackCtaClick);
  }, [consent]);

  return null;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(SETTINGS_EVENT));
}

export default function SiteVisitTracker() {
  return <><VisitTracking /><CookieConsent /></>;
}
