import Link from 'next/link';
import Navbar from '../components/navbar';
import { getAllPosts } from '../../lib/blog';

export const metadata = {
  title: 'Blog | Plessing Consulting',
  description: 'Insights zu Automatisierung, KI, digitaler Souveränität und IT-Beratung von Plessing Consulting.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen text-gray-100">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">
          Blog
        </h1>
        <p className="text-lg text-slate-400 mb-16 max-w-2xl">
          Gedanken, Insights und Praxis-Tipps rund um Automatisierung, KI und digitale Souveränität.
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8
                         hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                         transition-all duration-300"
            >
              <time className="text-sm text-slate-500 font-medium">
                {new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-cyan-400 group-hover:translate-x-1 transition-transform duration-200">
                Weiterlesen →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
