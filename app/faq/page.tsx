'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, Search, X, MessageSquare, Phone, Mail } from 'lucide-react';
import { allFaqs } from '@/lib/content/faqs';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FAQPageSchema } from '@/lib/seo/schema';
import { siteConfig } from '@/lib/config/site';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(allFaqs[0]?.id || null);

  const categories = [
    { id: 'all', name: 'Toutes les questions' },
    { id: 'general', name: 'Général & Offres' },
    { id: 'technique', name: 'Débit & Technique' },
    { id: 'installation', name: 'Installation & Apps' },
    { id: 'abonnement', name: 'Abonnement & Paiement' },
    { id: 'legalite', name: 'Support & Sécurité' },
  ];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="py-10 md:py-16 bg-white">
      <FAQPageSchema faqs={allFaqs} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <Badge variant="primary" className="mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Centre d'Aide & Questions Fréquentes</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Foire Aux Questions <span className="gradient-text">Premier IPTV</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Trouvez des réponses immédiates à toutes vos questions sur nos abonnements, nos flux 4K, le débit requis et la configuration de vos appareils.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xl mx-auto mb-8">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une question (ex: débit, Smart TV, M3U...)"
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none shadow-sm transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#dd1111] text-white shadow-md shadow-[#dd1111]/25 font-bold'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-200 hover:border-[#dd1111]/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dd1111]"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#dd1111] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-700 font-bold text-sm mb-2">
                Aucune question trouvée pour votre recherche.
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Réinitialiser la recherche
              </Button>
            </div>
          )}
        </div>

        {/* Support Direct Contacts */}
        <div className="rounded-3xl bg-slate-50 p-8 sm:p-12 border-2 border-slate-200 text-center mb-16 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
            Vous ne trouvez pas la réponse à votre question ?
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Notre équipe de support technique basée en France est à votre disposition 7j/7 pour répondre à toutes vos interrogations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center">
              <Mail className="w-6 h-6 text-[#dd1111] mb-2" />
              <p className="text-xs font-bold text-slate-900">Par Email</p>
              <p className="text-[11px] text-slate-500 mt-1">{siteConfig.contact.supportEmail}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center">
              <Phone className="w-6 h-6 text-emerald-600 mb-2" />
              <p className="text-xs font-bold text-slate-900">Téléphone France</p>
              <p className="text-[11px] text-slate-500 mt-1">{siteConfig.contact.phone}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center">
              <MessageSquare className="w-6 h-6 text-[#1a088b] mb-2" />
              <p className="text-xs font-bold text-slate-900">WhatsApp & Telegram</p>
              <p className="text-[11px] text-slate-500 mt-1">Réponse sous 15 min</p>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="primary" size="md" href="/contact">
              Accéder au formulaire de contact
            </Button>
          </div>
        </div>

        <CtaBanner />
      </div>
    </div>
  );
}
