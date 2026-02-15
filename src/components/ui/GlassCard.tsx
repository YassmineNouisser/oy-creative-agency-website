'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card',
        !hover && 'hover:bg-oy-cyan/5 hover:border-oy-glass-border hover:shadow-none',
        className
      )}
    >
      {children}
    </div>
  );
}
