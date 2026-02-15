'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import type { Lang } from '@/providers/LanguageProvider';
import Button from './Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { WHATSAPP_LINK } from '@/lib/utils';
import { common } from '@/lib/content';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

interface CTASectionProps {
  title: Record<Lang, string>;
  subtitle?: Record<Lang, string>;
  className?: string;
}

export default function CTASection({ title, subtitle, className = '' }: CTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className={`py-20 relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--oy-section-tint)] via-oy-cyan/10 to-[var(--oy-section-tint)]" />
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t(title)}
          </h2>
          {subtitle && (
            <p className="text-oy-muted text-lg mb-8">{t(subtitle)}</p>
          )}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="whatsapp" href={WHATSAPP_LINK} external>
              <FaWhatsapp className="inline w-5 h-5" /> {t(common.chatWhatsapp)}
            </Button>
            <Button variant="outline" href="/contact">
              <HiOutlineMail className="inline w-5 h-5" /> {t(common.requestQuote)}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
