import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Scale, FileText, Lock, Cookie, MessageSquare, ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/lib/config/site';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Premier IPTV : Informations Légales, Mentions, CGV & RGPD',
  description:
    'Consultez l’ensemble des informations légales du service Premier IPTV : mentions légales officielles, conditions générales de vente, protection RGPD et cookies.',
  canonical: '/legal',
});

export default function LegalPage() {
  const quickLinks = [
    { title: 'Mentions Légales', href: '#mentions', icon: Scale },
    { title: 'Conditions Générales (CGV)', href: '#cgv', icon: FileText },
    { title: 'Politique de Confidentialité (RGPD)', href: '#confidentialite', icon: Lock },
    { title: 'Politique des Cookies', href: '#cookies', icon: Cookie },
  ];

  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Informations Légales', url: '/legal' }]} />

        {/* Page Header */}
        <div className="my-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/20 mb-4 uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4 text-[#dd1111]" />
            <span>Cadre Réglementaire Officiel Premier IPTV</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Premier IPTV : Informations Légales et Réglementaires
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            L’ensemble des dispositions légales régissant l’utilisation du service <strong>Premier IPTV</strong>, la souscription aux abonnements, le respect de votre vie privée et la gestion des traceurs sont regroupées sur cette page unique.
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#dd1111] hover:bg-white text-slate-800 hover:text-[#dd1111] transition-all flex flex-col items-center text-center gap-2 group shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1a088b]/10 text-[#1a088b] group-hover:bg-[#dd1111] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold leading-tight">
                  {item.title}
                </span>
              </a>
            );
          })}
        </div>

        <div className="space-y-12 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* SECTION 1: MENTIONS LEGALES */}
          <section id="mentions" className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#dd1111] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md shadow-[#dd1111]/20">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#dd1111]">Section 1</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Premier IPTV : Mentions Légales du Service
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 1. Éditeur de la plateforme</h3>
                <p className="mb-2 text-slate-600">
                  En vertu de l’article 6 de la loi n° 2004 575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site officiel <strong>Premier IPTV</strong> ({siteConfig.url}) l’identité des différents intervenants :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Raison sociale :</strong> {siteConfig.legalName}</li>
                  <li><strong>Marque commerciale :</strong> Premier IPTV</li>
                  <li><strong>Service :</strong> Plateforme numérique de streaming en ligne</li>
                  <li><strong>Contact administratif & support :</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-[#dd1111] font-bold hover:underline">{siteConfig.contact.email}</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 2. Hébergement de l'infrastructure</h3>
                <p className="text-slate-600 mb-2">
                  Le site et les serveurs applicatifs Premier IPTV sont hébergés au sein de datacenters européens haute disponibilité :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Hébergeur web :</strong> Vercel Inc. (Datacenters Union Européenne)</li>
                  <li><strong>Adresse de l'hébergeur :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États Unis</li>
                  <li><strong>Site internet :</strong> https://vercel.com</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 3. Propriété intellectuelle</h3>
                <p className="text-slate-600">
                  {siteConfig.name} détient les droits d’usage sur tous les éléments accessibles sur le site officiel, notamment les textes, chartes graphiques, logos, interfaces et architectures logicielles. Toute reproduction ou adaptation sans autorisation écrite préalable est strictement interdite.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONDITIONS GENERALES DE VENTE */}
          <section id="cgv" className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#1a088b] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md shadow-[#1a088b]/20">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1a088b]">Section 2</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Premier IPTV : Conditions Générales de Vente (CGV)
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 1. Objet et abonnements</h3>
                <p className="text-slate-600 mb-2">
                  Le service <strong>Premier IPTV</strong> fournit un accès numérique haute fidélité permettant la réception de flux télévisuels et de contenus VOD 4K et FHD sur des équipements compatibles.
                </p>
                <p className="text-slate-600">
                  Chaque formule d’abonnement Premier IPTV est conclue pour la durée choisie (1 mois, 3 mois, 6 mois, 12 mois ou Pack Famille 2 Écrans). Aucun abonnement ne fait l'objet de prélèvement automatique ou de reconduction tacite sans l'accord explicite du client.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 2. Livraison et activation du service</h3>
                <p className="text-slate-600">
                  La mise à disposition des codes d'accès s’effectue sous un délai moyen de 5 à 30 minutes après confirmation de la demande via WhatsApp ou formulaire. Le client reçoit ses identifiants personnels (Xtream Codes, lien M3U) et son tutoriel d'installation.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 3. Responsabilité de l'utilisateur</h3>
                <p className="text-slate-600">
                  L'abonné est responsable de la compatibilité de ses équipements (Smart TV, boîtier Android, FireStick, Ordinateur) et de la qualité de sa connexion internet. Chaque formule standard est réservée à un seul écran simultané, à l'exception de la formule Pack Famille 2 Connexions.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: POLITIQUE DE CONFIDENTIALITE */}
          <section id="confidentialite" className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#dd1111] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md shadow-[#dd1111]/20">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#dd1111]">Section 3</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Premier IPTV : Politique de Confidentialité (RGPD)
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 1. Données collectées</h3>
                <p className="text-slate-600 mb-2">
                  Nous veillons au strict respect du Règlement Général sur la Protection des Données (RGPD n° 2016 679). Les données collectées se limitent aux informations indispensables :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Nom ou prénom (pour la configuration personnalisée de l’accès)</li>
                  <li>Adresse email ou messagerie (pour l’envoi des identifiants et l’assistance technique)</li>
                  <li>Type d'appareil (afin de fournir le guide d'installation adapté)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 2. Sécurité et non transmission</h3>
                <p className="text-slate-600 mb-2">
                  Les données transmises sont conservées de façon sécurisée pendant un délai maximum de 12 mois à compter du dernier contact, puis purgées définitivement.
                </p>
                <p className="text-emerald-700 font-bold">
                  Premier IPTV ne vend, ne loue ni ne cède aucune donnée personnelle à des tiers à des fins publicitaires.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 3. Exercice de vos droits</h3>
                <p className="text-slate-600">
                  Tout utilisateur dispose d’un droit permanent d’accès, de rectification et de suppression de ses données sur simple demande par email adressée à : <a href={`mailto:${siteConfig.contact.email}`} className="text-[#dd1111] font-bold hover:underline">{siteConfig.contact.email}</a>.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: POLITIQUE DES COOKIES */}
          <section id="cookies" className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#1a088b] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md shadow-[#1a088b]/20">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1a088b]">Section 4</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Premier IPTV : Politique des Cookies et Traceurs
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 1. Rôle des cookies techniques</h3>
                <p className="text-slate-600">
                  Des cookies techniques indispensables peuvent être déposés sur votre terminal lors de la navigation dans le but exclusif de mémoriser vos préférences de consentement et d’assurer la sécurité des sessions. Ils ne nécessitent aucun accord préalable car ils sont strictement nécessaires au fonctionnement du site.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Premier IPTV - 2. Gestion de vos préférences</h3>
                <p className="text-slate-600 mb-2">
                  Vous pouvez configurer votre navigateur pour bloquer les cookies à tout moment via les paramètres de votre navigateur :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                  <li><strong>Mozilla Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies</li>
                  <li><strong>Apple Safari :</strong> Réglages &gt; Safari &gt; Confidentialité</li>
                  <li><strong>Microsoft Edge :</strong> Paramètres &gt; Cookies et autorisations de site</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bottom Assistance Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1a088b] via-[#120563] to-[#dd1111] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Premier IPTV : Besoin d'une précision juridique ou technique ?
              </h3>
              <p className="text-xs text-blue-100">
                Notre équipe d’assistance est disponible 7j/7 pour répondre à vos questions.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white text-[#1a088b] hover:text-[#dd1111] hover:bg-slate-100 font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg flex-shrink-0"
            >
              Contacter le support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
