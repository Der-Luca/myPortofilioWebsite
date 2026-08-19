export const metadata = {
  title: "Kontakt | Plessing Consulting",
  description: "Besprechen Sie einen manuellen oder fehleranfälligen Geschäftsprozess – unverbindliche Ersteinschätzung zu CRM, Automatisierung und Systemintegration.",
  alternates: {
    canonical: "https://plessing-consulting.com/contact",
  },
  openGraph: {
    title: "Kontakt | Plessing Consulting",
    description: "Unverbindliche Ersteinschätzung für CRM-, Automatisierungs- und Integrationsprobleme.",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
