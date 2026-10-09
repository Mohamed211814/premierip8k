import React from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function CtaBanner({
  title = "Prêt à transformer votre expérience télévisuelle ?",
  subtitle = "Rejoignez des milliers d'utilisateurs satisfaits en France et profitez de vos flux 4K dès aujourd'hui.",
  primaryCtaText = "Choisir mon abonnement",
  primaryCtaLink = "/abonnement-iptv",
  secondaryCtaText = "Demander un test 24h",
  secondaryCtaLink = "/test-iptv",
}: CtaBannerProps) {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#1a088b] via-[#200a8a] to-[#dd1111] shadow-2xl overflow-hidden text-center text-white border-2 border-white/20">
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold bg-white/20 text-white border border-white/30 mb-4 shadow-sm backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Activation instantanée en 5 minutes</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                href={primaryCtaLink}
                className="w-full sm:w-auto bg-white text-[#1a088b] hover:bg-slate-100 hover:text-[#dd1111] shadow-2xl font-extrabold text-base"
              >
                <span>{primaryCtaText}</span>
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={secondaryCtaLink}
                className="w-full sm:w-auto bg-white/15 text-white border border-white/40 hover:bg-white hover:text-[#1a088b] font-bold text-base"
              >
                <span>{secondaryCtaText}</span>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300 font-bold" />
                <span className="text-white font-medium">Sans engagement</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300 font-bold" />
                <span className="text-white font-medium">Support français 7j/7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300 font-bold" />
                <span className="text-white font-medium">Garantie 99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
