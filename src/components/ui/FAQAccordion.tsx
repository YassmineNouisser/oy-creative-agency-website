'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';
import type { Lang } from '@/providers/LanguageProvider';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface FAQItem {
  question: Record<Lang, string>;
  answer: Record<Lang, string>;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <ScrollReveal key={index} delay={index * 0.05}>
          <div className="glass-card !p-0 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-start gap-4"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-oy-body-strong">{t(item.question)}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-oy-icon text-2xl flex-shrink-0"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div className="px-6 pb-4 text-oy-muted leading-relaxed border-t border-oy-glass-border pt-4">
                    {t(item.answer)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
