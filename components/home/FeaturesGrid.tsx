import React from 'react';
import Link from 'next/link';
import { Tv, ShieldCheck, Clock, Layers, Smartphone, Headset, ChevronRight, Zap } from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      icon: Tv,
      title: 'Premier IPTV : Flux 4K UHD & FHD 60 FPS',
      description: 'Visionnez vos compétitions sportives et vos films avec Premier IPTV en profitant d’une netteté cristalline et d’une fluidité maximale à 60 images par seconde.',
      badge: 'Qualité native 4K',
    },
    {
      icon: ShieldCheck,
      title: 'Premier IPTV : Technologie Anti Freeze v5',
      description: 'Infrastructure de serveurs Premier IPTV redondante avec basculement automatique de charge pour éliminer les micro coupures et les temps de chargement.',
      badge: 'Stabilité Premier IPTV',
    },
    {
      icon: Clock,
      title: 'Premier IPTV : Guide TV (EPG) & Replay 72h',
      description: 'Consultez la grille des programmes Premier IPTV en direct et rattrapez vos émissions et matchs manqués jusqu’à 3 jours en arrière.',
      badge: 'Replay inclus',
    },
    {
      icon: Smartphone,
      title: 'Premier IPTV : Multi Appareils & Écrans',
      description: 'Votre service Premier IPTV fonctionne sans configuration complexe sur Smart TV Samsung, LG, boîtiers Android TV, Fire TV Stick, Apple TV, PC et smartphones.',
      badge: 'Multi écrans',
    },
    {
      icon: Layers,
      title: 'Premier IPTV : Vidéothèque VOD & Séries',
      description: 'Accédez au catalogue Premier IPTV de plus de 65 000 titres avec audio français, versions multilingues et sous titres mis à jour chaque semaine.',
      badge: 'VOD Premier IPTV',
    },
    {
      icon: Headset,
      title: 'Premier IPTV : Assistance Technique 7j/7',
      description: 'Une équipe d’experts Premier IPTV basée en France à votre disposition par email, formulaire et messagerie pour vous guider pas à pas.',
      badge: 'Support Premier IPTV',
    },
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#dd1111] mb-2 inline-block">
            Avantages Premier IPTV France
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Premier IPTV : Des performances pensées pour les exigences du direct
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            L’infrastructure Premier IPTV a été conçue pour surmonter les limites des flux traditionnels et vous garantir une expérience télévisuelle premier IPTV sans compromis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl glass-card bg-white p-7 hover:bg-white transition-all duration-300 border border-slate-200 hover:border-[#dd1111]/50 hover:shadow-xl hover:shadow-[#1a088b]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#dd1111] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#1a088b] bg-[#1a088b]/5 px-2.5 py-1 rounded-full border border-[#1a088b]/20">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#dd1111] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#dd1111]">
                  <Link href="#tarifs" className="flex items-center gap-1 hover:text-[#1a088b] transition-colors">
                    <span>Voir les offres Premier IPTV</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
