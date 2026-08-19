export const metadata = {
  title: "Über Luca-Samuel Pleßing | Plessing Consulting",
  description: "Luca-Samuel Pleßing verbindet Prozessverständnis, CRM-Optimierung, Systemintegration und Software Engineering für Unternehmen im DACH-Raum.",
  alternates: {
    canonical: "https://plessing-consulting.com/about",
  },
  openGraph: {
    title: "Über Luca-Samuel Pleßing | Plessing Consulting",
    description: "IT-Beratung und technische Umsetzung mit Fokus auf CRM, Automatisierung und bestehende Systemlandschaften.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
};

export default function AboutLayout({ children }) {
  return children;
}
