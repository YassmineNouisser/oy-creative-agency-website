'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';
import { portfolioProjects } from '@/lib/content';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import AnimatedCard from '@/components/animations/AnimatedCard';
import Badge from '@/components/ui/Badge';
import CTASection from '@/components/ui/CTASection';
import Image from 'next/image';

const filterCategories = [
  { fr: 'Tout', en: 'All', ar: 'الكل' },
  { fr: 'Web', en: 'Web', ar: 'ويب' },
  { fr: 'Apps', en: 'Apps', ar: 'تطبيقات' },
  { fr: 'Branding', en: 'Branding', ar: 'العلامة التجارية' },
  { fr: 'Marketing', en: 'Marketing', ar: 'تسويق' },
];

export default function Work() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Tout');

  const filtered = activeFilter === 'Tout'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category.fr === activeFilter || p.category.en === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/work.webp"
          alt="Creative portfolio showcase"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oy-hero-from)] via-[var(--oy-hero-via)] to-[var(--oy-hero-to)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--oy-section-tint)] via-transparent to-purple-900/15" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          <TextReveal
            text={lang === 'ar' ? 'أعمالنا' : lang === 'en' ? 'Our Work' : 'Portfolio'}
            as="h1"
            className="text-4xl md:text-5xl lg:text-7xl font-bold gradient-text mb-6 drop-shadow-lg"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-oy-body-strong max-w-2xl mx-auto drop-shadow-md">
              {lang === 'ar'
                ? 'اكتشف مشاريعنا وإنجازاتنا'
                : lang === 'en'
                ? 'Discover our projects and achievements'
                : 'Découvrez nos projets et réalisations'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 pb-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center">
              {filterCategories.map((cat) => (
                <button
                  key={cat.fr}
                  onClick={() => setActiveFilter(cat.fr)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === cat.fr
                      ? 'bg-oy-electric text-white shadow-lg shadow-oy-electric/30'
                      : 'glass text-oy-muted hover:text-oy-label'
                  }`}
                >
                  {cat[lang]}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title.fr}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedCard className="h-full group">
                    {/* Project Image */}
                    <div className="aspect-video rounded-lg mb-4 overflow-hidden relative border border-oy-glass-border">
                      <Image
                        src={project.image}
                        alt={t(project.title)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-oy-electric/0 group-hover:bg-oy-electric/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-oy-heading text-sm font-medium bg-oy-dark/60 px-4 py-2 rounded-lg backdrop-blur-sm">
                          {lang === 'ar' ? 'عرض المشروع' : lang === 'en' ? 'View project' : 'Voir le projet'}
                        </span>
                      </div>
                    </div>

                    <Badge>{t(project.category)}</Badge>
                    <h3 className="text-lg font-semibold text-oy-heading mt-2 mb-1">{t(project.title)}</h3>
                    <p className="text-oy-muted text-sm">{t(project.description)}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-oy-subtle/70 bg-oy-electric/5 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={{ fr: 'Votre projet est le prochain', en: 'Your project is next', ar: 'مشروعك هو التالي' }}
        subtitle={{ fr: 'Parlons de votre vision', en: 'Let\'s talk about your vision', ar: 'لنتحدث عن رؤيتك' }}
      />
    </>
  );
}
