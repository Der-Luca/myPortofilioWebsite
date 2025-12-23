import { NextResponse } from "next/server";

// simples In-Memory-Rate-Limit (reicht fürs Portfolio)
globalThis.__contactRateLimit ||= {};

export async function POST(req) {
  console.log("📥 /api/contact POST called");

  try {
    let body = null;

    try {
      body = await req.json();
    } catch (err) {
      console.error("❌ JSON parse error", err);
      return NextResponse.json(
        { error: "Ungültiges JSON" },
        { status: 400 }
      );
    }

    console.log("📦 Request Body:", body);

    if (!body) {
      console.warn("⚠️ Empty body");
      return NextResponse.json({ ok: true });
    }

    const {
      name = "",
      email = "",
      phone = "",
      message = "",
      company = "",
      t = 0,
    } = body;

    const msg = message?.toString().trim() || "";

    // 1) Honeypot
    if (company) {
      console.warn("🪤 Honeypot triggered");
      return NextResponse.json({ ok: true });
    }

    // 2) Timing-Check
    if (t && Number(t) < 1500) {
      console.warn("⏱️ Too fast (bot suspected)", t);
      return NextResponse.json({ ok: true });
    }

    // 3) Validation
    if (msg.length < 10) {
      console.warn("✏️ Message too short");
      return NextResponse.json(
        { error: "Nachricht zu kurz" },
        { status: 400 }
      );
    }

    // 4) URL-Spam
    if (/(https?:\/\/|www\.)/i.test(msg)) {
      console.warn("🔗 URL detected, ignoring");
      return NextResponse.json({ ok: true });
    }

    // 5) IP Rate Limit
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ??
      req.headers.get("x-real-ip") ??
      "unknown";

    const now = Date.now();
    const WINDOW = 2 * 60 * 1000;

    const last = globalThis.__contactRateLimit[ip];
    if (last && now - last < WINDOW) {
      console.warn("🚦 Rate limit hit for IP:", ip);
      return NextResponse.json({ ok: true });
    }

    globalThis.__contactRateLimit[ip] = now;

    // 6) ENV prüfen
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log("🔐 ENV check", {
      tokenExists: !!token,
      chatIdExists: !!chatId,
    });

    if (!token || !chatId) {
      console.error("❌ Missing ENV variables");
      return NextResponse.json(
        { error: "Server nicht konfiguriert (ENV fehlt)" },
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

    console.log("📨 Sending to Telegram…");

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
      const errorText = await telegramRes.text();
      console.error("❌ Telegram API error:", errorText);
      return NextResponse.json(
        { error: "Telegram Fehler" },
        { status: 500 }
      );
    }

    console.log("✅ Message sent successfully");
    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("🔥 Unexpected error:", err);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
