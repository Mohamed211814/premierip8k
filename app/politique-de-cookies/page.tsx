import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/config/site';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Politique des Cookies : Utilisation & Gestion des Traceurs',
  description: 'Informations détaillées sur l’utilisation des cookies et traceurs sur le site Premier IPTV.',
  canonical: '/politique-de-cookies',
});

export default function PolitiqueCookiesPage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Politique des Cookies', url: '/politique-de-cookies' }]} />

        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            Politique d'Utilisation des Cookies
          </h1>

          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Qu'est-ce qu'un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d’un site internet. Il permet au site de mémoriser des informations sur votre visite, telles que votre langue préférée ou vos préférences de navigation, afin de faciliter votre prochaine connexion et d’améliorer la fluidité de votre expérience.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Quels cookies utilisons-nous ?</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">Cookies techniques indispensables (Essentiels)</h3>
                  <p className="text-xs text-slate-600">
                    Nécessaires au bon fonctionnement du site, à la sécurité des formulaires et à la mémorisation de votre choix concernant les cookies. Ces cookies ne peuvent pas être désactivés.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-1">Cookies de mesure d'audience anonymisée (Optionnels)</h3>
                  <p className="text-xs text-slate-600">
                    Permettent d’analyser le trafic du site de façon totalement anonyme afin d'optimiser les performances de nos pages et guides sans identifier les utilisateurs.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Comment paramétrer vos cookies ?</h2>
              <p className="mb-2">
                Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies selon vos préférences :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies et données de sites</li>
                <li><strong>Mozilla Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies et données de sites</li>
                <li><strong>Apple Safari :</strong> Préférences &gt; Confidentialité &gt; Bloquer tous les cookies</li>
                <li><strong>Microsoft Edge :</strong> Paramètres &gt; Cookies et autorisations de site</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
