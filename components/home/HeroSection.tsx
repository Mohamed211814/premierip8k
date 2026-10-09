import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ShieldCheck, Zap, Tv, CheckCircle2, ChevronRight, Star, Film, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36 text-white min-h-[640px] flex items-center justify-center">
      {/* Background Posters Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.jpg"
          alt="Films et séries disponibles sur Premier IPTV"
          fill
          priority
          sizes="100vw"
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
              <span>Premier IPTV France • 4K & FHD 60 FPS</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white backdrop-blur-md border border-white/25 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Serveurs 100% Opérationnels</span>
            </span>
          </div>

          {/* Main Centered Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl drop-shadow-lg">
            Votre service{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] via-white to-[#9d97ff]">
              premier IPTV
            </span>{' '}
            haute définition en France
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl font-normal drop-shadow">
            Accédez instantanément à plus de <strong className="text-white font-bold">18 000 chaînes</strong> en direct et <strong className="text-white font-bold">65 000 films et séries VOD</strong> en qualité 4K Ultra HD. Une stabilité prouvée sans coupure grâce à notre technologie Anti-Freeze v5.
          </p>

          {/* Centered Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 w-full max-w-3xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:bg-white/15 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#ff5252] flex-shrink-0" />
              <span>Flux 4K à 60 FPS</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:bg-white/15 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#ff5252] flex-shrink-0" />
              <span>Anti-Freeze v5</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:bg-white/15 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#ff5252] flex-shrink-0" />
              <span>Multi-Appareils</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:bg-white/15 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#ff5252] flex-shrink-0" />
              <span>Sans Engagement</span>
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
              <span>Découvrir nos offres</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto font-bold text-base px-8 py-4 bg-white text-[#1a088b] hover:bg-slate-100 hover:text-[#dd1111] shadow-xl"
            >
              <span>Contacter le support</span>
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
              <strong className="text-white font-bold">99.8% de satisfaction client</strong> • Activation transmise en moins de 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
