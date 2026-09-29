export default function sitemap() {
  const baseUrl = 'https://plessing-consulting.com';
  const initialLaunch = new Date('2026-09-19');
  const latestUpdate = new Date('2026-09-29');

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: latestUpdate, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about/`, lastModified: latestUpdate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tech-sales/`, lastModified: latestUpdate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/prozessoptimierung/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/systeme-verbinden/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/crm-prozesse-optimieren/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/integrationen/espocrm/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projekte/immobot/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projekte/backoffice-automatisierung/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/wissen/prozessoptimierung-oder-automatisierung/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/wissen/crm-optimieren-oder-wechseln/`, lastModified: initialLaunch, changeFrequency: 'monthly', priority: 0.7 },
  ];

  return staticPages;
}
