export const metadata = {
  title: "CRM-Optimierung, Automatisierung & Systemintegration",
  description: "Bestehende CRM-, ERP- und Fachsysteme verbinden, manuelle Prozesse automatisieren und Software-Lücken gezielt schließen.",
  alternates: {
    canonical: "https://plessing-consulting.com/services",
  },
  openGraph: {
    title: "CRM-Optimierung, Automatisierung & Systemintegration",
    description: "Bestehende Systeme besser nutzen, Datenflüsse verbinden und manuelle Arbeit reduzieren.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
