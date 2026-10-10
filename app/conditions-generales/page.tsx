import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/config/site';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Conditions Générales de Vente Premier IPTV (CGV / CGU)',
  description: 'Consultez les conditions générales de vente et d’utilisation relatives aux abonnements et services proposés par Premier IPTV France.',
  canonical: '/conditions-generales',
});

export default function ConditionsGeneralesPage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'CGV Premier IPTV', url: '/conditions-generales' }]} />

        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            Conditions Générales de Vente Premier IPTV
          </h1>

          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Objet des prestations Premier IPTV</h2>
              <p>
                Les présentes Conditions Générales régissent les relations contractuelles entre <strong>{siteConfig.legalName}</strong> (éditeur du service <strong>Premier IPTV</strong>) et toute personne physique ou morale souscrivant à un abonnement Premier IPTV via le site officiel {siteConfig.url}.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Description des abonnements Premier IPTV</h2>
              <p className="mb-2">
                Le service <strong>Premier IPTV</strong> fournit un accès numérique haute fidélité permettant la réception de flux télévisuels et de catalogues VOD 4K/FHD sur des équipements et applications compatibles.
              </p>
              <p>
                Chaque abonnement Premier IPTV est commercialisé pour la durée sélectionnée (1 mois, 3 mois, 6 mois, 12 mois ou Pack Famille Premier IPTV). Aucun abonnement Premier IPTV ne fait l'objet de prélèvement automatique ou de reconduction tacite sans l'accord explicite du client.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Livraison et activation de votre accès Premier IPTV</h2>
              <p className="mb-2">
                La mise à disposition de votre service Premier IPTV s’effectue par voie électronique à l’adresse email renseignée lors de la commande sous un délai moyen de 5 à 30 minutes.
              </p>
              <p>
                Le client reçoit ses identifiants de connexion Premier IPTV (Xtream Codes, lien M3U) ainsi qu’un tutoriel pas à pas pour son appareil.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">4. Responsabilité de l'abonné Premier IPTV</h2>
              <p className="mb-2">
                L'utilisateur du service Premier IPTV est responsable de la compatibilité de son matériel de lecture (Smart TV, Box Android, FireStick, Ordinateur) et de la stabilité de sa connexion internet.
              </p>
              <p>
                Chaque compte Premier IPTV standard est strictement personnel et utilisable sur un seul écran actif simultané (sauf souscription à la formule Premier IPTV Pack Famille 2 Écrans).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
