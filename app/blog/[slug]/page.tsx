import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { constructMetadata } from '@/lib/seo/metadata';
import { ArticleSchema } from '@/lib/seo/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

import { BlogCta } from '@/components/blog/BlogCta';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Splits HTML content around the middle <h2> tag (or middle paragraph)
 * to allow natural, responsive insertion of in-content conversion elements.
 */
function splitContentAtMiddle(html: string): [string, string] {
  const h2Matches = [...html.matchAll(/<h2[^>]*>/gi)];
  if (h2Matches.length >= 2) {
    const middleIndex = Math.floor(h2Matches.length / 2);
    const targetMatch = h2Matches[middleIndex];
    const splitPos = targetMatch.index ?? 0;
    return [html.slice(0, splitPos), html.slice(splitPos)];
  }

  const pMatches = [...html.matchAll(/<\/p>/gi)];
  if (pMatches.length >= 2) {
    const middleIndex = Math.floor(pMatches.length / 2);
    const targetMatch = pMatches[middleIndex];
    const splitPos = (targetMatch.index ?? 0) + targetMatch[0].length;
    return [html.slice(0, splitPos), html.slice(splitPos)];
  }

  return [html, ''];
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.isPublished) {
    return {};
  }

  return constructMetadata({
    title: post.seoTitle || post.title,
    description: post.metaDescription,
    canonical: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt || post.publishedAt,
    authors: post.author?.name ? [post.author.name] : undefined,
    image: post.featuredImage,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.isPublished) {
    notFound();
  }

  const [contentFirstHalf, contentSecondHalf] = splitContentAtMiddle(post.content);
  const isEnglish = post.slug.startsWith('what-is') || post.tags?.some((t) => t.includes('premier sports'));
  const locale: 'fr' | 'en' = isEnglish ? 'en' : 'fr';

  return (
    <>
      <ArticleSchema post={post} />

      <article className="py-10 md:py-16 bg-white min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: post.title, url: `/blog/${post.slug}` }]} />

          <header className="my-8">
            {post.category && (
              <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-[#dd1111] bg-[#dd1111]/10 px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
              {post.author?.name && (
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <User className="w-4 h-4 text-[#1a088b]" />
                  <span>{post.author.name}</span>
                </div>
              )}
              {post.publishedAt && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString(isEnglish ? 'en-GB' : 'fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              )}
              {post.readingTime && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{post.readingTime}</span>
                </div>
              )}
            </div>
          </header>

          {post.featuredImage && (
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg border border-slate-200">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          {/* CTA 1: Above Content */}
          <BlogCta position="top" locale={locale} />

          {/* Post Content - First Half */}
          <div
            className="prose-custom max-w-none text-base sm:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: contentFirstHalf }}
          />

          {/* CTA 2: Center of Content */}
          {contentSecondHalf && (
            <>
              <BlogCta position="center" locale={locale} />
              <div
                className="prose-custom max-w-none text-base sm:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: contentSecondHalf }}
              />
            </>
          )}

          {/* CTA 3: Bottom of Content */}
          <BlogCta position="bottom" locale={locale} />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase mr-2">
                {isEnglish ? 'Tags:' : 'Tags :'}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}
