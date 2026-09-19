import ServiceLandingPage from "../components/marketing/ServiceLandingPage";

export const metadata = {
  title: "Bestehende Systeme verbinden | Plessing Consulting",
  description: "Vorhandene Unternehmenssoftware besser zusammenspielen lassen, Informationsverluste reduzieren und durchgängige Abläufe schaffen.",
  alternates: { canonical: "https://plessing-consulting.com/systeme-verbinden" },
  openGraph: { title: "Bestehende Systeme besser zusammenspielen lassen", description: "Durchgängige Abläufe schaffen, ohne vorhandene Software vorschnell zu ersetzen.", url: "https://plessing-consulting.com/systeme-verbinden", type: "website" },
};

const faqs = [
  { question: "Was heißt es, Systeme miteinander zu verbinden?", answer: "Informationen werden zwischen den beteiligten Anwendungen so weitergegeben, dass ein Geschäftsablauf nicht an jeder Systemgrenze neu beginnen muss. Fachlich wird dies häufig als Systemintegration bezeichnet." },
  { question: "Müssen vorhandene Systeme ersetzt werden?", answer: "In vielen Fällen nicht. Zuerst wird geprüft, welche Anwendungen ihren Zweck weiterhin erfüllen und an welchen Übergängen Informationen fehlen oder manuelle Arbeit entsteht." },
  { question: "Welche Systeme können einbezogen werden?", answer: "Typische Beispiele sind CRM, ERP, Portale, Buchhaltung, E-Mail, Dokumentenmanagement und individuelle Fachanwendungen. Entscheidend ist nicht der Produktname, sondern der benötigte Informationsfluss." },
  { question: "Was passiert bei Fehlern?", answer: "Eine tragfähige Verbindung benötigt nachvollziehbare Zustände, Protokollierung und einen klaren Umgang mit Ausnahmen. Daten dürfen nicht unbemerkt verloren gehen oder doppelt verarbeitet werden." },
];

export default function SystemeVerbindenPage() {
  return <ServiceLandingPage
    path="/systeme-verbinden"
    eyebrow="Bestehende Systeme verbinden"
    title="Informationen sollen dem Prozess folgen – nicht umgekehrt."
    intro="Wenn ein Geschäftsablauf über mehrere Anwendungen läuft, entstehen die größten Probleme oft an den Übergängen. Ich sorge dafür, dass vorhandene Systeme Informationen zuverlässig austauschen und der Ablauf als Ganzes funktioniert."
    promise="Ihre bestehende Softwarelandschaft bleibt so weit wie sinnvoll erhalten. Verbunden und ergänzt wird nur dort, wo ein konkreter Nutzen entsteht."
    problems={[
      "Der aktuelle Stand eines Vorgangs ist nur mit Rückfragen oder durch das Öffnen mehrerer Anwendungen erkennbar.",
      "Dieselben Informationen werden an unterschiedlichen Stellen gepflegt und entwickeln sich mit der Zeit auseinander.",
      "Ein System enthält wichtige Daten, stellt sie dem nächsten Arbeitsschritt aber nicht rechtzeitig zur Verfügung.",
      "Änderungen werden per Nachricht weitergegeben und müssen anschließend von einer anderen Person erneut erfasst werden.",
    ]}
    outcomes={[
      "Ein durchgängiger Informationsfluss entlang des tatsächlichen Geschäftsprozesses.",
      "Eine klar definierte Quelle für zentrale Informationen und weniger widersprüchliche Datenstände.",
      "Sichtbare Ausnahmefälle statt unbemerkter Fehler im Hintergrund.",
      "Weniger Abhängigkeit von manuellen Übergaben und persönlichem Erinnerungswissen.",
    ]}
    process={[
      { title: "Informationsfluss verstehen", text: "Wir klären, welche Informationen wann entstehen, wer sie benötigt und wo der Ablauf heute unterbrochen wird." },
      { title: "Verantwortung festlegen", text: "Für zentrale Daten und Prozesszustände wird eindeutig bestimmt, welches System führend ist." },
      { title: "Verbindung gestalten", text: "Die einfachste belastbare Lösung wird geplant – einschließlich Ausnahmen, Berechtigungen und Fehlerbehandlung." },
      { title: "Im Betrieb prüfen", text: "Die Verbindung wird mit realistischen Vorgängen getestet, dokumentiert und nach dem Start beobachtet." },
    ]}
    examples={[
      { title: "Immobilienanfragen zentral verarbeiten", text: "Mehr als 40 unterschiedliche Quellen wurden in einen gemeinsamen Ablauf eingebunden, ohne jede Plattform einzeln bearbeiten zu müssen.", href: "/projekte/immobot" },
      { title: "Gewachsene Fachanwendungen weiter nutzen", text: "Auch individuelle oder ältere Systeme können häufig sinnvoll eingebunden werden, wenn Datenzugriff und Verantwortlichkeiten sauber geklärt sind." },
    ]}
    faqs={faqs}
    related={[
      { href: "/prozessoptimierung", label: "Prozessoptimierung" },
      { href: "/crm-prozesse-optimieren", label: "CRM-Prozesse optimieren" },
      { href: "/integrationen/espocrm", label: "EspoCRM integrieren" },
    ]}
  />;
}
