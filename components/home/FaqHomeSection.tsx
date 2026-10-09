'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { homeFaqs } from '@/lib/content/faqs';
import { FAQPageSchema } from '@/lib/seo/schema';
import { Button } from '@/components/ui/Button';

export function FaqHomeSection() {
  const [openId, setOpenId] = useState<string | null>(homeFaqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <FAQPageSchema faqs={homeFaqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#dd1111] mb-2 inline-block">
            Questions Fréquentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tout ce que vous devez savoir avant de commencer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Des réponses claires à vos questions techniques et commerciales sur notre service Premier IPTV.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dd1111]"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#dd1111] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" size="sm" href="/faq" className="flex items-center gap-1.5 font-bold">
            <span>Voir toutes les questions fréquentes</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" href="/contact" className="font-semibold">
            Besoin d'aide ? Contactez notre support
          </Button>
        </div>
      </div>
    </section>
  );
}
