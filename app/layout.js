import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Plessing Consulting | Software Engineering & KI-Automatisierung",
  description: "Plessing Consulting – Ihr Partner für Prozess-Automatisierung, KI-Lösungen und individuelle Software. Projekte im DACH-Raum.",
  alternates: {
    canonical: "https://plessing-consulting.com",
  },
  openGraph: {
    title: "Plessing Consulting | Software Engineering & KI-Automatisierung",
    description: "Plessing Consulting – Ihr Partner für Prozess-Automatisierung, KI-Lösungen und individuelle Software. Projekte im DACH-Raum.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "https://plessing-consulting.com/logo.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Plessing Consulting",
              url: "https://plessing-consulting.com",
              description: "Software Engineering & KI-Automatisierung – Ihr Partner für Prozess-Automatisierung, KI-Lösungen und individuelle Software.",
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
