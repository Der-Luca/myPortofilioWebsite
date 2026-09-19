import ServiceLandingPage from "../components/marketing/ServiceLandingPage";

export const metadata = {
  title: "CRM-Prozesse optimieren statt CRM vorschnell wechseln",
  description: "CRM-Abläufe in Vertrieb und Kundenbetreuung analysieren, Nutzung verbessern und vorhandene Systeme sinnvoll verbinden.",
  alternates: { canonical: "https://plessing-consulting.com/crm-prozesse-optimieren" },
  openGraph: { title: "CRM-Prozesse optimieren statt vorschnell wechseln", description: "CRM-Nutzung, Daten und Übergaben am tatsächlichen Kundenprozess ausrichten.", url: "https://plessing-consulting.com/crm-prozesse-optimieren", type: "website" },
};

const faqs = [
  { question: "Wann sollte ein bestehendes CRM optimiert werden?", answer: "Wenn wichtige Informationen fehlen, das Team außerhalb des CRM arbeitet, Zuständigkeiten unklar sind oder Auswertungen nicht verlässlich sind, sollte zuerst der zugrunde liegende Ablauf geprüft werden." },
  { question: "Ist ein CRM-Wechsel manchmal trotzdem sinnvoll?", answer: "Ja. Wenn zentrale Anforderungen dauerhaft nicht abbildbar sind, Betrieb oder Erweiterung unverhältnismäßig teuer werden oder das System strategisch nicht mehr passt, kann ein Wechsel sinnvoll sein. Diese Entscheidung sollte aus dem Zielprozess abgeleitet werden." },
  { question: "Geht es nur um den Vertrieb?", answer: "Nein. Kundenbezogene Abläufe betreffen häufig auch Administration, Leistungserbringung, Support und Abrechnung. Ein CRM funktioniert nur dann gut, wenn diese Übergänge berücksichtigt werden." },
  { question: "Welche Systeme werden unterstützt?", answer: "Der Ansatz ist grundsätzlich herstellerunabhängig. Entscheidend sind Ihre Prozesse und die Möglichkeiten des vorhandenen Systems. Für EspoCRM gibt es zusätzlich ein spezialisiertes Leistungsangebot." },
];

export default function CrmProzessePage() {
  return <ServiceLandingPage
    path="/crm-prozesse-optimieren"
    eyebrow="CRM-Prozesse optimieren"
    title="Ein CRM hilft nur, wenn der Ablauf darin zum Unternehmen passt."
    intro="Ich prüfe, wie Kundeninformationen im Alltag entstehen, weitergegeben und genutzt werden. Daraus entwickeln wir einen verständlichen CRM-Ablauf, der Vertrieb, Administration und weitere beteiligte Teams sinnvoll unterstützt."
    promise="Zuerst wird geklärt, was im Prozess besser funktionieren soll. Erst danach entscheiden wir, ob Konfiguration, Verbindung, Automatisierung oder tatsächlich ein Systemwechsel notwendig ist."
    problems={[
      "Das CRM ist vorhanden, wird aber nur von einem Teil des Teams konsequent genutzt.",
      "Kontakte und Vorgänge sind erfasst, dennoch fehlt ein verlässlicher Überblick über den nächsten Schritt.",
      "Informationen aus Kundenkommunikation, Leistungserbringung oder Abrechnung erreichen das CRM nicht zuverlässig.",
      "Pflichtfelder und Regeln erzeugen zusätzlichen Aufwand, ohne den Mitarbeitenden sichtbar zu helfen.",
    ]}
    outcomes={[
      "Ein CRM-Ablauf, der sich am tatsächlichen Kundenprozess orientiert.",
      "Verständliche Status, Verantwortlichkeiten und nächste Schritte.",
      "Bessere Datenqualität durch weniger unnötige und klarer definierte Eingaben.",
      "Eine belastbare Entscheidung zwischen Optimierung des Bestands und einem möglichen Wechsel.",
    ]}
    process={[
      { title: "Nutzung beobachten", text: "Wir betrachten reale Vorgänge und sprechen mit den Personen, die das CRM täglich nutzen oder bewusst umgehen." },
      { title: "Kundenprozess klären", text: "Vom ersten Kontakt bis zur laufenden Betreuung werden Informationen, Entscheidungen und Übergaben sichtbar gemacht." },
      { title: "CRM sinnvoll ausrichten", text: "Status, Felder, Rollen und Verbindungen werden auf den Zielprozess abgestimmt und konsequent vereinfacht." },
      { title: "Nutzung stabilisieren", text: "Die Verbesserung wird mit echten Fällen getestet, verständlich dokumentiert und anhand weniger Kennzahlen überprüft." },
    ]}
    examples={[
      { title: "Anfragen aus vielen Quellen zusammenführen", text: "Ein zentraler Ablauf verhindert, dass jede Quelle separat kontrolliert und in die weitere Bearbeitung übertragen werden muss.", href: "/projekte/immobot" },
      { title: "EspoCRM gezielt erweitern", text: "Bestehende CRM-Strukturen lassen sich häufig verbessern und verbinden, ohne direkt eine neue Plattform einzuführen.", href: "/integrationen/espocrm" },
    ]}
    faqs={faqs}
    related={[
      { href: "/prozessoptimierung", label: "Prozessoptimierung" },
      { href: "/systeme-verbinden", label: "Systeme verbinden" },
      { href: "/integrationen/espocrm", label: "EspoCRM Beratung" },
    ]}
  />;
}
