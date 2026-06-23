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
    images: [{ url: "https://plessing-consulting.com/logo.png" }],
  },
};

export default function PortfolioLayout({ children }) {
  return children;
}
