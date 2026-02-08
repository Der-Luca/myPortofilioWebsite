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
  description: "Plessing Consulting – Ihr Partner für Prozess-Automatisierung, KI-Lösungen und individuelle Software. Sitz in Madrid, Projekte im DACH-Raum.",
  openGraph: {
    title: "Plessing Consulting | Software Engineering & KI-Automatisierung",
    description: "Plessing Consulting – Ihr Partner für Prozess-Automatisierung, KI-Lösungen und individuelle Software. Sitz in Madrid, Projekte im DACH-Raum.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plessing Consulting | Software Engineering & KI-Automatisierung",
    description: "Plessing Consulting – Ihr Partner für Prozess-Automatisierung, KI-Lösungen und individuelle Software. Sitz in Madrid, Projekte im DACH-Raum.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
