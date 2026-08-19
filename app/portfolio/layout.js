export const metadata = {
  title: "Portfolio | Luca-Samuel Pleßing",
  description:
    "Persönliches Entwickler-Portfolio von Luca-Samuel Pleßing: Software Engineering, Automatisierung, KI-Workflows, Web-Apps, APIs, Docker und technische Umsetzung.",
  alternates: {
    canonical: "https://plessing-consulting.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Luca-Samuel Pleßing",
    description:
      "Persönliches Entwickler-Portfolio von Luca-Samuel Pleßing: Software Engineering, Automatisierung, KI-Workflows, Web-Apps, APIs, Docker und technische Umsetzung.",
    type: "profile",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
  robots: { index: false, follow: true },
};

export default function PortfolioLayout({ children }) {
  return children;
}
