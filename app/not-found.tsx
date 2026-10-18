import React from 'react';
import Link from 'next/link';
import { Home, Tv, BookOpen, HelpCircle, Phone, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  const helpfulLinks = [
    { name: "Page d'Accueil", href: '/', icon: Home, desc: 'Retourner à la page principale' },
    { name: 'Nos Tarifs & Offres', href: '/#tarifs', icon: Tv, desc: 'Consulter nos formules 4K et 8K' },
    { name: 'Compatibilité Matérielle', href: '/#compatibilite', icon: BookOpen, desc: 'Tutoriels pas à pas par appareil' },
    { name: 'Foire Aux Questions', href: '/#faq', icon: HelpCircle, desc: 'Réponses à vos questions fréquentes' },
    { name: 'Support & Contact', href: '/contact', icon: Phone, desc: 'Joindre notre équipe technique' },
  ];

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-white">
      <div className="max-w-2xl w-full text-center">
        <span className="text-6xl sm:text-8xl font-extrabold font-mono gradient-text block mb-4">
          404
        </span>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Premier IPTV : Page introuvable ou déplacée
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
          Le programme ou la page que vous recherchez n'est plus accessible ou a changé d'adresse. Retrouvez votre chemin grâce aux liens rapides ci dessous :
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          {helpfulLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#dd1111] shadow-sm hover:shadow-md transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1a088b]/10 text-[#1a088b] group-hover:bg-[#dd1111] group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0 border border-[#1a088b]/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm group-hover:text-[#dd1111] transition-colors">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <Button variant="primary" size="md" href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Retourner à l'accueil Premier IPTV</span>
        </Button>
      </div>
    </div>
  );
}
