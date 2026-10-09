import React from 'react';
import Link from 'next/link';
import { Tv, Mail, Phone, Clock, ShieldCheck, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#1a088b] text-white text-sm mt-20 border-t-4 border-[#dd1111]">
      {/* Top Value Banner */}
      <div className="border-b border-white/10 bg-[#120563]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2.5 rounded-xl bg-[#dd1111] text-white shadow-md shadow-[#dd1111]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Garantie 99.9% Uptime</p>
                <p className="text-xs text-blue-200">Serveurs haute disponibilité</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2.5 rounded-xl bg-white text-[#1a088b] shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Activation Immédiate</p>
                <p className="text-xs text-blue-200">Accès transmis en 5 minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2.5 rounded-xl bg-[#dd1111] text-white shadow-md shadow-[#dd1111]/30">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Support Français 7j/7</p>
                <p className="text-xs text-blue-200">Assistance technique réactive</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2.5 rounded-xl bg-white text-[#1a088b] shadow-md">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Qualité 4K & Full HD</p>
                <p className="text-xs text-blue-200">Flux 60 FPS sans coupure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#dd1111] flex items-center justify-center text-white shadow-md shadow-black/20">
                <Tv className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Premier<span className="text-[#dd1111]">IPTV</span>
              </span>
            </Link>

            <p className="text-xs text-blue-100 leading-relaxed pr-6">
              Premier IPTV est la référence pour la diffusion de flux télévisuels et VOD haute fidélité en France. Profitez d’une infrastructure serveur européenne ultra-stable pour toutes vos Smart TV, boîtiers Android et smartphones.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <span>{siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}, {siteConfig.contact.address.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <span>{siteConfig.contact.phone} (Support technique)</span>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-400/30 pb-2">
              Abonnements & Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-100">
              {siteConfig.footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Guides */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-400/30 pb-2">
              Guides d'installation
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-100">
              {siteConfig.footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Resources */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-400/30 pb-2">
              Informations Légales
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-100 mb-6">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-blue-400/30 pb-2">
              Ressources
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-100">
              {siteConfig.footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-400/20 text-xs text-blue-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} {siteConfig.name}. Tous droits réservés. Service de streaming et diffusion télévisuelle haute définition.
          </p>
          <div className="flex items-center gap-4 text-xs text-blue-100">
            <Link href="/mentions-legales" className="hover:text-white hover:underline transition-colors">
              Mentions Légales
            </Link>
            <span>•</span>
            <Link href="/politique-de-confidentialite" className="hover:text-white hover:underline transition-colors">
              Vie Privée
            </Link>
            <span>•</span>
            <Link href="/conditions-generales" className="hover:text-white hover:underline transition-colors">
              CGV
            </Link>
            <span>•</span>
            <Link href="/politique-de-cookies" className="hover:text-white hover:underline transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
