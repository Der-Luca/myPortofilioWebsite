export const metadata = {
  title: "Leistungen | Plessing Consulting",
  description: "Unsere Leistungen: Prozess-Automatisierung, KI-Integration, Web- und App-Entwicklung sowie technische Beratung für den DACH-Raum.",
  alternates: {
    canonical: "https://plessing-consulting.com/services",
  },
  openGraph: {
    title: "Leistungen | Plessing Consulting",
    description: "Unsere Leistungen: Prozess-Automatisierung, KI-Integration, Web- und App-Entwicklung sowie technische Beratung für den DACH-Raum.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "https://plessing-consulting.com/logo.png" }],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
