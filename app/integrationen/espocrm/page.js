import ServiceLandingPage from "../../components/marketing/ServiceLandingPage";

export const metadata = {
  title: "EspoCRM Beratung, Optimierung & Integration",
  description: "EspoCRM an Geschäftsprozesse anpassen, Abläufe automatisieren und das Open-Source-CRM mit bestehenden Systemen verbinden.",
  alternates: { canonical: "https://plessing-consulting.com/integrationen/espocrm" },
  openGraph: { title: "EspoCRM Beratung, Optimierung und Integration", description: "EspoCRM an reale Kundenprozesse anpassen und sinnvoll mit bestehenden Systemen verbinden.", url: "https://plessing-consulting.com/integrationen/espocrm", type: "website" },
};

const faqs = [
  { question: "Was kann an EspoCRM angepasst werden?", answer: "Unter anderem lassen sich Datenstrukturen, Ansichten, Rollen, Status, Beziehungen und wiederkehrende Abläufe an den tatsächlichen Kundenprozess anpassen. Der sinnvolle Umfang hängt vom konkreten Einsatz ab." },
  { question: "Kann EspoCRM mit anderen Systemen verbunden werden?", answer: "Ja. EspoCRM stellt eine Programmierschnittstelle bereit, über die beispielsweise Kontakte, Leads, Aufgaben und individuelle Datensätze ausgetauscht werden können. Vor der Umsetzung wird geklärt, welches System für welche Information verantwortlich ist." },
  { question: "Lassen sich Abläufe in EspoCRM automatisieren?", answer: "Einfache Regeln können innerhalb von EspoCRM abgebildet werden. Für systemübergreifende Abläufe kommen je nach Anforderung externe Verbindungen oder Automatisierungsplattformen infrage. Entscheidend ist, dass Fehler und Ausnahmen sichtbar bleiben." },
  { question: "Ist EspoCRM für jedes Unternehmen die richtige Wahl?", answer: "Nein. EspoCRM ist besonders interessant, wenn Anpassbarkeit, offene Schnittstellen und wahlweise eigener Betrieb wichtig sind. Vor einer Einführung sollten Prozess, Anforderungen, Betrieb und langfristige Pflege gemeinsam bewertet werden." },
  { question: "Übernehmen Sie auch bestehende Installationen?", answer: "Ja. Eine Zusammenarbeit kann mit der Prüfung einer vorhandenen EspoCRM-Instanz beginnen. Dabei werden Nutzung, Datenstruktur, Abläufe, Verbindungen und offene Probleme betrachtet." },
];

export default function EspoCrmPage() {
  return <ServiceLandingPage
    path="/integrationen/espocrm"
    eyebrow="EspoCRM Beratung und Integration"
    title="EspoCRM soll Ihren Kundenprozess unterstützen – nicht zusätzlichen Aufwand erzeugen."
    intro="Ich unterstütze Unternehmen dabei, EspoCRM sinnvoll einzurichten, bestehende Strukturen zu verbessern und das CRM mit weiteren Anwendungen zu verbinden. Ausgangspunkt ist immer der Geschäftsablauf, nicht die technische Funktion."
    promise="Das Ergebnis ist keine überladene Konfiguration, sondern ein verständliches CRM, das relevante Informationen verfügbar macht und sich in den Arbeitsalltag einfügt."
    problems={[
      "EspoCRM wurde eingeführt, bildet den tatsächlichen Vertriebs- oder Betreuungsablauf aber nur teilweise ab.",
      "Wichtige Informationen liegen außerhalb des CRM und müssen bei jedem Vorgang zusammengesucht werden.",
      "Status, Felder und Berechtigungen sind historisch gewachsen und für Mitarbeitende schwer verständlich.",
      "Wiederkehrende Schritte könnten vereinfacht werden, gleichzeitig sollen Kontrolle und Nachvollziehbarkeit erhalten bleiben.",
    ]}
    outcomes={[
      "Eine EspoCRM-Struktur, die sich an Ihrem Kundenprozess und den beteiligten Rollen orientiert.",
      "Klare Regeln dafür, welche Informationen im CRM geführt und welche aus anderen Systemen übernommen werden.",
      "Gezielte Automatisierungen für stabile, wiederkehrende Schritte.",
      "Dokumentierte Verbindungen und sichtbare Fehlerfälle statt schwer nachvollziehbarer Hintergrundlogik.",
    ]}
    process={[
      { title: "Bestand prüfen", text: "Wir betrachten die aktuelle Nutzung, Datenstruktur, Rollen und wiederkehrenden Probleme anhand realer Vorgänge." },
      { title: "Zielprozess festlegen", text: "Wir bestimmen, wie Kundeninformationen künftig entstehen, gepflegt und zwischen Beteiligten weitergegeben werden." },
      { title: "Gezielt anpassen", text: "Nur die Felder, Regeln, Ansichten und Verbindungen werden umgesetzt, die den definierten Ablauf tatsächlich unterstützen." },
      { title: "Sauber übergeben", text: "Die Lösung wird mit echten Fällen geprüft und so dokumentiert, dass Betrieb und spätere Änderungen nachvollziehbar bleiben." },
    ]}
    examples={[
      { title: "CRM mit Website und Fachanwendung verbinden", text: "Neue Anfragen können strukturiert übernommen, bestehenden Kontakten zugeordnet und mit einem klaren nächsten Schritt versehen werden." },
      { title: "Wiederkehrende CRM-Schritte reduzieren", text: "Aufgaben, Statusänderungen oder Benachrichtigungen lassen sich dort automatisieren, wo Regeln stabil und Ausnahmen eindeutig sind." },
    ]}
    faqs={faqs}
    related={[
      { href: "/crm-prozesse-optimieren", label: "CRM-Prozesse optimieren" },
      { href: "/systeme-verbinden", label: "Bestehende Systeme verbinden" },
      { href: "/prozessoptimierung", label: "Prozessoptimierung" },
    ]}
    ctaTitle="Was soll in Ihrem EspoCRM besser funktionieren?"
  />;
}
