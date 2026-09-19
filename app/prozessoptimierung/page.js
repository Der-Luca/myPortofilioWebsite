import ServiceLandingPage from "../components/marketing/ServiceLandingPage";

export const metadata = {
  title: "Prozessoptimierung für Unternehmen im DACH-Raum",
  description: "Geschäftsprozesse analysieren, Reibungsverluste beseitigen und bestehende Systeme sinnvoll einbinden – von der Bestandsaufnahme bis zur Umsetzung.",
  alternates: { canonical: "https://plessing-consulting.com/prozessoptimierung" },
  openGraph: {
    title: "Prozessoptimierung, die im Arbeitsalltag ankommt",
    description: "Abläufe über Teams und Systeme hinweg analysieren, verbessern und messbar umsetzen.",
    url: "https://plessing-consulting.com/prozessoptimierung",
    type: "website",
  },
};

const faqs = [
  { question: "Was bedeutet Prozessoptimierung konkret?", answer: "Prozessoptimierung untersucht einen wiederkehrenden Geschäftsablauf vom Auslöser bis zum Ergebnis. Unnötige Schritte, unklare Übergaben, Wartezeiten und Informationsverluste werden sichtbar gemacht und gezielt verbessert." },
  { question: "Muss dafür neue Software eingeführt werden?", answer: "Nein. Häufig lassen sich Abläufe bereits durch klarere Zuständigkeiten, eine bessere Nutzung vorhandener Systeme oder kleine gezielte Verbindungen verbessern. Neue Software ist nur dann sinnvoll, wenn sie einen nachweisbaren Engpass löst." },
  { question: "Wie beginnt ein Projekt?", answer: "Am Anfang steht ein konkreter Ablauf, der heute zu viel Zeit kostet, Fehler verursacht oder immer wieder Rückfragen auslöst. Dieser Ablauf wird gemeinsam mit den beteiligten Personen aufgenommen und bewertet." },
  { question: "Wie wird der Erfolg gemessen?", answer: "Je nach Prozess werden vorab wenige verständliche Kennzahlen festgelegt, etwa Durchlaufzeit, manueller Aufwand, Fehler, Rückfragen oder liegengebliebene Vorgänge. Nach der Umsetzung werden dieselben Werte erneut betrachtet." },
  { question: "Für welche Unternehmen ist das geeignet?", answer: "Besonders sinnvoll ist die Zusammenarbeit für mittelständische und wachsende Unternehmen im DACH-Raum, deren Abläufe über mehrere Personen, Abteilungen oder Softwarelösungen laufen." },
];

export default function ProzessoptimierungPage() {
  return <ServiceLandingPage
    path="/prozessoptimierung"
    eyebrow="Prozessoptimierung"
    title="Damit Abläufe über Teams und Systeme hinweg funktionieren."
    intro="Ich analysiere und verbessere wiederkehrende Geschäftsabläufe, bei denen Informationen verloren gehen, Arbeit liegen bleibt oder zu viel Abstimmung notwendig ist. Der Fokus liegt auf dem tatsächlichen Arbeitsalltag – nicht auf einer vorab ausgewählten Technologie."
    promise="Das Ziel ist ein klarer, verlässlicher Ablauf, der im Unternehmen verstanden, genutzt und anhand sinnvoller Kennzahlen bewertet werden kann."
    problems={[
      "Ein Vorgang wechselt mehrfach zwischen Personen oder Abteilungen, ohne dass jederzeit klar ist, wer als Nächstes verantwortlich ist.",
      "Informationen sind vorhanden, müssen aber für Entscheidungen immer wieder aus verschiedenen Quellen zusammengesucht werden.",
      "Einzelne Mitarbeitende halten einen wichtigen Ablauf durch persönliches Wissen zusammen.",
      "Mehr Aufträge oder Kunden führen fast automatisch zu mehr Abstimmung, Rückfragen und operativem Aufwand.",
    ]}
    outcomes={[
      "Klare Auslöser, Verantwortlichkeiten und Entscheidungspunkte für den betrachteten Prozess.",
      "Weniger Rückfragen und Suchaufwand, weil relevante Informationen zur richtigen Zeit verfügbar sind.",
      "Ein realistischer Soll-Ablauf, der Ausnahmen berücksichtigt und nicht nur auf dem Papier funktioniert.",
      "Eine priorisierte Umsetzung, die beim größten wirtschaftlichen Hebel beginnt.",
    ]}
    process={[
      { title: "Ablauf aufnehmen", text: "Wir betrachten, wie ein konkreter Vorgang heute tatsächlich bearbeitet wird – einschließlich Abweichungen und informeller Zwischenschritte." },
      { title: "Reibung bewerten", text: "Wir unterscheiden sichtbare Symptome von den eigentlichen Ursachen und bewerten Aufwand, Risiko und Wirkung." },
      { title: "Zielprozess festlegen", text: "Zuständigkeiten, Informationen und Entscheidungen werden so gestaltet, dass der Ablauf verständlich und tragfähig bleibt." },
      { title: "Verbesserung umsetzen", text: "Organisatorische und technische Maßnahmen werden schrittweise eingeführt und im realen Betrieb überprüft." },
    ]}
    examples={[
      { title: "40+ Quellen in einem verlässlichen Ablauf", text: "Immobilienanfragen aus zahlreichen Portalen werden zentral übernommen, vereinheitlicht und für die weitere Bearbeitung bereitgestellt.", href: "/projekte/immobot" },
      { title: "Backoffice-Ablauf mit mehr als 30 % weniger Zeitaufwand", text: "Wiederkehrende Datei-, Benachrichtigungs- und Berichtsschritte wurden neu geordnet und gezielt automatisiert. Das Unternehmen bleibt auf Wunsch anonym.", href: "/projekte/backoffice-automatisierung" },
    ]}
    faqs={faqs}
    related={[
      { href: "/systeme-verbinden", label: "Systeme besser zusammenspielen lassen" },
      { href: "/crm-prozesse-optimieren", label: "CRM-Prozesse verbessern" },
      { href: "/wissen/prozessoptimierung-oder-automatisierung", label: "Optimieren oder automatisieren?" },
    ]}
  />;
}
