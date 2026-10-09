import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Tv, Cpu, Flame, Apple, Monitor, Layers, Smartphone, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { compatibleDevices } from '@/lib/content/devices';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CtaBanner } from '@/components/home/CtaBanner';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Appareils Compatibles Premier IPTV : Smart TV, FireStick, Android, iOS, PC',
  description:
    'Liste exhaustive des téléviseurs, boîtiers et applications compatibles avec Premier IPTV : Samsung Tizen, LG webOS, Android TV, Fire TV Stick, Apple TV, VLC et MAG.',
  canonical: '/compatibilite',
});

export default function CompatibilitePage() {
  const iconMap: Record<string, React.ElementType> = {
    Tv,
    Cpu,
    Flame,
    Apple,
    Monitor,
    Layers,
    Smartphone,
  };

  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Compatibilité', url: '/compatibilite' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <Badge variant="primary" className="mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Compatibilité Universelle 100%</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Tous vos appareils et applications compatibles
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Notre service s’adapte à votre matériel existant. Profitez de vos chaînes 4K et de la VOD sur téléviseur de salon, clé de streaming, ordinateur ou smartphone.
          </p>
        </div>

        {/* Devices Deep-Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {compatibleDevices.map((device) => {
            const Icon = iconMap[device.icon] || Tv;

            return (
              <div
                key={device.id}
                className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#dd1111]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {device.name}
                      </h2>
                      <span className="text-xs font-semibold text-[#dd1111]">
                        {device.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {device.description}
                  </p>

                  <div className="space-y-4 mb-6 text-xs">
                    <div>
                      <p className="text-slate-700 font-bold mb-2">
                        Applications recommandées :
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {device.recommendedApps.map((app) => (
                          <span
                            key={app}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-slate-700 font-bold mb-1.5">
                        Protocoles pris en charge :
                      </p>
                      <p className="text-slate-600 font-mono text-[11px]">
                        {device.supportedProtocols.join(' • ')}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                      ⏱️ Temps moyen d'installation : <strong className="text-slate-900">{device.setupTime}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  {device.guideSlug ? (
                    <Button
                      variant="outline"
                      size="sm"
                      href={`/guide-installation/${device.guideSlug}`}
                      className="w-full justify-between text-xs"
                    >
                      <span>Voir le tutoriel d'installation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      href="/guide-installation"
                      className="w-full justify-between text-xs"
                    >
                      <span>Guide de configuration</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Operating Systems Overview */}
        <div className="my-20 rounded-3xl bg-slate-50 p-8 sm:p-12 border-2 border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Systèmes d'exploitation pris en charge
            </h2>
            <p className="text-sm text-slate-600">
              Notre infrastructure délivre des flux compatibles avec tous les environnements récents.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#dd1111] transition-colors">
              <p className="font-bold text-slate-900 text-base mb-1">Android et Google TV</p>
              <p className="text-xs text-slate-500 font-medium">Android 7.0 à 14+</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#dd1111] transition-colors">
              <p className="font-bold text-slate-900 text-base mb-1">Samsung Tizen OS</p>
              <p className="text-xs text-slate-500 font-medium">Smart TV 2017 à 2026</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#dd1111] transition-colors">
              <p className="font-bold text-slate-900 text-base mb-1">LG webOS</p>
              <p className="text-xs text-slate-500 font-medium">webOS 3.0 à 24+</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#dd1111] transition-colors">
              <p className="font-bold text-slate-900 text-base mb-1">Apple tvOS et iOS</p>
              <p className="text-xs text-slate-500 font-medium">iOS / tvOS 14 à 18+</p>
            </div>
          </div>
        </div>

        <CtaBanner
          title="Prêt à configurer votre appareil en 3 minutes ?"
          subtitle="Choisissez votre formule ou recevez un accès test 24h pour vérifier la compatibilité."
        />
      </div>
    </div>
  );
}
