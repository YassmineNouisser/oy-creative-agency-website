'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'glass' | 'whatsapp' | 'instagram';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-oy-electric to-oy-cyan text-white hover:from-oy-accent hover:to-oy-cyan shadow-lg shadow-oy-electric/25 hover:shadow-oy-accent/40',
  outline:
    'border border-oy-icon/40 text-oy-label hover:bg-oy-electric/10 hover:border-oy-icon/60',
  glass:
    'glass text-oy-body hover:bg-oy-electric/10',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25',
  instagram:
    'bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white hover:opacity-90 shadow-lg shadow-pink-500/25',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  external = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-oy-icon/50 focus:ring-offset-2 focus:ring-offset-[var(--oy-ring-offset)]';

  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
