import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/config/site';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Politique de Confidentialité : Protection des Données (RGPD)',
  description: 'Engagement de Premier IPTV quant à la protection des données personnelles selon le règlement RGPD.',
  canonical: '/politique-de-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Politique de Confidentialité', url: '/politique-de-confidentialite' }]} />

        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            Politique de Confidentialité (RGPD)
          </h1>

          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Collecte et traitement des données</h2>
              <p className="mb-3">
                Dans le cadre de l’utilisation du site <strong>{siteConfig.url}</strong>, nous veillons au strict respect du Règlement Général sur la Protection des Données (RGPD n° 2016/679) et de la loi Informatique et Libertés du 6 janvier 1978 modifiée.
              </p>
              <p className="mb-2 font-bold text-slate-900">Données collectées via nos formulaires de contact et test :</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Nom ou prénom (pour la personnalisation de la communication)</li>
                <li>Adresse email (pour la transmission des identifiants et des réponses de support)</li>
                <li>Type d'appareil et d'application (pour l'orientation technique du tutoriel)</li>
                <li>Numéro de téléphone / WhatsApp (uniquement en cas de demande d'assistance directe)</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Finalités du traitement</h2>
              <p className="mb-2">Les données collectées sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>L’exécution de la prestation de service et l'envoi des codes de connexion</li>
                <li>Le support technique et le traitement de vos demandes d’assistance</li>
                <li>La sécurisation de l'infrastructure contre les attaques automatisées</li>
              </ul>
              <p className="mt-3 text-emerald-700 font-bold">
                Nous ne vendons, ne louons ni ne cédons aucune de vos données personnelles à des tiers à des fins publicitaires.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Durée de conservation des données</h2>
              <p>
                Les données relatives à vos demandes de test et formulaires de contact sont conservées pendant un délai maximum de 12 mois à compter du dernier contact, puis purgées automatiquement de nos systèmes sécurisés.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">4. Vos droits (Accès, Rectification, Suppression)</h2>
              <p className="mb-3">
                Conformément à la réglementation européenne, vous disposez d’un droit d’accès, de rectification, de portabilité et de suppression de vos données personnelles.
              </p>
              <p>
                Pour exercer ce droit, vous pouvez contacter notre Délégué à la Protection des Données (DPO) par email à : <a href={`mailto:${siteConfig.contact.supportEmail}`} className="text-[#dd1111] hover:underline font-bold">{siteConfig.contact.supportEmail}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
