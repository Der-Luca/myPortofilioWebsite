export default function sitemap() {
  const baseUrl = 'https://plessing-consulting.com';
  const lastModified = new Date('2026-09-19');

  const staticPages = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/prozessoptimierung`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/systeme-verbinden`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/crm-prozesse-optimieren`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/integrationen/espocrm`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projekte/immobot`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projekte/backoffice-automatisierung`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/wissen/prozessoptimierung-oder-automatisierung`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/wissen/crm-optimieren-oder-wechseln`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];

  return staticPages;
}
