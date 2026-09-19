import KnowledgeArticle from "../../components/marketing/KnowledgeArticle";

export const metadata = {
  title: "Prozessoptimierung oder Automatisierung – was kommt zuerst?",
  description: "Warum Unternehmen einen Ablauf meist zuerst vereinfachen sollten, bevor Software wiederkehrende Schritte übernimmt.",
  alternates: { canonical: "https://plessing-consulting.com/wissen/prozessoptimierung-oder-automatisierung" },
  openGraph: { title: "Prozessoptimierung oder Automatisierung?", description: "Warum die richtige Reihenfolge über Nutzen, Wartbarkeit und Akzeptanz entscheidet.", url: "https://plessing-consulting.com/wissen/prozessoptimierung-oder-automatisierung", type: "article" },
};

const faqs = [
  { question: "Was ist der Unterschied zwischen Prozessoptimierung und Automatisierung?", answer: "Prozessoptimierung verändert den Ablauf selbst. Automatisierung lässt Software geeignete Schritte innerhalb dieses Ablaufs übernehmen." },
  { question: "Kann man einen bestehenden Prozess direkt automatisieren?", answer: "Technisch oft ja. Wirtschaftlich ist es jedoch riskant, wenn unnötige Schritte, unklare Regeln oder häufige Ausnahmen einfach übernommen werden." },
  { question: "Welche Schritte eignen sich für Automatisierung?", answer: "Besonders geeignet sind häufige, klar definierte und regelbasierte Schritte mit verlässlichen Eingangsdaten. Entscheidungen mit vielen Ausnahmen benötigen meist weiterhin menschliche Kontrolle." },
];

export default function OptimierungOderAutomatisierung() {
  return <KnowledgeArticle
    path="/wissen/prozessoptimierung-oder-automatisierung"
    title="Prozessoptimierung oder Automatisierung – was kommt zuerst?"
    description="Automatisierung kann Arbeit reduzieren. Sie kann aber auch einen unnötig komplizierten Ablauf schneller und schwerer durchschaubar machen. Die richtige Reihenfolge entscheidet."
    answer="In den meisten Fällen kommt die Prozessoptimierung zuerst. Der Ablauf wird verstanden, vereinfacht und mit klaren Verantwortlichkeiten versehen. Anschließend werden nur die stabilen, häufigen und regelbasierten Schritte automatisiert."
    sections={[
      { heading: "Warum Automatisierung nicht der erste Schritt sein sollte", paragraphs: ["Ein Prozess besteht nicht nur aus sichtbaren Arbeitsschritten. Er enthält Entscheidungen, Ausnahmen, Übergaben und informelles Wissen. Werden diese Punkte vor der Automatisierung nicht geklärt, wandert die Unklarheit lediglich in die technische Lösung.", "Das Ergebnis kann kurzfristig schneller wirken, erzeugt langfristig aber schwer nachvollziehbare Fehler und Abhängigkeiten."] },
      { heading: "Zuerst den Ablauf vereinfachen", paragraphs: ["Vor jeder technischen Umsetzung sollte geklärt werden, welches Ergebnis der Prozess liefern soll, welche Informationen dafür benötigt werden und wer Entscheidungen verantwortet."], points: ["Unnötige Schritte entfernen", "Doppelte Entscheidungen zusammenführen", "Verantwortlichkeiten eindeutig machen", "Ausnahmen bewusst definieren", "Messbare Ziele festlegen"] },
      { heading: "Wann Automatisierung sinnvoll wird", paragraphs: ["Automatisierung eignet sich besonders für wiederkehrende Schritte mit stabilen Regeln. Dazu können das Übernehmen von Informationen, das Erstellen von Aufgaben, Benachrichtigungen oder die Vorbereitung von Berichten gehören.", "Menschen sollten dort eingebunden bleiben, wo Kontext, Abwägung oder Verantwortung erforderlich sind."] },
      { heading: "Ein praktisches Beispiel", paragraphs: ["Bei einem anonymisierten Backoffice-Ablauf wurden zunächst Routine, Entscheidung und Ausnahme voneinander getrennt. Erst danach wurden Datei-, Benachrichtigungs- und Berichtsschritte gezielt automatisiert. Der Zeitaufwand sank um mehr als 30 Prozent, ohne die notwendige Kontrolle zu verlieren."] },
    ]}
    faqs={faqs}
    related={[
      { href: "/prozessoptimierung", label: "Prozessoptimierung" },
      { href: "/projekte/backoffice-automatisierung", label: "Anonyme Case Study" },
      { href: "/systeme-verbinden", label: "Systeme verbinden" },
    ]}
  />;
}
