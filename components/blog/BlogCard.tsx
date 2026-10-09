import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#dd1111]/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3.5">
          <Link
            href={`/blog?categorie=${post.categorySlug}`}
            className="px-3 py-1 rounded-full bg-[#dd1111]/10 text-[#dd1111] font-bold border border-[#dd1111]/20 hover:bg-[#dd1111]/20 transition-colors text-[11px]"
          >
            {post.category}
          </Link>
          <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-[#1a088b]" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#dd1111] transition-colors line-clamp-2 leading-snug">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 sm:px-7 py-4 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#1a088b] flex items-center justify-center text-white">
            <User className="w-3.5 h-3.5" />
          </div>
          <span className="text-slate-700 font-bold">{post.author.name}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-[#dd1111] hover:text-[#1a088b] font-bold flex items-center gap-1 group/btn transition-colors"
        >
          <span>Lire l'article</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
