import CaseStudyPage from "../../components/marketing/CaseStudyPage";

export const metadata = {
  title: "Anonyme Case Study: Backoffice-Ablauf verbessern",
  description: "Wie wiederkehrende Datei-, Benachrichtigungs- und Berichtsschritte neu geordnet und gezielt automatisiert wurden.",
  alternates: { canonical: "https://plessing-consulting.com/projekte/backoffice-automatisierung" },
  openGraph: { title: "Mehr als 30 % weniger Backoffice-Aufwand", description: "Anonyme Case Study zu einem neu geordneten und gezielt automatisierten Geschäftsablauf.", url: "https://plessing-consulting.com/projekte/backoffice-automatisierung", type: "article" },
};

export default function BackofficeCaseStudy() {
  return <CaseStudyPage
    path="/projekte/backoffice-automatisierung"
    label="Anonyme Case Study · Backoffice"
    title="Mehr als 30 % weniger Zeitaufwand in einem wiederkehrenden Backoffice-Ablauf."
    intro="Das Unternehmen bleibt auf Wunsch ungenannt. Beschrieben wird deshalb nur der geschäftliche Ablauf: wiederkehrende Dateiübernahmen, Benachrichtigungen und Berichte wurden neu geordnet und dort automatisiert, wo die Regeln stabil waren."
    facts={[">30 % weniger Zeitaufwand", "Weniger Fehlerquellen", "Klare Ausnahmen", "Verständlicher Status"]}
    sections={[
      { heading: "Die Ausgangssituation", text: "Mehrere kleine Arbeitsschritte mussten bei jedem Vorgang erneut ausgeführt werden. Dateien wurden übernommen, Beteiligte informiert und Informationen für Berichte zusammengestellt. Jeder einzelne Schritt war überschaubar, in Summe entstand jedoch regelmäßig spürbarer Aufwand.", points: ["Wiederkehrende Dateiübernahmen", "Benachrichtigungen von Hand auslösen", "Berichte aus einzelnen Informationen zusammenstellen", "Fehler wurden teilweise erst spät sichtbar"] },
      { heading: "Nicht jeden Schritt blind automatisieren", text: "Zuerst wurde geklärt, welche Entscheidungen wirklich regelbasiert sind und an welchen Stellen weiterhin eine menschliche Prüfung sinnvoll bleibt. Dadurch entstand kein undurchsichtiger Vollautomat, sondern ein Ablauf mit klaren Verantwortlichkeiten." },
      { heading: "Die Verbesserung", text: "Stabile Routineaufgaben wurden übernommen, relevante Zustände sichtbar gemacht und Ausnahmefälle für die zuständigen Personen bereitgestellt. Ein übersichtlicher Verwaltungsbereich unterstützt die Kontrolle, ohne dass jeder Zwischenschritt erneut ausgeführt werden muss.", points: ["Routine wird automatisch vorbereitet", "Menschen prüfen relevante Ausnahmen", "Status und Fehler bleiben nachvollziehbar", "Der Ablauf kann bei Veränderungen angepasst werden"] },
      { heading: "Das Ergebnis", text: "Der Zeitaufwand im Team sank um mehr als 30 Prozent. Gleichzeitig entstanden weniger vermeidbare Fehlerquellen. Besonders wichtig: Der Nutzen kam nicht durch möglichst viel Automatisierung zustande, sondern durch die klare Trennung zwischen Routine, Entscheidung und Ausnahme." },
    ]}
    related={[
      { href: "/prozessoptimierung", label: "Prozessoptimierung" },
      { href: "/wissen/prozessoptimierung-oder-automatisierung", label: "Erst optimieren oder automatisieren?" },
      { href: "/projects", label: "Weitere Projekte" },
    ]}
  />;
}
