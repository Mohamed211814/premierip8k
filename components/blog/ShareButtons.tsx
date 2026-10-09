'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} : ${url}`
  )}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-600 font-bold mr-1 flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5 text-[#dd1111]" />
        <span>Partager :</span>
      </span>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Partager sur X / Twitter"
        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#dd1111] hover:border-[#dd1111] shadow-sm transition-colors text-xs font-bold"
      >
        X
      </a>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Partager sur Facebook"
        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#1a088b] hover:border-[#1a088b] shadow-sm transition-colors text-xs font-bold"
      >
        Facebook
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Partager sur WhatsApp"
        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-500 shadow-sm transition-colors text-xs font-bold"
      >
        WhatsApp
      </a>

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copier le lien"
        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#dd1111] hover:border-[#dd1111] shadow-sm transition-colors flex items-center gap-1 text-xs font-bold"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px] text-emerald-600">Copié</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[11px]">Lien</span>
          </>
        )}
      </button>
    </div>
  );
}
