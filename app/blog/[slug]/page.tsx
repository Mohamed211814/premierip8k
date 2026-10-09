import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, BookOpen, Tag, Share2 } from 'lucide-react';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/content/blog-helpers';
import { BlogCard } from '@/components/blog/BlogCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { ArticleSchema } from '@/lib/seo/schema';
import { constructMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/config/site';
import { CtaBanner } from '@/components/home/CtaBanner';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return constructMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    image: post.featuredImage,
    canonical: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author.name],
  });
}

// Simple markdown heading parser to generate a table of contents
function extractHeadings(content: string) {
  const headingRegex = /^##\s+(.+)$/gm;
  const matches = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const title = match[1].trim();
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    matches.push({ title, id });
  }
  return matches;
}

// Simple markdown renderer for custom prose styles
function renderMarkdown(content: string) {
  // Convert Markdown tables, headings, bold, links, code, and lists to HTML safely
  let html = content
    .replace(/^###\s+(.+)$/gm, '<h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">$1</h3>')
    .replace(/^##\s+(.+)$/gm, (_, title) => {
      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      return `<h2 id="${id}" class="text-2xl font-extrabold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200 scroll-mt-24">${title}</h2>`;
    })
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-slate-700 italic">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 text-[#dd1111] font-mono text-xs border border-slate-200">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#dd1111] hover:text-[#1a088b] underline underline-offset-4 font-bold transition-colors">$1</a>')
    .replace(/^---\s*$/gm, '<hr class="my-8 border-slate-200" />');

  // Wrap paragraphs
  const paragraphs = html.split('\n\n').map((block) => {
    block = block.trim();
    if (!block) return '';
    if (
      block.startsWith('<h2') ||
      block.startsWith('<h3') ||
      block.startsWith('<hr') ||
      block.startsWith('<table') ||
      block.startsWith('|') ||
      block.startsWith('- ')
    ) {
      if (block.startsWith('- ')) {
        const items = block
          .split('\n')
          .filter((line) => line.startsWith('- '))
          .map((line) => `<li class="text-slate-700 text-sm mb-2 ml-4 list-disc">${line.replace(/^- \s*/, '')}</li>`)
          .join('');
        return `<ul class="my-4 space-y-1">${items}</ul>`;
      }
      if (block.startsWith('|')) {
        const rows = block.split('\n');
        const header = rows[0].split('|').filter(Boolean).map((cell) => `<th class="p-3 text-left font-bold text-white bg-[#1a088b] border border-slate-200 text-xs">${cell.trim()}</th>`).join('');
        const bodyRows = rows.slice(2).map((row) => {
          const cells = row.split('|').filter(Boolean).map((cell) => `<td class="p-3 border border-slate-200 text-xs text-slate-700">${cell.trim()}</td>`).join('');
          return `<tr class="hover:bg-slate-50">${cells}</tr>`;
        }).join('');
        return `<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-slate-200 rounded-xl overflow-hidden"><thead><tr>${header}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
      }
      return block;
    }
    return `<p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">${block}</p>`;
  });

  return paragraphs.join('\n');
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const headings = extractHeadings(post.content);
  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <div className="py-10 md:py-16 bg-white">
      <ArticleSchema post={post} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Blog', url: '/blog' },
            { name: post.category, url: `/blog?categorie=${post.categorySlug}` },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
        />

        {/* Article Header */}
        <header className="my-10">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
            <Link
              href={`/blog?categorie=${post.categorySlug}`}
              className="px-3 py-1 rounded-full bg-[#1a088b]/10 text-[#1a088b] font-bold border border-[#1a088b]/20 hover:bg-[#1a088b]/20 transition-colors"
            >
              {post.category}
            </Link>
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#dd1111]" />
              <span>Publié le {new Date(post.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#1a088b]" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pb-6 border-b border-slate-200">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a088b] flex items-center justify-center text-white font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{post.author.name}</p>
                <p className="text-xs text-slate-500">{post.author.role}</p>
              </div>
            </div>

            <ShareButtons title={post.title} url={articleUrl} />
          </div>
        </header>

        {/* Table of Contents Box */}
        {headings.length > 0 && (
          <div className="rounded-2xl bg-slate-50 p-6 border-2 border-slate-200 mb-10 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#dd1111]" />
              <span>Sommaire de l'article</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="text-slate-700 hover:text-[#dd1111] font-medium transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#dd1111] font-mono text-xs">→</span>
                    <span>{h.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div
          className="prose-custom max-w-none text-slate-700 mb-16"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* Tags */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-16 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-bold mr-2">
            <Tag className="w-3.5 h-3.5 text-[#dd1111]" />
            <span>Mots-clés :</span>
          </div>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="rounded-3xl bg-slate-50 p-6 sm:p-8 border-2 border-slate-200 mb-16 flex items-start gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#1a088b] flex items-center justify-center text-white font-bold flex-shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              À propos de {post.author.name}
            </h3>
            <p className="text-xs text-[#dd1111] font-bold mb-2">
              {post.author.role}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Spécialiste des technologies de transmission vidéo et d'optimisation réseau, il partage ses analyses pour vous aider à configurer et stabiliser vos flux de divertissement 4K.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="my-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8">
              Articles similaires recommandés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <BlogCard key={rel.slug} post={rel} />
              ))}
            </div>
          </div>
        )}

        <CtaBanner
          title="Envie de tester Premier IPTV sur votre équipement ?"
          subtitle="Découvrez nos abonnements ou demandez votre accès test 24h sans engagement."
        />
      </div>
    </div>
  );
}
