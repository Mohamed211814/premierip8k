import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbsSchema } from '@/lib/seo/schema';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [
    { name: 'Accueil', url: '/' },
    ...items,
  ];

  return (
    <>
      <BreadcrumbsSchema items={fullItems} />
      <nav
        aria-label="Fil d'Ariane"
        className={`flex items-center text-xs md:text-sm text-slate-500 py-3 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5 md:gap-2">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={item.url} className="flex items-center gap-1.5 md:gap-2">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-slate-900 font-bold truncate max-w-[200px] md:max-w-none"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-slate-600 hover:text-[#dd1111] transition-colors flex items-center gap-1 font-medium"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
