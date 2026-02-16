export const metadata = {
  title: 'EU Cloud Migration | Plessing Consulting',
  description:
    'Migration von US-Cloud zu europäischen Alternativen. DSGVO-konform, NIS2-ready. Nextcloud, Hetzner, Mattermost statt Microsoft 365, AWS & Slack.',
  keywords:
    'Cloud Migration, DSGVO, NIS2, Datensouveränität, Nextcloud, Hetzner, EU Cloud, Microsoft 365 Alternative',
  alternates: {
    canonical: 'https://plessing-consulting.com/eu-cloud-migration',
  },
  openGraph: {
    title: 'EU Cloud Migration | Plessing Consulting',
    description:
      'Raus aus der US-Cloud – Rein in europäische Datensouveränität. Migration in 90 Tagen zu DSGVO-konformen EU-Alternativen.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Plessing Consulting',
    url: 'https://plessing-consulting.com/eu-cloud-migration',
    images: [{ url: 'https://plessing-consulting.com/logo.png' }],
  },
};

export default function EUCloudMigrationLayout({ children }) {
  return children;
}
