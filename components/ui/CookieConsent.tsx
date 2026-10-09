'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';
import { Button } from './Button';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('premier_iptv_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('premier_iptv_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('premier_iptv_cookie_consent', 'refused');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-5 rounded-2xl bg-white/95 border border-slate-200 shadow-2xl backdrop-blur-xl animate-fade-in"
    >
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-[#dd1111]/10 text-[#dd1111] border border-[#dd1111]/30 flex-shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-slate-900 mb-1">
            Respect de votre vie privée
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Nous utilisons des cookies essentiels pour assurer le bon fonctionnement du site et mesurer l’audience de façon anonymisée. Consultez notre{' '}
            <Link
              href="/politique-de-cookies"
              className="text-[#dd1111] font-semibold hover:underline"
            >
              politique des cookies
            </Link>
            .
          </p>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="primary" onClick={handleAccept}>
              Accepter tout
            </Button>
            <Button size="sm" variant="outline" onClick={handleRefuse}>
              Continuer sans accepter
            </Button>
          </div>
        </div>
        <button
          onClick={handleRefuse}
          aria-label="Fermer le bandeau de cookies"
          className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
