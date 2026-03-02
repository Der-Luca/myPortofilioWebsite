'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function BlogFeatured({ post }) {
  if (!post) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-cyan-400" />
        <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
          Featured Article
        </span>
      </div>

      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10
                       hover:from-cyan-500/20 hover:via-blue-500/10 hover:to-purple-500/20
                       hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]
                       transition-all duration-500 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto min-h-[300px] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30
                           group-hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent md:bg-gradient-to-r" />
              
              {/* Tags */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} 
                        className="px-3 py-1.5 text-xs font-medium bg-gray-950/80 text-cyan-400 
                                  rounded-full border border-cyan-500/30 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('de-DE', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white 
                          group-hover:text-cyan-400 transition-colors duration-300 mb-4">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {post.description}
              </p>

              {/* Author & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-sm text-slate-500">{post.authorRole}</p>
                </div>
                
                <span className="inline-flex items-center gap-2 text-cyan-400 font-medium
                               group-hover:gap-3 transition-all duration-200">
                  Weiterlesen
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}
