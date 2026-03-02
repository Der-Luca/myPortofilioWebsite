export const blogPosts = [
  {
    slug: "openclaw-kosteneffizient-betreiben",
    title: "OpenClaw kosteneffizient betreiben – Modellkosten intelligent optimieren",
    date: "2026-02-13",
    description: "Wie Sie OpenClaw so konfigurieren, dass Sie maximale Leistung bei minimalen API-Kosten erhalten. Kontextgröße, Modellwahl, Fallback-Strategien und Best Practices für ein professionelles Setup.",
    author: "Luca Plessing",
    authorRole: "IT-Consultant & KI-Spezialist",
    readTime: "8 Min. Lesezeit",
    tags: ["KI", "OpenClaw", "Cost-Optimization", "Automation"],
    featured: true,
    content: [
      {
        type: "hero",
        title: "Der Anfang: Das teure Abenteuer",
        content: "Ich nutze OpenClaw jetzt seit ungefähr einer Woche. Am Anfang habe ich einfach meinen normalen Claude Code / Cloud-Token verwendet. Das lief technisch super – aber das Ergebnis war ein stolzer Preis von ~20–30 € im Monat."
      },
      {
        type: "warning",
        title: "Das Problem",
        content: "Wenn man standardmäßig Opus als Primary-Modell laufen lässt (was viele machen, weil 'bestes Modell'), dann wird OpenClaw sehr schnell unbequem im Preis."
      },
      {
        type: "section",
        title: "1. Heartbeat unbedingt günstiger konfigurieren",
        content: "Standardmäßig läuft der Heartbeat oft viel zu aggressiv. Heartbeat braucht KEINE Intelligenz – der soll nur prüfen, ob der Agent noch lebt.",
        points: [
          { icon: "❌", text: "Opus für Heartbeat: Kompletter Overkill" },
          { icon: "✅", text: "Haiku für Heartbeat: Perfekt ausreichend" }
        ],
        highlight: "Heartbeat-Modell: Haiku | Intervall: 60 Minuten (statt 30)"
      },
      {
        type: "section",
        title: "2. Kontext aktiv beggrenzen",
        content: "Mein größtes Learning: OpenClaw schickt sonst bei längeren Sessions absurd viele Tokens mit. Es ist nicht die Modellwahl, sondern die Kontextgröße, die teuer wird.",
        quote: {
          text: "Nimm nicht automatisch den gesamten bisherigen Kontext mit. Verwende nur relevanten Kontext und lade zusätzlichen Kontext nur auf Nachfrage.",
          source: "System-Prompt Optimierung"
        }
      },
      {
        type: "section",
        title: "3. Modell-Hierarchie richtig wählen",
        content: "Ich fahre aktuell diese Strategie: Haiku → Sonnet → Opus",
        table: {
          headers: ["Modell", "Use Case", "Kosten"],
          rows: [
            ["Haiku", "Standard-Arbeitspferd", "💰"],
            ["Sonnet", "Mittlere Komplexität", "💰💰"],
            ["Opus", "Wirklich komplexe Tasks", "💰💰💰"]
          ]
        },
        subsections: [
          {
            title: "Wann Haiku völlig ausreicht:",
            items: ["Kleine Code-Änderungen", "Dateioperationen", "Git-Management", "Einfache Refactorings", "Routine-Automatisierung", "Heartbeat-Checks"]
          },
          {
            title: "Wann du Opus brauchst:",
            items: ["Komplexe Architektur-Entscheidungen", "Multi-File-Refactorings mit Abhängigkeiten", "Debugging schwieriger Bugs", "Strategische Code-Reviews"]
          }
        ]
      },
      {
        type: "section",
        title: "4. Cloud Code clever weiterverwenden",
        content: "Was ich weiterhin mache: Claude Code lokal installieren und meinem OpenClaw-Agent sagen: 'Benutze Cloud Code zum Coden.' Rechenintensive Coding-Aufgaben laufen über Claude Code – OpenClaw bleibt der Orchestrator.",
        result: "Massiv gesparte API-Kosten • Bessere Spezialisierung • Schnellere Code-Generierung"
      },
      {
        type: "comparison",
        title: "Vorher vs. Nachher",
        before: { label: "Vorher (Opus Default)", value: "~100–150 € / Monat", status: "bad" },
        after: { label: "Nachher (Haiku + Smart Escalation)", value: "~20–30 € / Monat", status: "good" }
      },
      {
        type: "checklist",
        title: "Quick-Start Checklist",
        items: [
          "Heartbeat auf Haiku umstellen",
          "Heartbeat-Intervall auf 60 min erhöhen",
          "System-Prompt mit Kontext-Begrenzung ergänzen",
          "Standard-Modell auf Haiku setzen",
          "Opus nur für komplexe Tasks reservieren",
          "Claude Code lokal für intensive Coding-Tasks nutzen"
        ]
      },
      {
        type: "conclusion",
        title: "Fazit",
        content: "OpenClaw ist brutal stark. Aber wenn man einfach Opus als Default laufen lässt, wird es teuer. Die wichtigste Erkenntnis: OpenClaw ist kein Autopilot. Man muss ihn konfigurieren wie ein System – nicht wie ein Spielzeug.",
        signature: "Happy Optimizing! 🚀"
      }
    ]
  },
  {
    slug: "us-software-eu-alternativen",
    title: "Warum immer mehr Unternehmen von US-Software auf europäische Alternativen wechseln",
    date: "2026-02-12",
    description: "Digitale Souveränität, DSGVO-Konformität und Unabhängigkeit vom Cloud Act – warum der Wechsel zu EU-Software für Unternehmen immer wichtiger wird und wie Sie die Migration erfolgreich meistern.",
    author: "Luca Plessing",
    authorRole: "IT-Consultant & KI-Spezialist",
    readTime: "10 Min. Lesezeit",
    tags: ["Digital Sovereignty", "DSGVO", "EU Software", "Cloud Act"],
    featured: false,
    content: [
      {
        type: "hero",
        title: "Die Abhängigkeit von US-Software wird zum Risiko",
        content: "Jahrelang war es für europäische Unternehmen selbstverständlich: Microsoft 365 für die Büroarbeit, Google Cloud für die Infrastruktur, Salesforce für das CRM. Doch die Zeiten ändern sich."
      },
      {
        type: "section",
        title: "Der Cloud Act – ein unterschätztes Risiko",
        content: "Das größte rechtliche Problem heißt Cloud Act. Dieses US-Gesetz erlaubt es amerikanischen Behörden, auf Daten zuzugreifen, die von US-Unternehmen gespeichert werden – egal, wo auf der Welt sich die Server befinden.",
        highlight: "Selbst wenn Ihre Daten in Frankfurt liegen, können US-Behörden theoretisch Zugriff verlangen.",
        warning: "Das EU-US Data Privacy Framework wurde bereits kritisch hinterfragt. Wer seine Compliance-Strategie auf wackeligem Fundament aufbaut, geht ein unnötiges Risiko ein."
      },
      {
        type: "section",
        title: "DSGVO-Konformität – mehr als nur ein Häkchen",
        content: "Europäische Softwareanbieter sind von Grund auf darauf ausgelegt, DSGVO-Anforderungen zu erfüllen. Sie unterliegen europäischem Recht, speichern Daten in der EU und müssen keine Hintertüren für ausländische Geheimdienste offenhalten.",
        keyPoint: "Bei US-Anbietern bleibt die rechtliche Jurisdiktion amerikanisch – ein fundamentaler Unterschied."
      },
      {
        type: "section",
        title: "Digitale Souveränität – das Gebot der Stunde",
        content: "Digitale Souveränität ist längst kein abstraktes Konzept mehr. Initiativen wie Gaia-X, der EU Data Act und milliardenschwere Förderprogramme zeigen: Europa meint es ernst.",
        pillars: [
          { title: "Kontrolle", desc: "Volle Kontrolle über eigene Daten und Prozesse" },
          { title: "Unabhängigkeit", desc: "Unabhängigkeit von einzelnen Anbietern und geopolitischen Entwicklungen" },
          { title: "Transparenz", desc: "Klarheit darüber, wo Daten liegen und wer darauf zugreifen kann" }
        ]
      },
      {
        type: "section",
        title: "Europäische Alternativen – besser als ihr Ruf",
        content: "Viele Entscheider gehen davon aus, dass europäische Software nicht mithalten kann. Das stimmt so nicht mehr. In vielen Bereichen gibt es hervorragende EU-Alternativen.",
        alternatives: [
          { category: "Kommunikation", tools: "Nextcloud, Open-Xchange, Stackfield, Rocket.Chat" },
          { category: "Cloud", tools: "IONOS, Hetzner, OVHcloud, Open Telekom Cloud" },
          { category: "CRM", tools: "SAP, Teamleader, CentralStationCRM" },
          { category: "Projektmanagement", tools: "OpenProject, Hive, Stackfield" },
          { category: "E-Mail", tools: "Tutanota, Mailbox.org, Open-Xchange" },
          { category: "Analytics", tools: "Matomo, Plausible" }
        ],
        note: "Diese Tools sind nicht nur DSGVO-konform, sondern oft auch flexibler, günstiger und besser an europäische Geschäftsprozesse angepasst."
      },
      {
        type: "section",
        title: "Die Herausforderung: Migration ohne Betriebsunterbrechung",
        content: "Der Wille zum Wechsel ist da. Die Herausforderung liegt in der Umsetzung. Eine Software-Migration betrifft jeden Mitarbeiter, jeden Prozess, jeden Workflow.",
        challenges: [
          "Datenmigration muss sauber und vollständig erfolgen",
          "Bestehende Integrationen müssen neu aufgesetzt werden",
          "Mitarbeiter brauchen Schulung",
          "Oft ist ein Parallelbetrieb nötig",
          "Wechsel muss DSGVO-konform dokumentiert werden"
        ]
      },
      {
        type: "cta",
        title: "Wie Plessing Consulting Sie unterstützt",
        content: "Wir begleiten Unternehmen ganzheitlich bei der Migration. Von der Bestandsaufnahme über die Strategie bis zur technischen Migration mit KI und Automatisierung.",
        steps: [
          { num: "1", title: "Bestandsaufnahme", desc: "Welche Tools nutzen Sie? Wo liegen die Risiken?" },
          { num: "2", title: "Strategie", desc: "Maßgeschneidert und pragmatisch" },
          { num: "3", title: "Migration", desc: "Datenmigration, Einrichtung, Integrationen" },
          { num: "4", title: "Optimierung", desc: "KI und Automatisierung für effizientere Workflows" },
          { num: "5", title: "Support", desc: "Schulung und begleitender Support" }
        ]
      },
      {
        type: "conclusion",
        title: "Fazit",
        content: "Die Frage ist nicht mehr OB, sondern WANN Ihr Unternehmen den Wechsel angeht. Wer jetzt handelt, hat die Wahl. Wer wartet, reagiert unter Druck.",
        signature: "Kontaktieren Sie uns für ein unverbindliches Erstgespräch."
      }
    ]
  }
];

export function getAllPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug) || null;
}

export function getFeaturedPost() {
  return blogPosts.find(post => post.featured) || blogPosts[0];
}

export function getPostsByTag(tag) {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getAllTags() {
  const tags = new Set();
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags);
}
