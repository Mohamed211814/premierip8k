import React from 'react';
import { Server, Activity, Globe, Shield, Wifi, Zap } from 'lucide-react';

export function FranceAdvantageSection() {
  const points = [
    {
      icon: Server,
      title: 'Datacenters Européens & Peering Direct',
      description: 'Connexions directes aux points d’échange internet majeurs (France-IX Paris, AMS-IX). Temps de latence minimal (< 15 ms).',
    },
    {
      icon: Wifi,
      title: 'Optimisé pour les FAI Français',
      description: 'Flux calibrés pour fonctionner sans bridage sur Orange, Free, SFR, Bouygues Telecom et les réseaux mobiles 4G/5G.',
    },
    {
      icon: Globe,
      title: 'Chaînes Nationales & Régionales',
      description: 'Accès complet aux chaînes françaises en qualité native 1080p 50/60 FPS et 4K HDR avec EPG complet.',
    },
    {
      icon: Activity,
      title: 'Haute Disponibilité Soirées de Match',
      description: 'Infrastructure élastique absorbant les pics d’audience lors des rencontres de Ligue des Champions et grands tournois.',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-card-glow bg-white p-8 sm:p-12 border border-[#dd1111]/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#dd1111]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#dd1111] mb-2 inline-block">
                Infrastructure Dédiée France
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Une diffusion pensée pour le public français
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Le streaming IPTV de qualité dépend avant tout de la proximité des serveurs et de l’absence d’intermédiaires lents. Notre architecture garantit une fluidité continue sur tout le territoire métropolitain.
              </p>
              <div className="flex items-center gap-3 text-xs text-white bg-[#1a088b] p-3.5 rounded-xl shadow-md font-semibold">
                <Shield className="w-5 h-5 text-[#dd1111] flex-shrink-0" />
                <span>Garantie de non-saturation réseau aux heures de pointe</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2 hover:border-[#1a088b]/30 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#dd1111]/10 text-[#dd1111] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
