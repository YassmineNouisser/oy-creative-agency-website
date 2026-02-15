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

const marketingCategories = servicesDetailed.categories.filter((c) =>
  ['marketing', 'content', 'production'].includes(c.id)
);

const pageContent = {
  title: {
    fr: 'Marketing Digital',
    en: 'Digital Marketing',
    ar: 'التسويق الرقمي',
  },
  subtitle: {
    fr: 'Stratégie, branding, contenu et production audiovisuelle pour amplifier votre présence digitale.',
    en: 'Strategy, branding, content and audiovisual production to amplify your digital presence.',
    ar: 'استراتيجية، علامة تجارية، محتوى وإنتاج سمعي بصري لتعزيز حضورك الرقمي.',
  },
} as const;

function MarketingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/20 via-oy-dark to-oy-dark" />
      <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-gradient-to-bl from-rose-500/8 via-orange-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 start-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/6 via-purple-500/4 to-transparent rounded-full blur-3xl" />

      {/* Floating SVG icons */}
      <svg className="absolute top-32 start-[8%] w-16 h-16 text-rose-400/10 animate-float-slow" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 8h2a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2V7a6 6 0 1112 0v1zm-2 0V7a4 4 0 10-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z" />
      </svg>

      {/* Megaphone */}
      <svg className="absolute top-48 end-[12%] w-20 h-20 text-orange-400/8 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>

      {/* Chart / Analytics */}
      <svg className="absolute top-[40%] start-[5%] w-14 h-14 text-pink-400/8 animate-float-slower" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 6-6" />
      </svg>

      {/* Camera */}
      <svg className="absolute top-[60%] end-[8%] w-16 h-16 text-purple-400/8 animate-float-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>

      {/* Hashtag */}
      <svg className="absolute top-[25%] start-[45%] w-12 h-12 text-rose-300/6 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 3l-2 18M16 3l-2 18M3 8h18M3 16h18" />
      </svg>

      {/* Heart / Like */}
      <svg className="absolute bottom-[25%] start-[15%] w-10 h-10 text-red-400/8 animate-float" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      {/* Target */}
      <svg className="absolute bottom-[40%] end-[20%] w-12 h-12 text-orange-300/6 animate-float-slower" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>

      {/* Play button / Video */}
      <svg className="absolute top-[75%] start-[40%] w-14 h-14 text-pink-300/6 animate-float-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    </div>
  );
}

export default function MarketingPage() {
  const { t, lang } = useLanguage();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <div className="relative">
      <MarketingBackground />

      <div className="relative">
        {/* Hero with background photo */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/hero/marketing.webp"
            alt="Digital marketing workspace"
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--oy-hero-from)] via-[var(--oy-hero-via)] to-[var(--oy-hero-to)]" />
          {/* Colored tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 via-transparent to-orange-900/20" />

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
        {marketingCategories.map((category, catIndex) => (
          <section key={category.id} id={category.id} className="py-16 px-4 relative">
            {catIndex % 2 === 1 && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent" />
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
          title={{ fr: 'Prêt à booster votre visibilité ?', en: 'Ready to boost your visibility?', ar: 'مستعد لتعزيز ظهورك؟' }}
          subtitle={{ fr: 'Discutons de votre stratégie marketing', en: 'Let\'s discuss your marketing strategy', ar: 'لنناقش استراتيجيتك التسويقية' }}
        />
      </div>
    </div>
  );
}
