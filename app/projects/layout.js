export const metadata = {
  title: "Case Studies zur Prozessoptimierung",
  description: "Praxisbeispiele für bessere Geschäftsabläufe, verbundene Systeme und gezielte Automatisierung – mit Ausgangslage, Verbesserung und Nutzen.",
  alternates: {
    canonical: "https://plessing-consulting.com/projects",
  },
  openGraph: {
    title: "Case Studies zur Prozessoptimierung",
    description: "Praxisbeispiele mit Ausgangslage, Verbesserung und Nutzen für den Arbeitsalltag.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
