export const blogPosts = [
  {
    slug: "nextcloud-teams-alternative",
    title: "Nextcloud als echte Microsoft Teams Alternative – Meine praktischen Erfahrungen",
    date: "2026-03-02",
    description: "Warum ich Nextcloud statt Microsoft Teams nutze – mit Nextcloud Talk für Kundengespräche, OnlyOffice für Echtzeit-Kollaboration und voller Kontrolle über alle Daten. Ein Praxisbericht.",
    author: "Luca Plessing",
    authorRole: "IT-Consultant & KI-Spezialist",
    readTime: "7 Min. Lesezeit",
    tags: ["Nextcloud", "Digital Sovereignty", "Collaboration", "EU Software"],
    featured: true,
    content: [
      {
        type: "hero",
        title: "Der Umstieg, der alles veränderte",
        content: "Seit über einem Jahr betreibe ich Nextcloud selbst – nicht als Experiment, sondern als zentrale Produktivitätsplattform für meine IT-Beratung. Das Ergebnis? Ich habe Teams komplett abgelöst, Google Drive ersetzt und dabei meine Datenhoheit zurückgewonnen."
      },
      {
        type: "section",
        title: "Warum Nextcloud? Mein Werdegang",
        content: "Es begann mit einer einfachen Frage: Warum liegen meine Kundendaten auf US-Servern, wenn ich sie auch selbst hosten kann? Nach dem Lesen über den Cloud Act und DSGVO-Compliance habe ich beschlossen: Ich will digitale Souveränität.",
        quote: {
          text: "Nextcloud ist nicht nur eine Software – es ist eine Philosophie. Die Kontrolle über meine Daten liegt wieder bei mir, nicht bei einem Konzern in Redmond.",
          source: "Meine Motivation für den Umstieg"
        }
      },
      {
        type: "section",
        title: "Nextcloud Talk: Video-Konferenzen ohne Grenzen",
        content: "Das wichtigste Feature für mich: Nextcloud Talk. Ich nutze es täglich für Kundengespräche, Team-Meetings und sogar Workshops. Die Qualität ist vergleichbar mit Teams oder Zoom – aber meine Gespräche bleiben auf meinem Server.",
        subsections: [
          {
            title: "Was mich überzeugt hat:",
            items: [
              "Ende-zu-Ende-Verschlüsselung für sensible Gespräche",
              "Keine Teilnehmerbegrenzung bei Selbst-Hosting",
              "Bildschirmfreigabe in hoher Qualität",
              "Integration in den Kalender für Ein-Klick-Meetings",
              "Keine Datenweitergabe an Dritte"
            ]
          },
          {
            title: "Praxistipp für Kundengespräche:",
            items: [
              "Erstelle für jeden Kunden einen separaten Talk-Raum",
              "Nutze die Lobby-Funktion für kontrollierten Zutritt",
              "Aktiviere Recording für wichtige Absprachen",
              "Verbinde Talk mit Files für direkten Dokumentenaustausch"
            ]
          }
        ]
      },
      {
        type: "section",
        title: "OnlyOffice & Collabora: Echte Zusammenarbeit",
        content: "Hier wird es spannend: Nextcloud allein ist ein großartiger Dateispeicher. Aber mit OnlyOffice oder Collabora Online wird es zu einer vollwertigen Office-Suite. Ich kann Dokumente live mit Kunden bearbeiten – ohne das System zu verlassen.",
        table: {
          headers: ["Feature", "Nextcloud + OnlyOffice", "Microsoft 365"],
          rows: [
            ["Echtzeit-Kollaboration", "✅ Ja", "✅ Ja"],
            ["DSGVO-konform", "✅ EU-Server", "❌ US-basiert"],
            ["Selbst-Hosting", "✅ Möglich", "❌ Nicht möglich"],
            ["Kosten", "💰 Ab 0 €", "💰💰💰 Ab ~10 €/User/Monat"],
            ["Integration mit Talk", "✅ Nativ", "❌ Getrennte Apps"]
          ]
        },
        highlight: "Die größte Überraschung: Meine Kunden merken keinen Unterschied zur Bearbeitung in Word Online – außer dass alles schneller lädt."
      },
      {
        type: "section",
        title: "Praktischer Workflow: Ein typischer Kundentag",
        content: "Lass mich einen realen Tag beschreiben, damit du siehst, wie Nextcloud im Alltag funktioniert:",
        steps: [
          { num: "1", title: "Morgens: Kalender-Check", desc: "Alle Termine synchronisiert mit meinem Phone – Dank CalDAV nativ in iOS/Android integriert" },
          { num: "2", title: "09:00 Uhr: Video-Call", desc: "Kundengespräch über Nextcloud Talk – Bildschirmfreigabe der Projektpläne" },
          { num: "3", title: "10:30 Uhr: Dokumente", desc: "Gemeinsames Bearbeiten des Angebots in OnlyOffice – Kunde sieht alle Änderungen live" },
          { num: "4", title: "12:00 Uhr: File-Sharing", desc: "Sicherer Link für große CAD-Dateien – kein WeTransfer nötig" },
          { num: "5", title: "15:00 Uhr: Chat", desc: "Schnelle Absprachen mit dem Kunden über Talk – direkt im Browser, ohne extra App" }
        ]
      },
      {
        type: "warning",
        title: "Aber Achtung: Selbst-Hosting ist Arbeit",
        content: "Ich will nicht verschweigen: Nextcloud selbst zu hosten erfordert technisches Know-how. Updates müssen gemacht werden, Backups eingerichtet, Sicherheit geprüft. Das ist der Preis für Souveränität."
      },
      {
        type: "section",
        title: "Hosting-Optionen im Vergleich",
        content: "Nicht jeder will selbst hosten. Zum Glück gibt es Alternativen:",
        alternatives: [
          { category: "Selbst-Hosting (VPS)", tools: "Hetzner, IONOS – ab 5 €/Monat, volle Kontrolle" },
          { category: "Managed Nextcloud", tools: "hetzner.com/nextcloud – ab 5 €/Monat, gewartet" },
          { category: "Enterprise", tools: "Nextcloud GmbH – mit Support & SLA" },
          { category: "On-Premise", tools: "Eigenes Rechenzentrum – für größere Unternehmen" }
        ],
        note: "Ich empfehl' Managed-Hosting für alle, die keine Admin-Erfahrung haben. Der Preis ist immer noch ein Bruchteil von Microsoft 365."
      },
      {
        type: "checklist",
        title: "Checkliste: Ist Nextcloud für Sie geeignet?",
        items: [
          "Sie wollen Datenhoheit und DSGVO-Konformität",
          "Sie nutzen vor allem Standard-Office-Funktionen",
          "Sie haben technisches Know-how oder Budget für Managed Hosting",
          "Sie wollen unabhängig von US-Konzernen sein",
          "Sie können auf erweiterte Teams-Features verzichten",
          "Sie schätzen offene Standards und Interoperabilität"
        ]
      },
      {
        type: "comparison",
        title: "Kostenvergleich: 10 User / Monat",
        before: { label: "Microsoft 365 Business Basic", value: "~120 € / Monat", status: "bad" },
        after: { label: "Nextcloud Managed (Hetzner)", value: "~50 € / Monat", status: "good" }
      },
      {
        type: "cta",
        title: "Möchten Sie Nextcloud ausprobieren?",
        content: "Ich helfe bei Einrichtung, Migration und Optimierung. Ob Selbst-Hosting oder Managed – wir finden die passende Lösung für Ihre Anforderungen.",
        steps: [
          { num: "1", title: "Beratung", desc: "Welche Features brauchen Sie wirklich?" },
          { num: "2", title: "Setup", desc: "Installation & Konfiguration" },
          { num: "3", title: "Migration", desc: "Daten aus Teams/Google übertragen" },
          { num: "4", title: "Schulung", desc: "Ihr Team optimal einweisen" }
        ]
      },
      {
        type: "conclusion",
        title: "Fazit: Meine klare Empfehlung",
        content: "Nextcloud hat meine Art zu arbeiten verändert – zum Besseren. Ich habe die Kontrolle über meine Daten, spare Geld und merke kaum Einschränkungen im Alltag. Für Kunden, die Wert auf Datenschutz legen, ist es oft der ausschlaggebende Punkt, mit mir zusammenzuarbeiten.",
        signature: "Fragen zu Nextcloud? Schreiben Sie mir!"
      }
    ]
  },
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
