import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, CheckCircle2, Tv, Sparkles, HelpCircle } from 'lucide-react';
import { installationGuides } from '@/lib/content/guides';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CtaBanner } from '@/components/home/CtaBanner';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Guides d’Installation IPTV 2026 : Smart TV, FireStick, TiviMate, Smarters Pro',
  description:
    'Tutoriels pas à pas pour installer et configurer votre abonnement IPTV sur Smart TV Samsung/LG, Fire TV Stick, Android Box, Apple TV et VLC. Configuration en 3 minutes.',
  canonical: '/guide-installation',
});

export default function GuideInstallationPage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Guides d’installation', url: '/guide-installation' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <Badge variant="primary" className="mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tutoriels Pas à Pas Illustrés</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Guides d'installation et de configuration IPTV
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Suivez nos tutoriels simples et détaillés pour configurer votre abonnement sur votre téléviseur, votre boîtier ou votre application favorite en moins de 5 minutes.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {installationGuides.map((guide) => (
            <div
              key={guide.slug}
              className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#dd1111]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1a088b]/10 text-[#1a088b] font-bold border border-[#1a088b]/20 text-[11px]">
                    {guide.appName}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-[#dd1111]" />
                    <span>{guide.estimatedTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#dd1111] transition-colors leading-snug">
                  <Link href={`/guide-installation/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {guide.excerpt}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs mb-6">
                  <p className="text-slate-500 mb-1 font-semibold">Appareil cible :</p>
                  <p className="text-slate-900 font-bold">{guide.device}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Button
                  variant="primary"
                  size="sm"
                  href={`/guide-installation/${guide.slug}`}
                  className="w-full justify-center text-xs font-bold"
                >
                  <span>Suivre le tutoriel</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Support helper */}
        <div className="rounded-3xl bg-slate-50 p-8 sm:p-10 border-2 border-slate-200 text-center max-w-3xl mx-auto my-12">
          <HelpCircle className="w-10 h-10 text-[#dd1111] mx-auto mb-4" />
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">
            Besoin d’aide pour installer votre application ?
          </h3>
          <p className="text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Notre support technique vous accompagne pas à pas pour la configuration de vos identifiants Xtream Codes ou lien M3U.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="md" href="/contact">
              Contacter l'assistance technique
            </Button>
            <Button variant="outline" size="md" href="/faq">
              Consulter la FAQ
            </Button>
          </div>
        </div>

        <CtaBanner
          title="Prêt à profiter de vos programmes en 4K ?"
          subtitle="Commandez votre abonnement ou demandez un test 24h dès maintenant."
        />
      </div>
    </div>
  );
}
