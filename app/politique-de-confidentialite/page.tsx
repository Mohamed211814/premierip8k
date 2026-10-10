import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/config/site';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Politique de Confidentialité Premier IPTV : Protection des Données (RGPD)',
  description: 'Engagement de Premier IPTV France quant à la protection et à la confidentialité des données personnelles de ses abonnés selon le RGPD.',
  canonical: '/politique-de-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Confidentialité Premier IPTV', url: '/politique-de-confidentialite' }]} />

        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            Politique de Confidentialité Premier IPTV (RGPD)
          </h1>

          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Collecte des données par Premier IPTV</h2>
              <p className="mb-3">
                Dans le cadre de l’utilisation de la plateforme <strong>Premier IPTV</strong> ({siteConfig.url}), nous veillons au strict respect du Règlement Général sur la Protection des Données (RGPD n° 2016/679) et de la législation française.
              </p>
              <p className="mb-2 font-bold text-slate-900">Données collectées pour votre service Premier IPTV :</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Nom ou prénom (pour la gestion personnalisée de votre compte Premier IPTV)</li>
                <li>Adresse email (pour l’envoi des identifiants Premier IPTV et du support technique)</li>
                <li>Type d'appareil et application (pour vous transmettre le guide d'installation Premier IPTV adapté)</li>
                <li>Numéro de téléphone / WhatsApp (uniquement en cas de demande d'assistance directe Premier IPTV)</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Finalités du traitement des données Premier IPTV</h2>
              <p className="mb-2">Les données collectées par Premier IPTV sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>L’activation immédiate de votre abonnement Premier IPTV et la transmission des codes de connexion</li>
                <li>L’assistance technique Premier IPTV et le suivi de vos tickets de support</li>
                <li>La sécurisation des serveurs Premier IPTV contre toute tentative d'intrusion</li>
              </ul>
              <p className="mt-3 text-emerald-700 font-bold">
                Premier IPTV ne vend, ne loue ni ne cède aucune donnée utilisateur à des tiers à des fins publicitaires.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Conservation sécurisée de vos données Premier IPTV</h2>
              <p>
                Les informations relatives à vos demandes d'abonnement Premier IPTV et formulaires de contact sont conservées pendant un délai maximum de 12 mois à compter de votre dernier échange, puis purgées de façon irréversible.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">4. Vos droits d'accès auprès de Premier IPTV</h2>
              <p className="mb-2">
                Conformément à la réglementation RGPD, tout utilisateur du service Premier IPTV dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles en contactant directement le délégué à la protection des données Premier IPTV à l'adresse : <a href={`mailto:${siteConfig.contact.email}`} className="text-[#dd1111] font-bold hover:underline">{siteConfig.contact.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
