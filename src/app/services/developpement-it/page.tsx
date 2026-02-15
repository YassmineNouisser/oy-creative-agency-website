'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/providers/LanguageProvider';
import { servicesDetailed } from '@/lib/content';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientBorderCard from '@/components/animations/GradientBorderCard';
import CTASection from '@/components/ui/CTASection';

const devCategories = servicesDetailed.categories.filter((c) => c.id === 'digital');

const pageContent = {
  title: {
    fr: 'Développement IT',
    en: 'IT Development',
    ar: 'تطوير تكنولوجيا المعلومات',
  },
  subtitle: {
    fr: 'Sites web, applications, UX/UI design et solutions IA pour propulser votre business.',
    en: 'Websites, applications, UX/UI design and AI solutions to propel your business.',
    ar: 'مواقع ويب، تطبيقات، تصميم UX/UI وحلول ذكاء اصطناعي لدفع أعمالك.',
  },
} as const;

function DevBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-oy-dark to-oy-dark" />
      <div className="absolute top-0 start-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/8 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 end-0 w-[500px] h-[500px] bg-gradient-to-tl from-oy-electric/6 via-teal-500/4 to-transparent rounded-full blur-3xl" />

      {/* Code brackets */}
      <svg className="absolute top-32 start-[8%] w-16 h-16 text-emerald-400/10 animate-float-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>

      {/* Terminal */}
      <svg className="absolute top-48 end-[12%] w-20 h-20 text-cyan-400/8 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M7 8l4 4-4 4" />
        <path d="M13 16h4" />
      </svg>

      {/* Database */}
      <svg className="absolute top-[40%] start-[5%] w-14 h-14 text-teal-400/8 animate-float-slower" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>

      {/* Gear / Settings */}
      <svg className="absolute top-[60%] end-[8%] w-16 h-16 text-oy-icon/8 animate-float-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>

      {/* Cloud */}
      <svg className="absolute top-[25%] start-[45%] w-12 h-12 text-emerald-300/6 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>

      {/* Circuit / CPU */}
      <svg className="absolute bottom-[25%] start-[15%] w-14 h-14 text-cyan-300/8 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>

      {/* Globe / Network */}
      <svg className="absolute bottom-[40%] end-[20%] w-12 h-12 text-teal-300/6 animate-float-slower" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>

      {/* Smartphone */}
      <svg className="absolute top-[75%] start-[40%] w-10 h-10 text-oy-label/6 animate-float-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>

      {/* Binary-like dots grid */}
      <div className="absolute top-[15%] end-[35%] grid grid-cols-4 gap-2 opacity-[0.04]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
        ))}
      </div>
    </div>
  );
}

export default function DevItPage() {
  const { t, lang } = useLanguage();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <div className="relative">
      <DevBackground />

      <div className="relative">
        {/* Hero with background photo */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/hero/dev-it.webp"
            alt="Software development coding"
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--oy-hero-from)] via-[var(--oy-hero-via)] to-[var(--oy-hero-to)]" />
          {/* Colored tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-cyan-900/20" />

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
            <TextReveal
              text={t(pageContent.title)}
              as="h1"
              className="text-4xl md:text-5xl lg:text-7xl font-bold gradient-text mb-6 drop-shadow-lg"
            />
            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl text-oy-body-strong max-w-2xl mx-auto drop-shadow-md">
                {t(pageContent.subtitle)}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Service Categories */}
        {devCategories.map((category, catIndex) => (
          <section key={category.id} id={category.id} className="py-16 px-4 relative">
            {catIndex % 2 === 1 && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
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

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-6 border-t border-oy-glass-border pt-4 space-y-6">
                                <p className="text-oy-body leading-relaxed">{t(service.description)}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="text-sm font-semibold text-oy-label uppercase tracking-wider mb-3">
                                      {lang === 'ar' ? 'المخرجات' : lang === 'en' ? 'Deliverables' : 'Livrables'}
                                    </h4>
                                    <ul className="space-y-2">
                                      {service.deliverables[lang].map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-oy-muted">
                                          <span className="text-oy-icon mt-0.5">&#10003;</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

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
          title={{ fr: 'Un projet tech en tête ?', en: 'Have a tech project in mind?', ar: 'لديك مشروع تقني في ذهنك؟' }}
          subtitle={{ fr: 'Discutons de la solution technique idéale pour vous', en: 'Let\'s discuss the ideal technical solution for you', ar: 'لنناقش الحل التقني المثالي لك' }}
        />
      </div>
    </div>
  );
}
