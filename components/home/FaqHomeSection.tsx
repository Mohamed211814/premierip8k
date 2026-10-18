'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, MessageSquare, Search, HelpCircle, ShieldCheck } from 'lucide-react';
import { allFaqs } from '@/lib/content/faqs';
import { FAQPageSchema } from '@/lib/seo/schema';
import { Button } from '@/components/ui/Button';

type CategoryFilter = 'all' | 'general' | 'technique' | 'installation' | 'abonnement' | 'legalite';

interface CategoryTab {
  id: CategoryFilter;
  label: string;
}

const categories: CategoryTab[] = [
  { id: 'all', label: 'Toutes les questions' },
  { id: 'general', label: 'Général & Chaînes' },
  { id: 'technique', label: 'Technique & FAI' },
  { id: 'installation', label: 'Installation' },
  { id: 'abonnement', label: 'Tarifs & Formules' },
  { id: 'legalite', label: 'Légalité & Sécurité' },
];

export function FaqHomeSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(allFaqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'all' || faq.category === selectedCategory;

      const normalizedQuery = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !normalizedQuery ||
        faq.question.toLowerCase().includes(normalizedQuery) ||
        faq.answer.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <FAQPageSchema faqs={allFaqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#dd1111] mb-2 inline-block">
            Questions Fréquentes Premier IPTV
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Premier IPTV : Tout ce que vous devez savoir sur notre service
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Des réponses complètes à vos questions techniques, juridiques et commerciales sur l’abonnement Premier IPTV en France.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-6 relative">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une question (ex: Paris Première, amende, légalité, installer...)"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#dd1111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#dd1111]/20 text-sm text-slate-900 placeholder:text-slate-400 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-full px-2 py-0.5"
              >
                Effacer
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count =
              cat.id === 'all'
                ? allFaqs.length
                : allFaqs.filter((f) => f.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1a088b] text-white shadow-md shadow-[#1a088b]/20 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isActive ? 'bg-[#dd1111] text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-white border-[#dd1111]/60 shadow-md shadow-[#dd1111]/5'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dd1111] rounded-2xl"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#dd1111] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 rounded-b-2xl">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 border border-slate-200">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-800 mb-1">
              Premier IPTV FAQ : Aucune question trouvée pour cette recherche
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Essayez un autre mot clé ou réinitialisez les filtres.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#dd1111] text-white text-xs font-bold hover:bg-[#b00d0d] transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button variant="secondary" size="md" href="/contact" className="font-bold">
            <MessageSquare className="w-4 h-4 text-[#dd1111]" />
            <span>Une autre question sur Premier IPTV ? Contactez notre support 7j/7</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
