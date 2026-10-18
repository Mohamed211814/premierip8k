import React from 'react';
import Link from 'next/link';
import { Tv, Cpu, Flame, Apple, Monitor, Layers, ChevronRight, CheckCircle2 } from 'lucide-react';
import { compatibleDevices } from '@/lib/content/devices';
import { Button } from '@/components/ui/Button';

export function CompatibilityShowcase() {
  const iconMap: Record<string, React.ElementType> = {
    Tv,
    Cpu,
    Flame,
    Apple,
    Monitor,
    Layers,
  };

  return (
    <section id="compatibilite" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#dd1111] mb-2 inline-block">
            Compatibilité Matérielle Premier IPTV
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Premier IPTV : Compatible instantanément avec tous vos écrans
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Pas besoin de nouveau matériel : configurez simplement votre abonnement Premier IPTV sur votre équipement actuel en quelques minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compatibleDevices.map((device) => {
            const Icon = iconMap[device.icon] || Tv;

            return (
              <div
                key={device.id}
                className="rounded-2xl glass-card bg-white p-6 border border-slate-200 hover:border-[#dd1111]/50 hover:shadow-xl hover:shadow-[#1a088b]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/20 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {device.name}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">
                        {device.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {device.description}
                  </p>

                  <div className="space-y-2 mb-4 text-xs">
                    <p className="text-slate-700 font-bold">
                      Lecteurs Premier IPTV recommandés :
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {device.recommendedApps.map((app) => (
                        <span
                          key={app}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] border border-slate-200 font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Configuration : {device.setupTime}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#dd1111] hover:text-[#1a088b] flex items-center gap-1 transition-colors"
                  >
                    <span>Support Premier IPTV</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" size="md" href="/contact">
            Besoin d'aide pour configurer Premier IPTV sur votre appareil ? Contactez notre support 7j/7
          </Button>
        </div>
      </div>
    </section>
  );
}
