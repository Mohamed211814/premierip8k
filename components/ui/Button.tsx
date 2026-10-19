import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'white' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#dd1111] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs md:text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm md:text-base gap-2',
    lg: 'px-7 py-3.5 text-base md:text-lg gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#dd1111] hover:bg-[#b80c0c] text-white shadow-lg shadow-[#dd1111]/30 active:scale-[0.98]',
    secondary:
      'bg-[#1a088b] hover:bg-[#230eb0] text-white shadow-md shadow-[#1a088b]/30 active:scale-[0.98]',
    outline:
      'bg-white hover:bg-slate-50 text-[#1a088b] border border-slate-300 hover:border-[#dd1111] hover:text-[#dd1111] shadow-sm active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-[#dd1111] active:scale-[0.98]',
    glow:
      'bg-gradient-to-r from-[#dd1111] via-[#870d4d] to-[#1a088b] hover:from-[#b80c0c] hover:to-[#230eb0] text-white shadow-xl shadow-[#dd1111]/25 active:scale-[0.98]',
    white:
      'bg-white hover:bg-slate-100 text-[#1a088b] hover:text-[#dd1111] shadow-xl active:scale-[0.98] font-bold border border-white',
    outlineLight:
      'bg-white/10 hover:bg-white/20 text-white hover:text-white border border-white/40 hover:border-white shadow-sm backdrop-blur-sm active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={props.onClick as any}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={props.onClick as any}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
