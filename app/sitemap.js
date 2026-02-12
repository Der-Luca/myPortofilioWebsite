import { getAllPosts } from '../lib/blog';

export default function sitemap() {
  const baseUrl = 'https://plessing-consulting.com';
  const lastModified = new Date();

  const staticPages = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/datenschutz`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/impressum`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const posts = getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
