import React from 'react';
import { Server, Activity, Globe, Shield, Wifi, Zap } from 'lucide-react';

export function FranceAdvantageSection() {
  const points = [
    {
      icon: Server,
      title: 'Datacenters Premier IPTV & Peering Direct',
      description: 'Connexions directes des serveurs Premier IPTV aux points d’échange internet majeurs en France (France IX Paris). Temps de latence minimal (< 15 ms).',
    },
    {
      icon: Wifi,
      title: 'Premier IPTV Optimisé pour les FAI Français',
      description: 'Flux Premier IPTV calibrés pour fonctionner sans bridage sur Orange, Free, SFR, Bouygues Telecom et réseaux mobiles 4G/5G.',
    },
    {
      icon: Globe,
      title: 'Chaînes Premier IPTV Nationales & Régionales',
      description: 'Accès complet au bouquet Premier IPTV français en qualité native 1080p 50/60 FPS et 4K HDR avec EPG complet.',
    },
    {
      icon: Activity,
      title: 'Haute Disponibilité Premier IPTV Soirées de Match',
      description: 'Infrastructure Premier IPTV élastique absorbant les pics d’audience lors des rencontres de Ligue des Champions et tournois majeurs.',
    },
  ];

  return (
    <section id="serveurs" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-card-glow bg-white p-8 sm:p-12 border border-[#dd1111]/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#dd1111]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#dd1111] mb-2 inline-block">
                Infrastructure Dédiée Premier IPTV France
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Une diffusion Premier IPTV pensée pour le public français
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Le streaming premier IPTV de qualité dépend avant tout de la proximité des serveurs et de l’absence d’intermédiaires lents. L’architecture Premier IPTV garantit une fluidité continue sur tout le territoire.
              </p>
              <div className="flex items-center gap-3 text-xs text-white bg-[#1a088b] p-3.5 rounded-xl shadow-md font-semibold">
                <Shield className="w-5 h-5 text-[#dd1111] flex-shrink-0" />
                <span>Garantie Premier IPTV de non saturation réseau aux heures de pointe</span>
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
