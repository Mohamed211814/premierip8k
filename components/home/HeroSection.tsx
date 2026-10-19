import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ShieldCheck, Zap, Tv, CheckCircle2, ChevronRight, Star, Film, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36 text-white min-h-[640px] flex items-center justify-center">
      {/* Background Posters Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.jpg"
          alt="Abonnement Premier IPTV : Films et séries 4K en streaming"
          fill
          priority
          fetchPriority="high"
          quality={70}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
          className="object-cover object-center"
        />
      </div>

      {/* Multi-layered Overlays for High Contrast & Rich Aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090333]/92 via-[#120563]/88 to-[#090333]/95 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(221,17,17,0.25),transparent_70%)] -z-10 pointer-events-none" />
      
      {/* Top & Bottom Soft Fade */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/10 to-transparent -z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold bg-[#dd1111] text-white shadow-lg shadow-[#dd1111]/40 uppercase tracking-wide border border-white/20">
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Premier IPTV France • N°1 des Abonnements IPTV 4K</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white backdrop-blur-md border border-white/25 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Serveurs Premier IPTV 100% Opérationnels</span>
            </span>
          </div>

          {/* Main Centered Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] via-white to-[#9d97ff]">
              Premier IPTV
            </span>{' '}
            : Votre service haute définition en France
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl font-normal drop-shadow">
            <strong className="text-white font-bold">Premier IPTV</strong> : choisissez l’excellence et accédez à plus de <strong className="text-white font-bold">22 000 chaînes Premier IPTV</strong> en direct et <strong className="text-white font-bold">160 000 films et séries VOD</strong> en qualité 4K Ultra HD. La stabilité du service premier IPTV sans coupure grâce aux serveurs Anti Freeze v5.
          </p>

          {/* Centered Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 w-full max-w-3xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:bg-white/15 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#ff5252] flex-shrink-0" />
              <span>Flux Premier IPTV 4K 60 FPS</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:bg-white/15 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#ff5252] flex-shrink-0" />
              <span>Anti Freeze v5 Premier IPTV</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:bg-white/15 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#ff5252] flex-shrink-0" />
              <span>Premier IPTV Multi Appareils</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:bg-white/15 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#ff5252] flex-shrink-0" />
              <span>Premier IPTV Sans Engagement</span>
            </div>
          </div>

          {/* Centered Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <Button
              variant="glow"
              size="lg"
              href="#tarifs"
              className="w-full sm:w-auto shadow-2xl shadow-[#dd1111]/50 font-extrabold text-base px-8 py-4 bg-[#dd1111] hover:bg-[#b00d0d] text-white border-2 border-white/20"
            >
              <span>Découvrir les offres Premier IPTV</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              variant="white"
              size="lg"
              href="https://wa.me/212779395271?text=Bonjour,%20je%20souhaite%20commander%20un%20abonnement%20Premier%20TV."
              isExternal={true}
              className="w-full sm:w-auto font-bold text-base px-8 py-4 shadow-xl flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current text-emerald-600" />
              <span>Commander sur WhatsApp</span>
            </Button>
          </div>

          {/* Centered Trust and Rating */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/15 text-xs text-blue-100">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <p>
              <strong className="text-white font-bold">99.8% de satisfaction client Premier IPTV</strong> • Activation transmise en moins de 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
