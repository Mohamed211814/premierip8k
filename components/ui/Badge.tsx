import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'royal' | 'success' | 'warning' | 'violet' | 'outline';
  className?: string;
}

export function Badge({
  children,
  variant = 'primary',
  className = '',
}: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide';

  const variants = {
    primary:
      'bg-[#dd1111]/10 text-[#dd1111] border border-[#dd1111]/30 shadow-sm shadow-[#dd1111]/10',
    royal:
      'bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/30 shadow-sm shadow-[#1a088b]/10',
    violet:
      'bg-[#1a088b]/10 text-[#1a088b] border border-[#1a088b]/30 shadow-sm shadow-[#1a088b]/10',
    success:
      'bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 shadow-sm shadow-emerald-500/10',
    warning:
      'bg-amber-500/10 text-amber-800 border border-amber-500/30 shadow-sm shadow-amber-500/10',
    outline:
      'bg-white text-slate-800 border border-slate-300 shadow-sm',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
