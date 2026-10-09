import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Zap, Server, Wifi, Tv, CheckCircle2, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PricingSection } from '@/components/home/PricingSection';
import { CtaBanner } from '@/components/home/CtaBanner';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Meilleur IPTV France 2026 : Service 4K & Serveurs Stables Sans Coupure',
  description:
    'Découvrez le meilleur service IPTV en France : flux 4K/FHD optimisés pour les box Orange, Free, SFR et Bouygues. Serveurs européens ultra-rapides, EPG français et support 7j/7.',
  canonical: '/iptv-france',
});

export default function IptvFrancePage() {
  const ispList = [
    { name: 'Orange Livebox', tech: 'Fibre 10G-EPON / VDSL', status: 'Compatibilité 100% Optimale' },
    { name: 'Free Freebox (Ultra / Pop)', tech: 'Fibre 10G EPON', status: 'Flux 4K HDR Instantané' },
    { name: 'SFR Box 8', tech: 'Fibre FTTH / Coaxial', status: 'Bande passante non bridée' },
    { name: 'Bouygues Bbox (Must / Ultym)', tech: 'Fibre Wi-Fi 6E', status: 'Latence < 12ms' },
  ];

  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'IPTV France', url: '/iptv-france' }]} />

        {/* Hero Section dedicated to France */}
        <div className="my-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Badge variant="primary" className="mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Optimisé pour la France métropolitaine</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Le service <span className="gradient-text">IPTV France</span> de référence pour la 4K sans coupure
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Vous recherchez le <strong>meilleur IPTV en France</strong> pour regarder vos événements sportifs en direct et vos séries en ultra haute définition ? Notre infrastructure est directement interconnectée aux réseaux français pour garantir une fluidité absolue même lors des grandes affluences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="lg" href="/abonnement-iptv">
                <span>Voir les abonnements France</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" size="lg" href="/test-iptv">
                <span>Essai gratuit 24h</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">Serveurs hébergés en Europe (Paris / Francfort)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">Zéro bridage sur Orange, Free, SFR, Bouygues</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-6 sm:p-8 border-2 border-[#1a088b]/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#dd1111]/10 to-[#1a088b]/10 rounded-full blur-2xl pointer-events-none" />
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-[#dd1111]" />
                <span>Indicateurs Réseau France Métropolitaine</span>
              </h2>

              <div className="space-y-3.5 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Latence moyenne Paris (Ping) :</span>
                  <span className="text-emerald-600 font-bold font-mono text-sm">11 ms</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Latence moyenne Régions (Lyon, Marseille, Lille) :</span>
                  <span className="text-emerald-600 font-bold font-mono text-sm">15 ms</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Taux de disponibilité mensuel :</span>
                  <span className="text-[#dd1111] font-bold font-mono text-sm">99.94%</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Audio et Sous-titres :</span>
                  <span className="text-slate-900 font-bold">Français VF + VOSTFR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ISP Compatibility Details */}
        <div className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#dd1111] mb-2 inline-block">
              Interconnexion Réseau
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Compatibilité éprouvée avec tous les opérateurs internet français
            </h2>
            <p className="text-sm text-slate-600">
              Notre protocole de routage intelligent contourne automatiquement les goulots d'étranglement aux heures de pointe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ispList.map((isp) => (
              <div
                key={isp.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#dd1111] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/20 flex items-center justify-center mb-4">
                  <Wifi className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  {isp.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{isp.tech}</p>
                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                  {isp.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* France specific pricing */}
        <PricingSection showTitle={true} limit={4} />

        {/* Technical France FAQs */}
        <div className="my-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Questions fréquentes sur l'IPTV en France
            </h2>
          </div>

          <div className="space-y-4 text-sm text-slate-700">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#dd1111]/40 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">
                Ai-je besoin d'un VPN pour utiliser Premier IPTV en France ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Notre service fonctionne parfaitement sans VPN grâce à nos protocoles de flux sécurisés en HTTPS. Si vous utilisez déjà un VPN (NordVPN, CyberGhost, ExpressVPN), nos serveurs sont 100% compatibles et n'appliquent aucun blocage géographique.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#dd1111]/40 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">
                Les chaînes françaises sont-elles disponibles en 60 images par seconde (FPS) ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Oui, l'ensemble de nos flux sportifs et chaînes majeures françaises sont diffusés en qualité 1080p à 50/60 FPS et en 4K Ultra HD avec le codec H.265 pour une netteté de mouvement parfaite sans effet de rémanence.
              </p>
            </div>
          </div>
        </div>

        <CtaBanner
          title="Rejoignez le meilleur de l'IPTV en France"
          subtitle="Testez gratuitement ou activez votre abonnement en 5 minutes avec notre garantie de satisfaction."
        />
      </div>
    </div>
  );
}
