import CaseStudyPage from "../../components/marketing/CaseStudyPage";

export const metadata = {
  title: "Case Study: 40+ Immobilienportale zentral verarbeiten",
  description: "Wie Immobot Anfragen und Objektdaten aus mehr als 40 Immobilienportalen in einem zentralen, verlässlichen Ablauf zusammenführt.",
  alternates: { canonical: "https://plessing-consulting.com/projekte/immobot" },
  openGraph: { title: "40+ Immobilienportale in einem zentralen Ablauf", description: "Case Study: Wie Immobot Informationen aus zahlreichen Quellen zuverlässig zusammenführt.", url: "https://plessing-consulting.com/projekte/immobot", type: "article" },
};

export default function ImmobotCaseStudy() {
  return <CaseStudyPage
    path="/projekte/immobot"
    label="Case Study · Immobot"
    title="Anfragen aus mehr als 40 Immobilienportalen zentral verarbeiten."
    intro="Immobilienanfragen und Objektdaten kommen aus vielen Quellen und in unterschiedlichen Formaten. Für Immobot entstand daraus ein zentraler Ablauf, der Informationen übernimmt, vereinheitlicht und für die weitere Bearbeitung verfügbar macht."
    facts={["40+ angebundene Portale", "Zentrale Verarbeitung", "Flexible Filterlogik", "Erweiterbarer Ablauf"]}
    sections={[
      { heading: "Die Ausgangssituation", text: "Wer Immobilienangebote und Anfragen über viele Plattformen hinweg bearbeitet, verbringt schnell einen großen Teil der Zeit mit dem Zusammensuchen, Prüfen und Einordnen von Informationen. Jede Plattform hat eigene Strukturen, während für die tägliche Arbeit ein gemeinsamer Überblick benötigt wird.", points: ["Viele Quellen mit unterschiedlichen Datenformaten", "Wiederkehrende Prüfung und Aufbereitung", "Hoher Aufwand für einen vollständigen Überblick", "Neue Quellen sollten später ergänzt werden können"] },
      { heading: "Die entscheidende Prozessfrage", text: "Nicht jede Plattform sollte separat betrachtet werden. Entscheidend war, welche Informationen für die weitere Bearbeitung tatsächlich benötigt werden und wie sie unabhängig von ihrer Quelle in einen gemeinsamen Ablauf gelangen können." },
      { heading: "Die Verbesserung", text: "Die eingehenden Informationen werden automatisiert übernommen, vereinheitlicht und zentral bereitgestellt. Filter, Benachrichtigungen sowie Karten- und Radiussuche unterstützen anschließend die gezielte Bearbeitung. Fehler und Sonderfälle bleiben sichtbar, damit der Prozess nicht nur im Idealfall funktioniert.", points: ["Ein gemeinsamer Ablauf statt vieler Einzelwege", "Einheitliche Informationen für Filter und Entscheidungen", "Weniger manuelles Zusammenführen", "Struktur, die um weitere Quellen erweitert werden kann"] },
      { heading: "Der Nutzen im Alltag", text: "Statt Informationen aus zahlreichen Portalen einzeln zusammenzutragen, steht ein zentraler und erweiterbarer Arbeitsablauf zur Verfügung. Damit wird nicht nur ein technischer Datenaustausch gelöst, sondern die tägliche Bearbeitung als Ganzes verbessert." },
    ]}
    quote={{ text: "Wir haben unsere Immobiliensuche stark automatisiert und mehrere Plattformen angebunden. Plessing Consulting hat uns dabei konzeptionell und technisch sauber unterstützt – von der Datenlogik bis zur stabilen Umsetzung. Das System läuft zuverlässig und lässt sich flexibel weiter ausbauen.", by: "Christoph D. · Founder & CEO, Immobot" }}
    related={[
      { href: "/prozessoptimierung", label: "Prozessoptimierung" },
      { href: "/systeme-verbinden", label: "Systeme verbinden" },
      { href: "/projects", label: "Weitere Projekte" },
    ]}
  />;
}
