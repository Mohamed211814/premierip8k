import React from 'react';
import Link from 'next/link';
import { Check, Zap, Sparkles, Shield, HelpCircle } from 'lucide-react';
import { pricingPlans } from '@/lib/content/pricing';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface PricingSectionProps {
  showTitle?: boolean;
  limit?: number;
}

export function PricingSection({ showTitle = true, limit }: PricingSectionProps) {
  const plans = limit ? pricingPlans.slice(0, limit) : pricingPlans;

  return (
    <section id="tarifs" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="primary" className="mb-3">
              <Zap className="w-3.5 h-3.5 text-[#dd1111]" />
              <span>Abonnement Premier IPTV Sans Engagement</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Tarifs et formules d'abonnement Premier IPTV
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Choisissez votre formule Premier IPTV idéale. Tous nos abonnements Premier IPTV incluent l’accès complet aux flux 4K, à la VOD illimitée et au support technique francophone 7j/7.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.slice(0, 4).map((plan) => {
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
                {/* Popular / Best Value Ribbon */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-[#dd1111] to-[#1a088b] text-white shadow-lg shadow-[#dd1111]/30 uppercase tracking-wide">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Duration */}
                  <div className="text-center pb-4 mb-4 border-b border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Accès {plan.duration} Premier IPTV • {plan.screens} {plan.screens > 1 ? 'écrans' : 'écran'}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
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

                  {/* Features list */}
                  <ul className="space-y-2.5 mb-8 text-xs text-slate-700">
                    {plan.features.slice(0, 6).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#dd1111] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
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
                    <Shield className="w-3 h-3 text-slate-400" />
                    <span>Activation Premier IPTV en 5 min</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-screen banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#1a088b] via-[#120563] to-[#dd1111] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#1a088b] flex items-center justify-center flex-shrink-0 shadow-lg font-bold">
              <Zap className="w-6 h-6 text-[#dd1111]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Besoin d'utiliser Premier IPTV sur 2 téléviseurs en simultané ?
              </h4>
              <p className="text-xs sm:text-sm text-blue-100">
                Découvrez la formule <strong>Premier IPTV Pack Famille 2 Connexions</strong> à 99,99 € pour 12 mois complets.
              </p>
            </div>
          </div>
          <Button variant="primary" size="md" href="/contact?plan=premier-iptv-famille" className="bg-white text-[#1a088b] hover:bg-slate-100 hover:text-[#dd1111] shadow-lg font-bold flex-shrink-0">
            Commander Premier IPTV Famille
          </Button>
        </div>
      </div>
    </section>
  );
}
