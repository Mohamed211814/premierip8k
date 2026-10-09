import React from 'react';
import { Metadata } from 'next';
import { Sparkles, CheckCircle2, ShieldCheck, Clock, Zap, Tv, HelpCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { TestIptvForm } from '@/components/test-iptv/TestIptvForm';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Test IPTV 24h Gratuit : Essayez nos Flux 4K Sans Engagement',
  description:
    'Demandez votre test IPTV de 24 heures pour tester la fluidité de nos chaînes 4K/FHD et la VOD sur votre Smart TV, FireStick ou box Android avant de souscrire.',
  canonical: '/test-iptv',
});

export default function TestIptvPage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Test IPTV 24h', url: '/test-iptv' }]} />

        <div className="my-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Trial Value & Benefits */}
          <div className="lg:col-span-7">
            <Badge variant="primary" className="mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Essai 24h Gratuit • Sans Engagement</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Testez la qualité de notre service <span className="gradient-text">premier IPTV</span> pendant 24 heures
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Nous vous offrons la possibilité d'essayer notre infrastructure en conditions réelles sur votre téléviseur ou application préférée. Vérifiez par vous-même la stabilité de nos flux 4K, le zapping rapide et l'absence totale de saccade.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-[#dd1111]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm">Accès complet au catalogue</h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Accédez à toutes les chaînes françaises et internationales en 4K/FHD ainsi qu’à un extrait représentatif de notre vidéothèque VOD.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-[#dd1111]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#dd1111]/10 text-[#dd1111] border border-[#dd1111]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm">Validité 24 heures continues</h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Le décompte commence dès la première connexion sur votre appareil, vous laissant le temps de tester en soirée et aux heures de pointe.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-[#dd1111]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-sm">Aucune carte bancaire requise</h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Le test est sans engagement. Aucun renouvellement automatique ni prélèvement ne sera effectué.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              📌 <strong className="text-slate-900">Règle de limitation :</strong> Afin d'assurer une bande passante équitable à l'ensemble de nos abonnés, une seule demande de test par foyer/adresse email est autorisée tous les 6 mois.
            </div>
          </div>

          {/* Right Column: Request Form Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-6 sm:p-8 border-2 border-[#1a088b]/20 shadow-xl relative overflow-hidden">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Formulaire de Demande d'Essai 24h
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Remplissez les champs ci-dessous pour recevoir vos codes de connexion Xtream Codes.
              </p>

              <TestIptvForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
