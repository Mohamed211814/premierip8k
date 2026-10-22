import React from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck, ArrowRight, ShoppingCart, CheckCircle2, Flame, Sparkles } from 'lucide-react';

interface BlogCtaProps {
  position: 'top' | 'center' | 'bottom';
  className?: string;
  locale?: 'fr' | 'en';
  buttonText?: string;
}

export function BlogCta({ position, className = '', locale = 'fr', buttonText }: BlogCtaProps) {
  const isEn = locale === 'en';

  if (position === 'top') {
    return (
      <aside
        aria-label={isEn ? 'Order Premier IPTV Subscription' : 'Commander un abonnement Premier IPTV'}
        className={`my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-[#120557] to-slate-950 text-white shadow-xl border border-white/10 relative overflow-hidden not-prose ${className}`}
      >
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#dd1111]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-[#dd1111]/20 text-[#ff6b6b] border border-[#dd1111]/30">
              <Zap className="w-3 h-3 text-[#ff6b6b]" />
              <span>{isEn ? 'Instant 4K & FHD Access' : 'Accès Immédiat 4K & FHD'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
              {isEn
                ? 'Experience Premier IPTV with Anti-Freeze Technology'
                : 'Profitez du Meilleur Abonnement Premier IPTV en France'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isEn
                ? '+18,000 live channels, 4K VOD, 60 FPS sports streams, and 24/7 technical support.'
                : '+18 000 chaînes en direct, VOD 4K illimitée, technologie Anti-Freeze v5 et assistance réactive 7j/7.'}
            </p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-stretch md:items-end gap-2">
            <Link
              href="/#tarifs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#dd1111] hover:bg-[#b00d0d] shadow-lg shadow-[#dd1111]/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{buttonText || (isEn ? 'Get Your Subscription' : 'Découvrir nos abonnements')}</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </Link>
            <div className="flex items-center justify-center md:justify-end gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {isEn ? 'No commitment' : 'Sans engagement'}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {isEn ? '15-min activation' : 'Activation 15 min'}
              </span>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  if (position === 'center') {
    return (
      <aside
        aria-label={isEn ? 'Premier IPTV plans and pricing' : 'Offres et tarifs Premier IPTV'}
        className={`my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c0633] via-slate-900 to-[#1a088b]/90 text-white shadow-2xl border-2 border-[#dd1111]/30 relative overflow-hidden text-center not-prose ${className}`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#dd1111]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/10 text-white backdrop-blur-md border border-white/15 shadow-inner">
            <Flame className="w-3.5 h-3.5 text-[#ff5252]" />
            <span>{isEn ? 'High-Stability Anti-Freeze Servers' : 'Serveurs Haute Stabilité Anti-Coupure'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {isEn
              ? 'Looking for Smooth 60 FPS Sports & Live Events?'
              : 'Envie d\'une Diffusion Fluide à 60 FPS Sans Coupure ?'}
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isEn
              ? 'Never miss a crucial match due to buffering. Choose the plan that fits your setup and enjoy uninterrupted streaming on your Smart TV, FireStick, Android box, or mobile.'
              : 'Ne laissez plus le buffering gâcher vos grands rendez-vous sportifs et vos soirées cinéma. Choisissez la formule qui vous convient et profitez d\'une fluidité parfaite sur tous vos téléviseurs et appareils mobiles.'}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#tarifs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-[#dd1111] via-[#c40e0e] to-[#b00d0d] hover:brightness-110 shadow-2xl shadow-[#dd1111]/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>{buttonText || (isEn ? 'View Plans & Order Now' : 'Voir nos offres IPTV')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-xs text-slate-400 pt-1">
            {isEn ? (
              <>Flexible plans from <strong className="text-white">€5.41/month</strong> · Works on Smart TV, FireStick, Android &amp; Apple</>
            ) : (
              <>Formules flexibles dès <strong className="text-white">5,41 €/mois</strong> · Compatible Smart TV, FireStick, Android &amp; Apple</>
            )}
          </p>
        </div>
      </aside>
    );
  }

  // position === 'bottom'
  return (
    <aside
      aria-label={isEn ? 'Complete your Premier IPTV order' : 'Finaliser la commande Premier IPTV'}
      className={`my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-[#120557] to-slate-950 text-white shadow-2xl border border-white/15 relative overflow-hidden not-prose ${className}`}
    >
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#1a088b]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isEn ? 'Satisfaction & Stability Guaranteed' : 'Satisfaction & Stabilité Garanties'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
            {isEn
              ? 'Upgrade Your Entertainment with Premier IPTV'
              : 'Passez à la Vitesse Supérieure avec Premier IPTV'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isEn
              ? 'Order your subscription with complete peace of mind (1, 3, 6, or 12 months) and receive instant credentials with step-by-step guidance.'
              : 'Commandez votre abonnement en toute simplicité (1, 3, 6 ou 12 mois) et recevez immédiatement vos identifiants de connexion avec assistance pas à pas.'}
          </p>
        </div>

        <div className="w-full lg:w-auto flex-shrink-0 flex flex-col items-center lg:items-end gap-2.5">
          <Link
            href="/#tarifs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-base text-white bg-[#dd1111] hover:bg-[#b00d0d] shadow-xl shadow-[#dd1111]/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{buttonText || (isEn ? 'Order Now — Direct Access' : 'Choisir mon abonnement')}</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
          <span className="text-xs text-slate-400">
            {isEn ? '24/7 dedicated customer support' : 'Support francophone réactif disponible 7j/7'}
          </span>
        </div>
      </div>
    </aside>
  );
}
