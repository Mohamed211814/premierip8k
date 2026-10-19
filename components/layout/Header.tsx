'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle smooth scroll when navigating to an anchor or root from external/same page
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
      if (href === '/') {
        if (pathname === '/') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
        return;
      }

      if (href.startsWith('/#') || href.startsWith('#')) {
        const hash = href.includes('#') ? href.split('#')[1] : '';
        if (pathname === '/' && hash) {
          e.preventDefault();
          const targetEl = document.getElementById(hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', href);
          }
          setMobileMenuOpen(false);
          return;
        }
      }

      setMobileMenuOpen(false);
    },
    [pathname]
  );

  // If page loads with a hash (e.g. from /contact to /#tarifs), ensure smooth scroll after mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const targetEl = document.getElementById(hashId);
      if (targetEl) {
        const timer = setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const navLinks = siteConfig.navigation;

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#dd1111] text-white rounded-lg font-medium shadow-lg"
      >
        Aller au contenu principal
      </a>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav bg-white/95 shadow-md shadow-slate-200/50 border-b border-slate-200'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-[#dd1111] rounded-lg p-1"
              aria-label="Premier IPTV : Retour à l'accueil"
            >
              <div className="relative w-11 h-11 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="Premier IPTV"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-slate-900">
                    Premier<span className="text-[#dd1111]">IPTV</span>
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#dd1111]/10 text-[#dd1111] border border-[#dd1111]/30">
                    4K/8K
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 tracking-wider font-semibold">
                  Service France #1
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navigation principale"
              className="hidden lg:flex items-center gap-1"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                      isActive
                        ? 'text-[#dd1111] bg-[#dd1111]/10 border border-[#dd1111]/30 font-bold shadow-sm'
                        : 'text-slate-700 hover:text-[#dd1111] hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="glow"
                size="sm"
                href="/#tarifs"
                onClick={(e) => handleNavClick(e, '/#tarifs')}
                className="group font-bold"
              >
                <span>Commander</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                href="/#tarifs"
                onClick={(e) => handleNavClick(e, '/#tarifs')}
                className="inline-flex text-xs px-3 py-1.5 font-bold"
              >
                Tarifs
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="relative p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:text-[#dd1111] hover:bg-slate-200/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#dd1111] transition-all duration-200 active:scale-95"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                <div className="w-6 h-6 relative flex items-center justify-center" aria-hidden="true">
                  <span
                    className={`absolute h-0.5 w-5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-200 ease-in-out ${
                      mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with smooth height/opacity transition */}
        <div
          className={`lg:hidden grid transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'grid-rows-[1fr] opacity-100 border-b border-slate-200 shadow-2xl'
              : 'grid-rows-[0fr] opacity-0 border-b-0 pointer-events-none'
          } bg-white/98 backdrop-blur-2xl`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-1.5 px-4 pt-3 pb-6">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#dd1111]/10 text-[#dd1111] border border-[#dd1111]/30 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#dd1111]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}

              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
                <Button
                  variant="glow"
                  size="md"
                  href="/#tarifs"
                  onClick={(e) => handleNavClick(e, '/#tarifs')}
                  className="w-full justify-center font-bold"
                >
                  Choisir un abonnement
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  className="w-full justify-center"
                >
                  Contacter le support
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
