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
  return children;
}
