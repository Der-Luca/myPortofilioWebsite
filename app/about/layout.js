export const metadata = {
  title: "Über Luca-Samuel Pleßing | Plessing Consulting",
  description: "Luca-Samuel Pleßing verbindet IT-Beratung, technisches Verständnis und B2B Tech Sales für Software-, IT- und Digitalunternehmen im DACH-Raum.",
  alternates: {
    canonical: "https://plessing-consulting.com/about",
  },
  openGraph: {
    title: "Über Luca-Samuel Pleßing | Plessing Consulting",
    description: "IT-Beratung, technische Umsetzung und B2B Tech Sales mit Fokus auf verständliche Lösungen und pragmatische Zusammenarbeit.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": "https://plessing-consulting.com/about/#profile",
            url: "https://plessing-consulting.com/about/",
            name: "Über Luca-Samuel Pleßing",
            dateModified: "2026-09-29",
            mainEntity: {
              "@id": "https://plessing-consulting.com/#person",
              "@type": "Person",
              name: "Luca-Samuel Pleßing",
              jobTitle: "IT-Berater und Freelance B2B Tech Sales Support",
              worksFor: { "@id": "https://plessing-consulting.com/#business" },
              knowsAbout: [
                "IT-Beratung",
                "B2B Tech Sales",
                "Softwareentwicklung",
                "Prozessoptimierung",
                "Systemintegration",
                "Automatisierung",
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
