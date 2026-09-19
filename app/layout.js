import "./globals.css";
import SiteVisitTracker from "./components/SiteVisitTracker";

export const metadata = {
  metadataBase: new URL("https://plessing-consulting.com"),
  title: "Prozessoptimierung für Unternehmen | Plessing Consulting",
  description: "Geschäftsprozesse verbessern und bestehende Systeme sinnvoll zusammenspielen lassen – für Unternehmen im DACH-Raum.",
  alternates: {
    canonical: "https://plessing-consulting.com",
  },
  openGraph: {
    title: "Damit Abläufe über Teams und Systeme hinweg funktionieren.",
    description: "Prozessoptimierung und das bessere Zusammenspiel vorhandener Systeme für Unternehmen im DACH-Raum.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Prozessoptimierung und verbundene Abläufe – Plessing Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damit Abläufe über Teams und Systeme hinweg funktionieren.",
    description: "Prozessoptimierung und besser verbundene Abläufe für Unternehmen im DACH-Raum.",
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
                  description: "Prozessoptimierung und das bessere Zusammenspiel bestehender Systeme für Unternehmen im DACH-Raum.",
                  areaServed: ["DE", "AT", "CH"],
                  email: "luca@plessing-consulting.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Carrer Costa Bona 8, Piso 4-1",
                    postalCode: "08033",
                    addressLocality: "Barcelona",
                    addressCountry: "ES",
                  },
                  founder: { "@id": "https://plessing-consulting.com/#person" },
                  knowsAbout: ["Prozessoptimierung", "Geschäftsprozessanalyse", "CRM-Prozesse", "Systemintegration", "Prozessautomatisierung"],
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
