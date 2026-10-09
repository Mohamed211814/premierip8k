import React from 'react';
import { Metadata } from 'next';
import { Zap, ShieldCheck, Clock, Check, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { pricingPlans, featureComparison } from '@/lib/content/pricing';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CtaBanner } from '@/components/home/CtaBanner';
import { ProductPricingSchema } from '@/lib/seo/schema';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Abonnement IPTV France : Tarifs & Offres 4K / FHD Sans Coupure',
  description:
    'Comparez nos offres d’abonnement IPTV 1, 3, 6 et 12 mois. Chaînes directes 4K, 65 000+ VOD, EPG 7 jours, serveurs européens stables et activation instantanée.',
  canonical: '/abonnement-iptv',
});

export default function AbonnementIptvPage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <ProductPricingSchema plans={pricingPlans} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Abonnement IPTV', url: '/abonnement-iptv' }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <Badge variant="primary" className="mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Offres Sans Engagement • Qualité 4K & FHD</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Nos formules d’<span className="gradient-text">abonnement IPTV</span> adaptées à vos besoins
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Profitez du meilleur service IPTV en France avec une diffusion haute définition fluide, une activation en 5 minutes et un support technique disponible 7j/7.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {pricingPlans.map((plan) => {
            const isHighlight = plan.isBestValue || plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 bg-white ${
                  isHighlight
                    ? 'border-2 border-[#dd1111] shadow-2xl shadow-[#dd1111]/20 scale-105 z-10'
                    : 'border border-slate-200 hover:border-[#1a088b]/40 hover:shadow-xl hover:shadow-slate-200/60'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-[#dd1111] to-[#1a088b] text-white shadow-lg shadow-[#dd1111]/40 uppercase tracking-wide">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-center pb-4 mb-4 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900 mb-1">
                      {plan.name}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      Accès {plan.duration} • {plan.screens} {plan.screens > 1 ? 'écrans' : 'écran'}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {plan.price.toFixed(2)} €
                      </span>
                    </div>
                    {plan.durationMonths > 1 && (
                      <p className="text-xs text-[#dd1111] font-bold mt-1">
                        Soit {plan.monthlyEquivalent.toFixed(2)} € / mois
                      </p>
                    )}
                    {plan.originalPrice && (
                      <p className="text-xs text-slate-400 line-through mt-0.5">
                        Au lieu de {plan.originalPrice.toFixed(2)} €
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-8 text-xs text-slate-700">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#dd1111] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Button
                    variant={isHighlight ? 'glow' : 'secondary'}
                    size="md"
                    href={plan.ctaLink}
                    className="w-full justify-center text-sm font-bold shadow-md"
                  >
                    {plan.ctaText}
                  </Button>
                  <p className="text-[10px] text-center text-slate-500 mt-2.5 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>Livraison immédiate par email</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Comparison Table */}
        <div className="my-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Tableau comparatif détaillé des fonctionnalités
            </h2>
            <p className="text-sm text-slate-600">
              Toutes nos formules incluent l’accès aux mêmes flux premium sans restriction de bande passante.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-lg overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-blue-900 bg-[#1a088b]">
                  <th className="p-4 font-bold text-white">Fonctionnalité</th>
                  <th className="p-4 font-bold text-center text-white">Offre 1 à 3 Mois</th>
                  <th className="p-4 font-bold text-center text-white">Offre 6 à 12 Mois</th>
                  <th className="p-4 font-bold text-center text-amber-300">Pack Famille 2 Écrans</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {featureComparison.flatMap((cat) => [
                  <tr key={cat.category} className="bg-slate-100 font-bold text-[#1a088b] text-xs">
                    <td colSpan={4} className="p-3 uppercase tracking-wider">
                      {cat.category}
                    </td>
                  </tr>,
                  ...cat.items.map((item) => (
                    <tr key={item.name} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-xs sm:text-sm font-semibold text-slate-800">
                        {item.name}
                      </td>
                      <td className="p-4 text-center text-xs text-slate-600">
                        {typeof item.basic === 'boolean' ? (
                          item.basic ? <Check className="w-4 h-4 text-emerald-600 mx-auto font-bold" /> : 'Non inclus'
                        ) : (
                          item.basic
                        )}
                      </td>
                      <td className="p-4 text-center text-xs text-slate-600">
                        {typeof item.standard === 'boolean' ? (
                          item.standard ? <Check className="w-4 h-4 text-emerald-600 mx-auto font-bold" /> : 'Non inclus'
                        ) : (
                          item.standard
                        )}
                      </td>
                      <td className="p-4 text-center text-xs font-bold text-[#dd1111]">
                        {typeof item.premium === 'boolean' ? (
                          item.premium ? <Check className="w-4 h-4 text-emerald-600 mx-auto font-bold" /> : 'Non inclus'
                        ) : (
                          item.premium
                        )}
                      </td>
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </div>

        {/* How It Works 3-Step Guide */}
        <div className="my-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#dd1111] mb-2 inline-block">
              Simplicité & Rapidité
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Comment activer votre abonnement en 3 étapes ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#dd1111]/10 text-[#dd1111] border border-[#dd1111]/20 flex items-center justify-center font-extrabold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Choisissez votre formule
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sélectionnez la durée d’abonnement souhaitée (1, 3, 6, 12 mois ou 2 écrans) selon vos besoins.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/20 flex items-center justify-center font-extrabold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Réception instantanée de vos codes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vos identifiants Xtream Codes et lien M3U vous sont envoyés par email sous 5 minutes avec le tutoriel pour votre appareil.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#dd1111] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 shadow-lg shadow-[#dd1111]/30">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Connectez-vous et profitez
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Entrez vos identifiants dans votre application (IPTV Smarters, TiviMate, IBO Player) et profitez de vos chaînes 4K.
              </p>
            </div>
          </div>
        </div>

        <CtaBanner
          title="Besoin d’un conseil avant de commander ?"
          subtitle="Notre équipe de support technique basée en France répond à toutes vos questions par email et WhatsApp."
          primaryCtaText="Nous Contacter"
          primaryCtaLink="/contact"
        />
      </div>
    </div>
  );
}
