import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { getAllPosts } from '@/lib/content/blog-helpers';
import { Button } from '@/components/ui/Button';

export function LatestPostsSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#dd1111] mb-2 inline-block">
              Guides & Actualités Streaming
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Derniers articles et conseils techniques
            </h2>
          </div>
          <Button variant="outline" size="sm" href="/blog" className="self-start md:self-auto font-bold">
            <span>Explorer tous les articles</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl bg-white border border-slate-200 hover:border-[#dd1111]/50 hover:shadow-xl hover:shadow-[#1a088b]/10 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#dd1111]/10 text-[#dd1111] font-bold border border-[#dd1111]/20 text-[11px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-medium">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-[#dd1111] transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">{post.author.name}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#dd1111] hover:text-[#1a088b] font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Lire l’article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
