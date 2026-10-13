import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, Clock, MapPin, MessageSquare, ShieldCheck, HelpCircle, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from '@/components/contact/ContactForm';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Contactez le Support Premier IPTV : Assistance & Abonnements Premier IPTV 7j/7',
  description:
    'Besoin d’aide pour configurer votre service Premier IPTV ou souscrire à un abonnement Premier IPTV ? Contactez l’équipe technique Premier IPTV France par formulaire ou email. Réponse sous 30 min.',
  canonical: '/contact',
});

interface PageProps {
  searchParams: Promise<{ plan?: string }>;
}

export default async function ContactPage({ searchParams }: PageProps) {
  const { plan = '' } = await searchParams;

  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Contact Premier IPTV', url: '/contact' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <Badge variant="primary" className="mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Support Client & Assistance Technique Premier IPTV 7j/7</span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Contactez le support officiel <span className="gradient-text">Premier IPTV</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Une question sur votre abonnement Premier IPTV, une demande d'assistance pour configurer votre application ou une commande spécifique ? L’équipe Premier IPTV France est à votre écoute 7j/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Canaux d'assistance Premier IPTV
              </h2>

              <div className="space-y-6 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#dd1111]/10 text-[#dd1111] border border-[#dd1111]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Email Support Premier IPTV</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Commandes, activations et demandes générales Premier IPTV</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#dd1111] hover:underline font-bold block mt-1 text-xs"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Assistance & Support Client</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Support technique francophone réactif 7j/7</p>
                    <p className="text-blue-700 font-bold mt-1 text-xs">Disponible en ligne et sur WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">WhatsApp Support & Commandes</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Commande immédiate et activation en 5 minutes</p>
                    <a
                      href="https://wa.me/212779395271?text=Bonjour,%20je%20souhaite%20commander%20un%20abonnement%20Premier%20TV."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-extrabold block mt-1 text-xs hover:underline"
                    >
                      Discuter directement sur WhatsApp (Support 7j/7) →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Horaires Support Premier IPTV</h3>
                    <p className="text-xs text-slate-600 mt-1 font-medium">{siteConfig.contact.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Siège Premier IPTV France</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-xs text-slate-700 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#dd1111] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 mb-0.5">Garantie de réponse Premier IPTV</p>
                <p className="text-slate-600 leading-relaxed">
                  Notre délai moyen de réponse pour toute question liée à votre abonnement Premier IPTV est de <strong>15 à 30 minutes</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 border-2 border-[#1a088b]/20 shadow-xl relative overflow-hidden">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Formulaire de Demande Premier IPTV
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Renseignez vos informations ci dessous pour commander votre abonnement Premier IPTV ou demander une assistance technique.
              </p>

              <ContactForm initialPlan={plan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
