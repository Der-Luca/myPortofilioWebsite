import { NextResponse } from "next/server";

globalThis.__contactRateLimit ||= {};

const clean = (value, maxLength) =>
  String(value || "").trim().slice(0, maxLength);

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 180);
  const phone = clean(body.phone, 80);
  const message = clean(body.message, 5000);
  const company = clean(body.company, 200);
  const elapsed = Number(body.t || 0);

  if (company || (elapsed && elapsed < 1500)) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2 || message.length < 10 || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { error: "Bitte prüfen Sie Ihre Angaben." },
      { status: 400 }
    );
  }

  if (/(https?:\/\/|www\.)/i.test(message)) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const lastRequest = globalThis.__contactRateLimit[ip];
  if (lastRequest && now - lastRequest < 2 * 60 * 1000) {
    return NextResponse.json({ ok: true });
  }
  globalThis.__contactRateLimit[ip] = now;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Kontaktweg ist momentan nicht verfügbar." },
      { status: 503 }
    );
  }

  const telegramMessage = [
    "📬 Neue Kontaktanfrage",
    "",
    `👤 ${name}`,
    `📧 ${email}`,
    `📞 ${phone || "—"}`,
    "",
    "💬",
    message,
  ].join("\n");

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          disable_web_page_preview: true,
        }),
      }
    );

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { error: "Nachricht konnte nicht zugestellt werden." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Nachricht konnte nicht zugestellt werden." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
