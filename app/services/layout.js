export const metadata = {
  title: "Leistungen: Prozessoptimierung und verbundene Abläufe",
  description: "Geschäftsprozesse analysieren, vorhandene Systeme besser zusammenspielen lassen und Verbesserungen wirksam umsetzen.",
  alternates: {
    canonical: "https://plessing-consulting.com/services",
  },
  openGraph: {
    title: "Prozessoptimierung und verbundene Abläufe",
    description: "Abläufe verstehen, Reibungsverluste beseitigen und vorhandene Systeme sinnvoll einbinden.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
