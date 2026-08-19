import "./globals.css";
import SiteVisitTracker from "./components/SiteVisitTracker";

export const metadata = {
  metadataBase: new URL("https://plessing-consulting.com"),
  title: "CRM-Optimierung & Automatisierung | Plessing Consulting",
  description: "Bestehende CRM-, ERP- und Fachsysteme verbinden, manuelle Abläufe automatisieren und Software-Lücken pragmatisch schließen.",
  alternates: {
    canonical: "https://plessing-consulting.com",
  },
  openGraph: {
    title: "Weniger manuelle Arbeit. Besser verbundene Systeme.",
    description: "CRM-Optimierung, Prozessautomatisierung und Systemintegration für Unternehmen im DACH-Raum.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Weniger manuelle Arbeit. Besser verbundene Systeme." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weniger manuelle Arbeit. Besser verbundene Systeme.",
    description: "CRM-Optimierung, Automatisierung und Systemintegration für bestehende Softwarelandschaften.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://plessing-consulting.com/#business",
                  name: "Plessing Consulting",
                  url: "https://plessing-consulting.com",
                  description: "CRM-Optimierung, Prozessautomatisierung und Systemintegration für Unternehmen mit bestehenden Softwarelandschaften.",
                  areaServed: ["DE", "AT", "CH"],
                  email: "luca@plessing-consulting.com",
                  founder: { "@id": "https://plessing-consulting.com/#person" },
                },
                {
                  "@type": "Person",
                  "@id": "https://plessing-consulting.com/#person",
                  name: "Luca-Samuel Pleßing",
                  jobTitle: "IT-Berater und Software Engineer",
                  url: "https://plessing-consulting.com/about",
                  sameAs: ["https://www.linkedin.com/in/luca-samuel-ple%C3%9Fing-233336274/"],
                },
              ],
            }),
          }}
        />
        <SiteVisitTracker />
        {children}
      </body>
    </html>
  );
}
