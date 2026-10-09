import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { BookOpen, Sparkles, Filter } from 'lucide-react';
import { getAllPosts, getAllCategories, searchPosts } from '@/lib/content/blog-helpers';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Blog & Actualités IPTV : Guides, Tutoriels & Optimisation Streaming',
  description:
    'Retrouvez tous nos articles et guides pratiques sur l’IPTV en France : tutoriels d’installation Smarters Pro et TiviMate, débit internet 4K, comparatifs et solutions anti-buffering.',
  canonical: '/blog',
});

interface BlogPageProps {
  searchParams: Promise<{ q?: string; categorie?: string }>;
}

export default async function BlogIndexPage({ searchParams }: BlogPageProps) {
  const { q = '', categorie = 'all' } = await searchParams;
  const categories = getAllCategories();
  const filteredPosts = searchPosts(q, categorie);

  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Blog & Guides', url: '/blog' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <Badge variant="primary" className="mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Centre de Connaissances & Guides Streaming</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Le Blog <span className="gradient-text">Premier IPTV</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Conseils d’experts, tutoriels d’installation pas à pas, comparatifs d’applications et astuces pour tirer le meilleur parti de votre abonnement.
          </p>
        </div>

        {/* Interactive Search & Filter (Client Component) */}
        <Suspense fallback={<div className="h-20" />}>
          <BlogSearch
            categories={categories}
            currentCategory={categorie}
            initialQuery={q}
          />
        </Suspense>

        {/* Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-3xl bg-slate-50 border border-slate-200 my-12">
            <p className="text-slate-800 font-bold text-base mb-2">
              Aucun article ne correspond à votre recherche.
            </p>
            <p className="text-xs text-slate-500">
              Essayez un autre mot-clé ou réinitialisez les filtres.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
