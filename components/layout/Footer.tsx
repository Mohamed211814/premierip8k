import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tv, Mail, Phone, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-11 h-11 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="Premier IPTV"
                  width={44}
                  height={44}
                  quality={80}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Premier<span className="text-[#dd1111]">IPTV</span>
              </span>
            </Link>

            <p className="text-xs text-blue-100 leading-relaxed pr-6">
              Premier IPTV est la référence pour la diffusion de flux télévisuels et VOD haute fidélité en France. Profitez d’une infrastructure serveur européenne ultra stable pour toutes vos Smart TV, boîtiers Android et smartphones.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#dd1111] flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://wa.me/212779395271?text=Bonjour,%20je%20souhaite%20commander%20un%20abonnement%20Premier%20TV."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-semibold"
                >
                  WhatsApp : Discuter & Commander en direct
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Navigation & Sections */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-400/30 pb-2">
              Premier IPTV : Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-blue-100">
              {siteConfig.footerLinks.sections.map((link) => (
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

          {/* Column 2: Legal Pages */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-blue-400/30 pb-2">
              Premier IPTV : Informations Légales
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

            <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 text-xs text-blue-100">
              <p className="font-bold text-white mb-1">Besoin d'aide ?</p>
              <Link href="/contact" className="text-amber-300 font-bold hover:underline">
                Accéder au formulaire de contact →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-400/20 text-xs text-blue-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} {siteConfig.name}. Tous droits réservés. Service de streaming et diffusion télévisuelle haute définition.
          </p>
          <div className="flex items-center gap-4 text-xs text-blue-100">
            <Link href="/legal" className="hover:text-white hover:underline transition-colors font-bold">
              Informations Légales
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white hover:underline transition-colors">
              Contact & Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
