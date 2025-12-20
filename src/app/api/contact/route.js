import { NextResponse } from "next/server";

// simples In-Memory-Rate-Limit (reicht für Portfolio)
globalThis.__contactRateLimit ||= {};

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ ok: true });

  const {
  name = "",
  email = "",
  phone = "", 
  message = "",
  company = "",
  t = 0,
} = body;


    const msg = message.toString().trim();

    // 1) Honeypot → still ignorieren
    if (company) return NextResponse.json({ ok: true });

    // 2) Timing-Check (Bots schicken sofort)
    if (t && Number(t) < 1500) return NextResponse.json({ ok: true });

    // 3) Minimal-Validation
    if (msg.length < 10) {
      return NextResponse.json(
        { error: "Nachricht zu kurz" },
        { status: 400 }
      );
    }

    // 4) URL-Spam blocken
    if (/(https?:\/\/|www\.)/i.test(msg)) {
      return NextResponse.json({ ok: true });
    }

    // 5) IP-Rate-Limit (1 Anfrage / 2 Minuten)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ??
      req.headers.get("x-real-ip") ??
      "local";

    const now = Date.now();
    const WINDOW = 2 * 60 * 1000;

    const last = globalThis.__contactRateLimit[ip];
    if (last && now - last < WINDOW) {
      return NextResponse.json({ ok: true });
    }
    globalThis.__contactRateLimit[ip] = now;

    // 6) ENV prüfen
    const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Server nicht konfiguriert" },
        { status: 500 }
      );
    }

    // 7) Telegram senden
    const text =
  `📬 Neue Kontaktanfrage\n\n` +
  `👤 ${name || "—"}\n` +
  `📧 ${email || "—"}\n` +
  `📞 ${phone || "—"}\n\n` +   
  `💬\n${msg}`;


    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      }
    );

    if (!telegramRes.ok) {
      return NextResponse.json(
        { error: "Telegram Fehler" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
