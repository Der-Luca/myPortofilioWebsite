import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import './blog.css';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Plessing Consulting Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

async function renderMarkdown(content) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify)
    .process(content);
  return String(result);
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await renderMarkdown(post.content);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-400 transition-colors mb-8"
        >
          ← Zurück zum Blog
        </Link>

        <time className="block text-sm text-slate-500 font-medium">
          {new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>

        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-slate-400 leading-relaxed">
          {post.description}
        </p>

        <hr className="my-10 border-white/10" />

        <div
          className="blog-content prose prose-invert prose-lg max-w-none text-justify
                     prose-headings:font-semibold prose-headings:tracking-tight
                     prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-white
                     prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-slate-200
                     prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
                     prose-li:text-slate-300 prose-li:leading-relaxed
                     prose-strong:text-white prose-strong:font-semibold
                     prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                     prose-ul:my-4 prose-ul:space-y-1
                     prose-code:text-cyan-300 prose-code:font-mono
                     prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
                     prose-blockquote:border-l-cyan-500 prose-blockquote:bg-gray-900/50 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:text-slate-300 prose-blockquote:not-italic
                     prose-ol:my-4 prose-ol:space-y-1"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

    </main>
  );
}
