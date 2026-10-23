import React from 'react';
import Link from 'next/link';
import { Check, Zap, Sparkles, Shield, HelpCircle } from 'lucide-react';
import { pricingPlans } from '@/lib/content/pricing';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface PricingSectionProps {
  showTitle?: boolean;
  limit?: number;
}

export function PricingSection({ showTitle = true, limit }: PricingSectionProps) {
  const plans = limit ? pricingPlans.slice(0, limit) : pricingPlans;

  return (
    <section
      id="tarifs"
      className="pt-24 pb-28 sm:py-20 lg:py-24 relative bg-white scroll-mt-24 md:scroll-mt-28"
    >
      <div id="pricing" aria-hidden="true" className="scroll-mt-24 md:scroll-mt-28" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge variant="primary" className="mb-3">
              <Zap className="w-3.5 h-3.5 text-[#dd1111]" />
              <span>Abonnement Premier IPTV Sans Engagement</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Premier IPTV : Tarifs et formules d'abonnement
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Choisissez votre formule Premier IPTV idéale. Tous nos abonnements Premier IPTV incluent l’accès complet aux flux 4K, à la VOD illimitée et au support technique francophone 7j/7.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 items-stretch my-6 sm:my-0">
          {plans.slice(0, 4).map((plan) => {
            const isBest = plan.isBestValue;
            const isPop = plan.isPopular;
            const isHighlight = isBest || isPop;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-white my-3 sm:my-0 border-2 border-[#dd1111] ${
                  isBest
                    ? 'ring-2 ring-[#dd1111]/30 shadow-2xl shadow-[#dd1111]/25 scale-100 lg:scale-105 z-10'
                    : isPop
                    ? 'shadow-xl shadow-[#dd1111]/15 scale-100 lg:scale-105 z-10'
                    : 'shadow-lg shadow-slate-200/70 hover:shadow-xl hover:shadow-[#dd1111]/15'
                }`}
              >
                {/* Popular / Best Value Ribbon */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-[#dd1111] to-[#1a088b] text-white shadow-lg shadow-[#dd1111]/30 uppercase tracking-wide whitespace-nowrap">
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
                    {plan.features.slice(0, 7).map((feat, idx) => {
                      const isAppGift = feat.toLowerCase().includes('application payante');

                      return (
                        <li key={idx} className="flex items-start gap-2">
                          {isAppGift ? (
                            <Sparkles className="w-4 h-4 text-[#dd1111] flex-shrink-0 mt-0.5" />
                          ) : (
                            <Check className="w-4 h-4 text-[#dd1111] flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`font-medium ${isAppGift ? 'text-[#dd1111] font-bold' : ''}`}>
                            {feat}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Action CTA */}
                <div>
                  <Button
                    variant={isHighlight ? 'glow' : 'secondary'}
                    size="md"
                    href={plan.ctaLink}
                    isExternal={true}
                    className="w-full justify-center text-sm font-bold shadow-md flex items-center gap-2 whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current flex-shrink-0" />
                    <span>{plan.ctaText}</span>
                  </Button>
                  <p className="text-[10px] text-center text-slate-500 mt-2.5 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-slate-400" />
                    <span>Activation Premier IPTV en 5 min via WhatsApp</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-screen banner */}
        <div className="mt-16 sm:mt-12 rounded-2xl bg-gradient-to-r from-[#1a088b] via-[#120563] to-[#dd1111] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-white/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#1a088b] flex items-center justify-center flex-shrink-0 shadow-lg font-bold">
              <Zap className="w-6 h-6 text-[#dd1111]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Premier IPTV : Besoin d'utiliser le service sur 2 téléviseurs simultanés ?
              </h4>
              <p className="text-xs sm:text-sm text-blue-100">
                Découvrez la formule <strong>Premier IPTV Pack Famille 2 Connexions</strong> à 99,99 € pour 12 mois complets.
              </p>
            </div>
          </div>
          <Button
            variant="white"
            size="md"
            href="https://wa.me/212779395271?text=Bonjour,%20je%20souhaite%20commander%20l%27abonnement%20Premier%20TV%20Pack%20Famille%202%20%C3%89crans%20(99,99%20%E2%82%AC)."
            isExternal={true}
            className="flex-shrink-0 flex items-center gap-2 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current flex-shrink-0 text-emerald-600" />
            <span>Commander Pack Famille</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
