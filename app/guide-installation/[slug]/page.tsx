import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight, BookOpen, Lightbulb, Tv } from 'lucide-react';
import { installationGuides } from '@/lib/content/guides';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HowToSchema } from '@/lib/seo/schema';
import { constructMetadata } from '@/lib/seo/metadata';
import { CtaBanner } from '@/components/home/CtaBanner';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return installationGuides.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = installationGuides.find((g) => g.slug === slug);
  if (!guide) return {};

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.metaDescription,
    canonical: `/guide-installation/${guide.slug}`,
  });
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = installationGuides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = guide.relatedGuides
    ? installationGuides.filter((g) => guide.relatedGuides?.includes(g.slug))
    : [];

  return (
    <div className="py-10 md:py-16 bg-white">
      <HowToSchema guide={guide} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Guides d’installation', url: '/guide-installation' },
            { name: guide.title, url: `/guide-installation/${guide.slug}` },
          ]}
        />

        {/* Article Header */}
        <header className="my-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs">
            <Badge variant="primary">{guide.appName}</Badge>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200">
              Difficulté : {guide.difficulty}
            </span>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-[#dd1111]" />
              <span>{guide.estimatedTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            {guide.excerpt}
          </p>

          <div className="p-4 rounded-2xl bg-[#1a088b]/10 border border-[#1a088b]/20 text-xs text-slate-800 flex items-center gap-3">
            <Tv className="w-5 h-5 text-[#dd1111] flex-shrink-0" />
            <span>Matériel concerné : <strong className="text-slate-900 font-bold">{guide.device}</strong></span>
          </div>
        </header>

        {/* Prerequisites */}
        <div className="rounded-3xl bg-slate-50 p-6 sm:p-8 border border-slate-200 mb-12 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Prérequis avant de commencer</span>
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {guide.prerequisites.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#dd1111] mt-2 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Les étapes d'installation en détail
          </h2>

          {guide.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-3xl bg-white p-6 sm:p-8 border-2 border-slate-200 shadow-md hover:border-[#dd1111]/50 transition-colors relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#dd1111] to-[#1a088b] text-white font-extrabold text-base flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#dd1111]/20">
                  {step.stepNumber}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {step.tip && (
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Astuce Pro :</strong> {step.tip}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <div className="my-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Autres tutoriels qui pourraient vous intéresser
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedGuides.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/guide-installation/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#dd1111] hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {rel.title}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {rel.estimatedTime} • {rel.difficulty}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#dd1111]" />
                </Link>
              ))}
            </div>
          </div>
        )}

        <CtaBanner
          title="Vos identifiants ne sont pas encore configurés ?"
          subtitle="Commandez votre abonnement ou demandez un test 24h pour recevoir vos accès par email."
        />
      </div>
    </div>
  );
}
