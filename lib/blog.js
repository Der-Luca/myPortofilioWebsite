import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const posts = files.map(filename => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return { ...data, content, filename };
  });
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(p => p.slug === slug) || null;
}
