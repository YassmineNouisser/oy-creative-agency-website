'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';
import { servicesDetailed } from '@/lib/content';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientBorderCard from '@/components/animations/GradientBorderCard';
import CTASection from '@/components/ui/CTASection';
import Badge from '@/components/ui/Badge';

export default function Services() {
  const { t, lang } = useLanguage();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <TextReveal
            text={t(servicesDetailed.pageTitle)}
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-oy-muted max-w-2xl mx-auto">
              {t(servicesDetailed.pageSubtitle)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      {servicesDetailed.categories.map((category, catIndex) => (
        <section key={category.id} id={category.id} className="py-16 px-4 relative">
          {catIndex % 2 === 1 && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--oy-section-tint)] to-transparent" />
          )}
          <div className="relative max-w-6xl mx-auto">
            <SectionTitle title={category.title} subtitle={category.description} />

            <div className="space-y-6">
              {category.services.map((service, sIndex) => {
                const serviceId = `${category.id}-${sIndex}`;
                const isExpanded = expandedService === serviceId;

                return (
                  <ScrollReveal key={sIndex} delay={sIndex * 0.05}>
                    <GradientBorderCard hoverOnly className="!p-0 overflow-hidden">
                      {/* Service Header */}
                      <button
                        onClick={() => setExpandedService(isExpanded ? null : serviceId)}
                        className="w-full px-6 py-5 flex items-center justify-between text-start gap-4"
                      >
                        <div>
                          <h3 className="text-xl font-semibold text-oy-heading">{t(service.title)}</h3>
                          <p className="text-oy-muted text-sm mt-1 line-clamp-2">{t(service.description)}</p>
                        </div>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-oy-icon flex-shrink-0"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.span>
                      </button>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 border-t border-oy-glass-border pt-4 space-y-6">
                              {/* Full Description */}
                              <p className="text-oy-body leading-relaxed">{t(service.description)}</p>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Deliverables */}
                                <div>
                                  <h4 className="text-sm font-semibold text-oy-label uppercase tracking-wider mb-3">
                                    {lang === 'ar' ? 'المخرجات' : lang === 'en' ? 'Deliverables' : 'Livrables'}
                                  </h4>
                                  <ul className="space-y-2">
                                    {service.deliverables[lang].map((item, j) => (
                                      <li key={j} className="flex items-start gap-2 text-sm text-oy-muted">
                                        <span className="text-oy-icon mt-0.5">✓</span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Process */}
                                <div>
                                  <h4 className="text-sm font-semibold text-oy-label uppercase tracking-wider mb-3">
                                    {lang === 'ar' ? 'المنهجية' : lang === 'en' ? 'Process' : 'Processus'}
                                  </h4>
                                  <div className="space-y-2">
                                    {service.process[lang].map((step, j) => (
                                      <div key={j} className="flex items-center gap-3 text-sm text-oy-muted">
                                        <span className="w-6 h-6 rounded-full bg-oy-electric/20 text-oy-icon flex items-center justify-center text-xs font-bold flex-shrink-0">
                                          {j + 1}
                                        </span>
                                        {step}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </GradientBorderCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <CTASection
        title={{ fr: 'Un projet en tête ?', en: 'Have a project in mind?', ar: 'لديك مشروع في ذهنك؟' }}
        subtitle={{ fr: 'Discutons de la meilleure solution pour vous', en: 'Let\'s discuss the best solution for you', ar: 'لنناقش أفضل حل لك' }}
      />
    </>
  );
}
