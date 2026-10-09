'use client';

import React, { useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, Filter } from 'lucide-react';
import { BlogCategory } from '@/types/blog';

interface BlogSearchProps {
  categories: BlogCategory[];
  currentCategory?: string;
  initialQuery?: string;
}

export function BlogSearch({
  categories,
  currentCategory = 'all',
  initialQuery = '',
}: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('categorie') || currentCategory
  );
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilter(query, selectedCategory);
  };

  const applyFilter = (q: string, cat: string) => {
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (cat && cat !== 'all') params.set('categorie', cat);

    startTransition(() => {
      router.push(`/blog?${params.toString()}`);
    });
  };

  const handleCategoryClick = (catSlug: string) => {
    const nextCat = selectedCategory === catSlug ? 'all' : catSlug;
    setSelectedCategory(nextCat);
    applyFilter(query, nextCat);
  };

  const handleClear = () => {
    setQuery('');
    setSelectedCategory('all');
    router.push('/blog');
  };

  return (
    <div className="mb-12 space-y-6">
      {/* Search Input Bar */}
      <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un tutoriel, une application, un guide 4K..."
            className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none shadow-md"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                applyFilter('', selectedCategory);
              }}
              className="absolute right-20 text-slate-400 hover:text-slate-700 p-1"
              aria-label="Effacer la recherche"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 px-4 py-2 rounded-xl bg-[#dd1111] hover:bg-[#b80c0c] text-white text-xs font-bold shadow-md shadow-[#dd1111]/30 transition-colors"
          >
            Rechercher
          </button>
        </div>
      </form>

      {/* Categories Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button
          type="button"
          onClick={() => handleCategoryClick('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedCategory === 'all'
              ? 'bg-[#dd1111] text-white shadow-md shadow-[#dd1111]/30'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
          }`}
        >
          Tous les articles
        </button>

        {categories.map((category) => {
          const isSelected = selectedCategory === category.slug;
          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => handleCategoryClick(category.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? 'bg-[#dd1111] text-white shadow-md shadow-[#dd1111]/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {(query || (selectedCategory && selectedCategory !== 'all')) && (
        <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
          <span>Filtres actifs</span>
          <button
            onClick={handleClear}
            className="text-[#dd1111] hover:underline font-bold flex items-center gap-1 ml-2"
          >
            <X className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>
        </div>
      )}
    </div>
  );
}
