import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/config/site';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Politique des Cookies Premier IPTV : Gestion des Traceurs',
  description: 'Informations détaillées sur l’utilisation des cookies techniques et traceurs sur la plateforme officielle Premier IPTV en France.',
  canonical: '/politique-de-cookies',
});

export default function PolitiqueCookiesPage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Cookies Premier IPTV', url: '/politique-de-cookies' }]} />

        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            Politique des Cookies du Service Premier IPTV
          </h1>

          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Utilisation des cookies sur le site Premier IPTV</h2>
              <p>
                Lors de votre navigation sur la plateforme <strong>Premier IPTV</strong> ({siteConfig.url}), des cookies techniques peuvent être déposés sur votre terminal (ordinateur, tablette, smartphone) dans le but d'assurer la sécurité et le bon fonctionnement de votre session.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Types de cookies utilisés par Premier IPTV</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">Cookies techniques Premier IPTV (Indispensables)</h3>
                  <p className="text-xs text-slate-600">
                    Ces cookies assurent la transmission sécurisée des formulaires d’abonnement Premier IPTV et la mémorisation de vos préférences de consentement. Ils sont strictement nécessaires.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">Cookies de mesure de performance Premier IPTV (Optionnels)</h3>
                  <p className="text-xs text-slate-600">
                    Permettent d’analyser les temps de réponse de l’infrastructure Premier IPTV afin d’améliorer la rapidité d'affichage des pages sans collecter d'informations personnelles identifiables.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Gestion de vos préférences cookies Premier IPTV</h2>
              <p className="mb-2">
                Vous pouvez à tout moment configurer votre navigateur pour autoriser ou bloquer les cookies lors de votre visite sur Premier IPTV :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li><strong>Mozilla Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies</li>
                <li><strong>Apple Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies</li>
                <li><strong>Microsoft Edge :</strong> Paramètres &gt; Confidentialité &gt; Cookies</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
