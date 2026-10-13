'use client';

import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '@/lib/config/site';

export function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/212779395271?text=${encodeURIComponent("Bonjour, je souhaite commander un abonnement Premier TV.")}`;

  return (
    <aside
      aria-label="Contact et commande WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 group print:hidden"
    >
      {/* Interactive Tooltip pill on hover / desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 bg-white/95 text-slate-800 text-xs font-bold px-3.5 py-2.5 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 hover:border-emerald-400 group-hover:scale-105 transition-all duration-300 backdrop-blur-md"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse flex-shrink-0" />
        <span className="tracking-wide">Commander sur WhatsApp</span>
        <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-extrabold">
          {siteConfig.contact.whatsappDisplay}
        </span>
      </a>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter ou commander sur WhatsApp"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-60" />

        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md relative z-10" />
      </a>
    </aside>
  );
}
