'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import type { Lang } from '@/providers/LanguageProvider';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface SectionTitleProps {
  title: Record<Lang, string>;
  subtitle?: Record<Lang, string>;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) {
  const { t } = useLanguage();

  return (
    <ScrollReveal className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{t(title)}</span>
      </h2>
      {subtitle && (
        <p className="text-oy-muted text-lg md:text-xl max-w-2xl mx-auto">
          {t(subtitle)}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-oy-accent to-oy-cyan rounded-full ${centered ? 'mx-auto' : ''}`} />
    </ScrollReveal>
  );
}
