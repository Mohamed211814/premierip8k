import React from 'react';
import { Metadata } from 'next';
import { Tv, ShieldCheck, Clock, Layers, Sparkles, Volume2, HardDrive, RefreshCw, Cpu, Check, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CtaBanner } from '@/components/home/CtaBanner';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Fonctionnalités Premier IPTV : 4K HDR, Anti-Freeze v5, EPG & Replay',
  description:
    'Découvrez toutes les technologies de Premier IPTV : flux 4K 60 FPS, technologie Anti-Freeze v5, guide TV EPG 7 jours, Replay 72h, audio Dolby 5.1 et multi-écrans.',
  canonical: '/fonctionnalites',
});

export default function FonctionnalitesPage() {
  const featuresList = [
    {
      icon: Tv,
      title: 'Flux 4K Ultra HD & 60 Images / Seconde',
      tag: 'Qualité Vidéo',
      description:
        'Profitez d’une résolution maximale en 2160p et 1080p avec un framerate fluide de 60 FPS. Idéal pour les retransmissions sportives rapides où chaque détail compte.',
      highlights: ['Encodage HEVC / H.265 haute efficacité', 'Bitrate stable jusqu’à 20 Mbps', 'Couleurs HDR10 et Dolby Vision'],
    },
    {
      icon: ShieldCheck,
      title: 'Technologie Anti-Freeze v5',
      tag: 'Stabilité & Réseau',
      description:
        'Notre système intelligent d’équilibrage de charge dynamique détecte les ralentissements et bascule instantanément sur des nœuds miroirs pour éviter tout gel d’image.',
      highlights: ['Basculement de flux sans coupure audio', 'Gestion de buffer intelligente', 'Résistance aux pics d’audience de masse'],
    },
    {
      icon: Clock,
      title: 'Guide Électronique des Programmes (EPG 7 Jours)',
      tag: 'Ergonomie',
      description:
        'Consultez la grille complète des programmes passés, en cours et à venir avec résumés détaillés, casting, affiches et horaires précis synchronisés sur l’heure de Paris.',
      highlights: ['Mise à jour XMLTV automatique quotidienne', 'Recherche de programmes par titre ou acteur', 'Compatible TiviMate, Smarters et IBO Player'],
    },
    {
      icon: RefreshCw,
      title: 'Replay & Rattrapage TV 72 Heures',
      tag: 'Divertissement',
      description:
        'Vous avez manqué le début d’un film ou une émission en soirée ? Remontez le temps jusqu’à 3 jours en arrière directement depuis la télécommande de votre TV.',
      highlights: ['Sans enregistreur physique nécessaire', 'Pause et avance rapide intégrées', 'Disponible sur les principales chaînes françaises'],
    },
    {
      icon: Volume2,
      title: 'Audio Dolby Digital 5.1 & Multi-Langues',
      tag: 'Expérience Sonore',
      description:
        'Sélectionnez en un clic la piste audio de votre choix (Version Française, Version Originale, commentaires sportifs alternatifs) et profitez d’un son spatial immersif.',
      highlights: ['Son multicanal Dolby Surround 5.1', 'Sous-titres français synchronisés (VOSTFR)', 'Changement de langue instantané'],
    },
    {
      icon: Layers,
      title: 'Pack Famille & Multi-Connexions Simultanées',
      tag: 'Flexibilité',
      description:
        'Regardez deux programmes différents sur deux téléviseurs ou appareils distincts au sein du même foyer grâce à notre option multi-écrans indépendants.',
      highlights: ['Flux distincts et autonomes', 'Idéal pour salon et chambre', 'Gestion via un seul compte client'],
    },
  ];

  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Fonctionnalités', url: '/fonctionnalites' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <Badge variant="primary" className="mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technologies de Diffusion Avancées</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Les fonctionnalités qui font la différence
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Découvrez comment notre plateforme combine puissance serveur, compression moderne et ergonomie pour transformer votre téléviseur.
          </p>
        </div>

        {/* Features List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuresList.map((feat) => {
            const Icon = feat.icon;

            return (
              <div
                key={feat.title}
                className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#dd1111]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#dd1111] bg-[#dd1111]/10 px-3 py-1 rounded-full border border-[#dd1111]/20">
                      {feat.tag}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {feat.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {feat.description}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-slate-700">
                    {feat.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#dd1111] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button variant="ghost" size="sm" href="/abonnement-iptv" className="w-full justify-between text-xs text-[#dd1111] hover:text-[#1a088b] font-bold">
                    <span>Profiter de cette fonctionnalité</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Infrastructure Specs Section */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1a088b] to-[#0f044d] p-8 sm:p-12 border-2 border-[#dd1111] shadow-2xl text-white my-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#ff8080] mb-2 inline-block">
                Architecture Technique
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Une infrastructure serveur conçue pour le direct
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                Chaque flux vidéo est transcodé en temps réel dans nos datacenters européens haute densité et distribué via un réseau CDN à large bande passante pour garantir zéro temps de latence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <p className="font-bold text-white mb-0.5">Codecs Supportés</p>
                  <p className="text-slate-300">H.265 (HEVC), H.264 (AVC), MPEG-TS</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <p className="font-bold text-white mb-0.5">Protocoles Réseau</p>
                  <p className="text-slate-300">HLS, HTTP Streams, RTSP, RTMP</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 space-y-4 text-xs shadow-xl">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-300 font-medium">Taux de disponibilité (Uptime) :</span>
                  <span className="text-emerald-300 font-bold font-mono text-sm">99.9%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-300 font-medium">Temps de zapping moyen :</span>
                  <span className="text-[#ff9999] font-bold font-mono text-sm">&lt; 0.5 seconde</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-300 font-medium">Capacité réseau globale :</span>
                  <span className="text-white font-bold font-mono text-sm">100 Gbps+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-medium">Sécurité des connexions :</span>
                  <span className="text-emerald-300 font-bold font-mono text-sm">SSL / HTTPS 256-bit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CtaBanner
          title="Prêt à tester nos fonctionnalités en direct ?"
          subtitle="Demandez votre test de 24h ou activez votre formule d'abonnement sans engagement."
        />
      </div>
    </div>
  );
}
