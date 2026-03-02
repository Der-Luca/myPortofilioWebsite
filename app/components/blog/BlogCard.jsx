'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link 
        href={`/blog/${post.slug}`}
        className="block h-full"
      >
        <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm
                        hover:bg-white/[0.05] hover:border-cyan-500/30 
                        hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                        transition-all duration-300 overflow-hidden">
          {/* Featured Image / Gradient Header */}
          <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 
                         group-hover:from-cyan-500/30 group-hover:via-blue-500/20 group-hover:to-purple-500/30
                         transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
            
            {/* Tags */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} 
                      className="px-2 py-1 text-xs font-medium bg-gray-950/80 text-cyan-400 
                                rounded-full border border-cyan-500/20 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium 
                             bg-cyan-500 text-gray-950 rounded-full">
                Featured
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('de-DE', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 
                          transition-colors duration-200 line-clamp-2 mb-3">
              {post.title}
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
              {post.description}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 
                            flex items-center justify-center">
                <User className="w-4 h-4 text-gray-950" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{post.author}</p>
                <p className="text-xs text-slate-500">{post.authorRole}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 
                                    group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
