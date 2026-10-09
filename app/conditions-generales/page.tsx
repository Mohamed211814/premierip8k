import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/config/site';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Conditions Générales de Vente et d’Utilisation (CGV/CGU)',
  description: 'Conditions générales applicables aux abonnements et services proposés par Premier IPTV.',
  canonical: '/conditions-generales',
});

export default function ConditionsGeneralesPage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Conditions Générales', url: '/conditions-generales' }]} />

        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            Conditions Générales de Vente et d'Utilisation
          </h1>

          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Objet et champ d'application</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong>{siteConfig.legalName}</strong> et toute personne physique ou morale souscrivant à un abonnement de diffusion de contenus multimédias via le site {siteConfig.url}.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Description des services et accès</h2>
              <p className="mb-2">
                {siteConfig.name} fournit un accès numérique sécurisé permettant la lecture de flux télévisuels et de contenus audiovisuels à la demande sur des applications compatibles tierces.
              </p>
              <p>
                Les accès sont fournis pour la durée souscrite (1, 3, 6, 12 mois). Aucun abonnement ne fait l'objet d'un prélèvement automatique ou d'une tacite reconduction sans consentement préalable explicite du client.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Livraison et activation des identifiants</h2>
              <p className="mb-2">
                La livraison du service s'effectue par voie électronique à l'adresse email renseignée lors de la commande dans un délai moyen de 5 à 30 minutes suivant la validation du règlement.
              </p>
              <p>
                Le client reçoit ses identifiants Xtream Codes ainsi que le lien M3U et un guide d'installation adapté à son équipement.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">4. Responsabilité de l'utilisateur et prérequis techniques</h2>
              <p className="mb-2">
                L'utilisateur est seul responsable de la conformité de son matériel de lecture (Smart TV, Box Android, FireStick, Ordinateur) et de la qualité de sa connexion internet (débit minimal conseillé de 15 Mbps en FHD et 25 Mbps en 4K).
              </p>
              <p>
                Chaque abonnement standard est strictement personnel et réservé à un usage simultané sur un seul écran à la fois (sauf formule spécifique Pack Famille 2 Écrans).
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">5. Support client et réclamations</h2>
              <p>
                En cas de difficulté technique ou de question sur votre compte, notre support client francophone est joignable 7 jours sur 7 par email à <a href={`mailto:${siteConfig.contact.supportEmail}`} className="text-[#dd1111] hover:underline font-bold">{siteConfig.contact.supportEmail}</a> ou via le formulaire de contact du site.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
