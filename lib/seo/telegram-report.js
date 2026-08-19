export async function sendSeoTelegramReport(snapshot, analysis) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_SEO_CHAT_ID || process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const delta = (current, previous) => {
    if (!previous) return current ? "+100 %" : "0 %";
    const value = ((current - previous) / previous) * 100;
    return `${value >= 0 ? "+" : ""}${value.toFixed(0)} %`;
  };
  const lines = [
    "📈 SEO-Wochenbericht",
    `${snapshot.current.startDate} bis ${snapshot.current.endDate}`,
    "",
    `Impressionen: ${analysis.current.impressions} (${delta(analysis.current.impressions, analysis.previous.impressions)})`,
    `Klicks: ${analysis.current.clicks} (${delta(analysis.current.clicks, analysis.previous.clicks)})`,
    `CTR: ${(analysis.current.ctr * 100).toFixed(1)} %`,
    `Ø Position: ${analysis.current.position ? analysis.current.position.toFixed(1) : "—"}`,
  ];

  if (analysis.opportunities.length) {
    lines.push("", "🎯 Wichtigste Chancen");
    analysis.opportunities.slice(0, 5).forEach((item, index) => {
      lines.push(`${index + 1}. ${item.title}`, `   ${item.detail}`);
    });
  } else {
    lines.push("", "Noch keine belastbaren Optimierungschancen erkannt.");
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n").slice(0, 3900),
        disable_web_page_preview: true,
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
