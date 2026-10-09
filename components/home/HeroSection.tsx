import React from 'react';
import Link from 'next/link';
import { Play, ShieldCheck, Zap, Tv, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-white">
      {/* Background Decorative Gradients in Royal Blue & Crimson */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-gradient-to-tr from-[#1a088b]/10 via-[#dd1111]/10 to-[#1a088b]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <Badge variant="primary" className="py-1.5 px-3.5">
                <Zap className="w-3.5 h-3.5 text-[#dd1111]" />
                <span>Premier IPTV France : Qualité 4K / FHD</span>
              </Badge>
              <span className="hidden sm:inline-flex items-center text-xs text-[#1a088b] bg-[#1a088b]/10 border border-[#1a088b]/20 rounded-full px-3 py-1 font-bold shadow-sm">
                ● Serveurs 100% Opérationnels
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Votre service{' '}
              <span className="gradient-text">premier IPTV</span>{' '}
              haute définition en France
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Accédez à plus de 18 000 chaînes de télévision en direct et 65 000 films et séries VOD en qualité 4K Ultra HD. Une stabilité éprouvée sans coupure grâce à notre technologie Anti-Freeze v5 et un support client francophone dédié 7j/7.
            </p>

            {/* Checklist highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg text-left text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <span className="font-medium">Flux 4K & FHD à 60 FPS réels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <span className="font-medium">Guide TV (EPG) & Replay 72h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <span className="font-medium">Compatible Smart TV, FireStick, Android</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <span className="font-medium">Sans engagement & activation immédiate</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                variant="glow"
                size="lg"
                href="/abonnement-iptv"
                className="w-full sm:w-auto shadow-xl shadow-[#dd1111]/30 font-bold"
              >
                <span>Découvrir nos offres</span>
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/test-iptv"
                className="w-full sm:w-auto font-bold"
              >
                <span>Demander un test 24h</span>
              </Button>
            </div>

            {/* Trust rating */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-600">
                <strong className="text-slate-900">99.8% de satisfaction client</strong> sur la fluidité des flux en France
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Visual TV Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing card border */}
              <div className="relative rounded-3xl glass-card-glow p-5 overflow-hidden border border-[#dd1111]/30 shadow-2xl bg-white">
                {/* TV Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#dd1111] animate-pulse" />
                    <span className="font-bold text-slate-900">Premier IPTV Live Stream</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#dd1111]/10 text-[#dd1111] font-mono text-[10px] border border-[#dd1111]/30 font-bold">
                    4K HDR • 60 FPS
                  </span>
                </div>

                {/* Simulated Stream Screen */}
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#1a088b] via-[#10045e] to-[#dd1111] border border-slate-200 flex flex-col items-center justify-center p-4 text-center overflow-hidden group shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(221,17,17,0.3),transparent_70%)]" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-[#dd1111] text-white flex items-center justify-center shadow-lg shadow-[#dd1111]/50 mb-3 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>

                  <h2 className="text-sm font-bold text-white mb-1">
                    Événements Sportifs & Cinéma en Direct
                  </h2>
                  <p className="text-[11px] text-blue-100">
                    Flux optimisé avec technologie Anti-Freeze v5
                  </p>

                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-white font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    <span>Bitrate: 18.4 Mbps</span>
                    <span className="text-[#ff9999] font-bold">Latence: 12ms (Paris)</span>
                  </div>
                </div>

                {/* Quick stats grid below player */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-200 text-center">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900">+18 000</p>
                    <p className="text-[10px] text-slate-500">Chaînes TV</p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-[#dd1111]">+65 000</p>
                    <p className="text-[10px] text-slate-500">Films & Séries</p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-[#1a088b]">99.9%</p>
                    <p className="text-[10px] text-slate-500">Uptime Serveur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
