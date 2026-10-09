import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/config/site';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Mentions Légales : Premier IPTV France',
  description: 'Consultez les mentions légales et informations réglementaires de Premier IPTV.',
  canonical: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Mentions Légales', url: '/mentions-legales' }]} />

        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            Mentions Légales
          </h1>

          <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">1. Présentation du site internet</h2>
              <p className="mb-2">
                En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet <strong>{siteConfig.url}</strong> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Propriétaire / Éditeur :</strong> {siteConfig.legalName} (Société de distribution de services numériques)</li>
                <li><strong>Adresse du siège social :</strong> {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}, {siteConfig.contact.address.country}</li>
                <li><strong>Numéro d'immatriculation (RCS / SIRET) :</strong> [SIRET : 894 120 450 00018 / R.C.S. Paris]</li>
                <li><strong>Numéro de TVA intracommunautaire :</strong> [FR 42 894120450]</li>
                <li><strong>Directeur de la publication :</strong> Direction de la Communication Premier IPTV</li>
                <li><strong>Contact support :</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-[#dd1111] hover:underline font-bold">{siteConfig.contact.email}</a></li>
                <li><strong>Téléphone :</strong> {siteConfig.contact.phone}</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">2. Hébergement du site</h2>
              <p className="mb-2">Le site est hébergé par une infrastructure européenne haute disponibilité :</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Hébergeur :</strong> Vercel Inc. / Datacenters situés au sein de l'Union Européenne (Région Paris cdg1 / Francfort fra1)</li>
                <li><strong>Adresse de l'hébergeur :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong>Site web hébergeur :</strong> https://vercel.com</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">3. Propriété intellectuelle et contrefaçons</h2>
              <p className="mb-2">
                {siteConfig.name} est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de {siteConfig.name}.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3">4. Limitations de responsabilité</h2>
              <p>
                {siteConfig.name} ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet {siteConfig.url}, résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications techniques requises, soit de l’apparition d’un bug ou d’une incompatibilité logicielle.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
