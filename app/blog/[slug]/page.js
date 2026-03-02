import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import BlogAuthor from '../../components/blog/BlogAuthor';
import BlogContent from '../../components/blog/BlogContent';
import { getAllPosts, getPostBySlug } from '../../../lib/blog-data';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';

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

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-500 
                      hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-3 py-1.5 text-sm font-medium bg-cyan-500/10 text-cyan-400 
                           rounded-full border border-cyan-500/20 
                           hover:bg-cyan-500/20 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight 
                           bg-gradient-to-r from-white via-slate-100 to-slate-300 
                           bg-clip-text text-transparent mb-6 leading-tight"
            >
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 
                            border-b border-white/10 pb-8"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('de-DE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              
              <div className="flex gap-2 ml-auto">
                <button className="p-2 rounded-full bg-white/[0.05] text-slate-400 
                                  hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-white/[0.05] text-slate-400 
                                  hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Author Card */}
          <div className="mb-12">
            <BlogAuthor author={post.author} authorRole={post.authorRole} date={post.date} />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <BlogContent content={post.content} />
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                Veröffentlicht am {new Date(post.date).toLocaleDateString('de-DE')}
              </p>
              
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-cyan-400 
                          hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Alle Artikel ansehen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
