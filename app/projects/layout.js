export const metadata = {
  title: "Case Studies: Automatisierung & Systemintegration",
  description: "Praxisbeispiele für Systemintegration, Prozessautomatisierung und individuelle Software – mit Ausgangslage, Lösung und geschäftlichem Nutzen.",
  alternates: {
    canonical: "https://plessing-consulting.com/projects",
  },
  openGraph: {
    title: "Case Studies: Automatisierung & Systemintegration",
    description: "Praxisbeispiele mit Ausgangslage, technischer Lösung und Nutzen für den Arbeitsalltag.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
