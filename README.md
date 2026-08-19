# Plessing Consulting

Website für CRM-Optimierung, Prozessautomatisierung, Systemintegration und individuelle Software-Erweiterungen.

## Telegram-Benachrichtigungen

Kontaktanfragen und datensparsame Hinweise auf neue Seitenaufrufe werden direkt über die Telegram Bot API verschickt. Dafür werden folgende Umgebungsvariablen benötigt:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- optional `TELEGRAM_VISIT_CHAT_ID`, wenn Besuchshinweise in einem separaten Chat landen sollen

Besuchs- und CTA-Hinweise sind nur in der Produktionsumgebung aktiv. Sie enthalten den Seitenpfad, gegebenenfalls die Bezeichnung der Kontakt-Schaltfläche, den Hostnamen der verweisenden Website und den Zeitpunkt, aber keine IP-Adresse oder Browserkennung.

## SEO Cockpit

Das geschützte Cockpit unter `/seo-cockpit` kombiniert anonyme Website-Ereignisse mit Daten aus der Google Search Console. Es zeigt Impressionen, Klicks, CTR, Positionen, Seiten- und CTA-Nutzung sowie automatisch erkannte SEO-Chancen. Änderungen an Seiten können direkt im Cockpit protokolliert werden.

Für den Betrieb werden zusätzlich die Werte aus `.env.example` benötigt:

- `SEO_DASHBOARD_USER` und `SEO_DASHBOARD_PASSWORD` schützen das Cockpit per HTTP Basic Auth.
- `SEO_SYNC_SECRET` schützt den automatischen täglichen Abruf.
- `GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL` ist die E-Mail eines Google-Service-Accounts.
- `GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY_BASE64` enthält dessen privaten Schlüssel als Base64-Wert.
- `GOOGLE_SEARCH_CONSOLE_PROPERTY` ist normalerweise `sc-domain:plessing-consulting.com`.

Die Service-Account-E-Mail muss in Google Search Console als Nutzer mit Leserechten für die Property eingetragen werden. Der Scheduler ruft täglich neue Daten ab; montags wird zusätzlich ein Telegram-Wochenbericht versendet.

Die SEO-Daten werden im Docker-Volume `seo-data` gespeichert. Ein Deployment erfolgt mit:

```bash
docker compose up -d --build
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
