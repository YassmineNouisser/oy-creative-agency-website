'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import type { Lang } from '@/providers/LanguageProvider';
import { team } from '@/lib/content';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import CTASection from '@/components/ui/CTASection';
import Badge from '@/components/ui/Badge';
import TextReveal from '@/components/animations/TextReveal';
import Icon from '@/components/ui/Icon';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhoWeAre() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/who-we-are.webp"
          alt="Creative team working together"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oy-hero-from)] via-[var(--oy-hero-via)] to-[var(--oy-hero-to)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/25 via-transparent to-[var(--oy-section-tint)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          <TextReveal
            text={t(team.sectionTitle)}
            as="h1"
            className="text-4xl md:text-5xl lg:text-7xl font-bold gradient-text mb-6 drop-shadow-lg"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-oy-body-strong max-w-2xl mx-auto drop-shadow-md">
              {t(team.sectionSubtitle)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founders */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {team.members.map((member, i) => (
            <ScrollReveal key={i} delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Left: Photo + Certifications */}
                <div className={`lg:col-span-2 space-y-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[var(--oy-section-tint)] to-oy-cyan/10 border border-oy-glass-border overflow-hidden">
                      <Image
                        src={i === 0 ? '/team/oussema.jpeg' : '/team/yassmine.jpeg'}
                        alt={member.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        quality={80}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -end-3 w-24 h-24 rounded-full bg-gradient-to-br from-oy-electric to-oy-cyan blur-[40px] opacity-30" />
                  </div>

                  {/* Certifications */}
                  <GlassCard>
                    <h4 className="text-sm font-semibold text-oy-label mb-3">
                      {lang === 'ar' ? 'الشهادات' : lang === 'en' ? 'Certifications' : 'Certifications'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications[lang].map((cert, j) => (
                        <Badge key={j}>{cert}</Badge>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Right: Bio + Skills */}
                <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-oy-heading mb-1">{member.name}</h2>
                  <p className="text-oy-icon font-medium mb-6">{t(member.role)}</p>
                  <p className="text-oy-body leading-relaxed mb-8">{t(member.bio)}</p>

                  {/* Skills */}
                  <h4 className="text-sm font-semibold text-oy-label mb-3 uppercase tracking-wider">
                    {lang === 'ar' ? 'المهارات' : lang === 'en' ? 'Skills' : 'Compétences'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {member.skills[lang].map((skill, j) => (
                      <div key={j}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-oy-muted">{skill}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-oy-dark-3/50 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-oy-electric to-oy-cyan"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${85 + (j % 3) * 5}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: j * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Roles & Operations */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--oy-section-tint)] to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <SectionTitle title={team.roles.title} />
          <ScrollReveal>
            <GlassCard className="text-center">
              <p className="text-oy-body leading-relaxed text-lg">
                {t(team.roles.description)}
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title={team.values.title} />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.values.items.map((value, i) => (
              <StaggerItem key={i}>
                <AnimatedCard className="h-full text-center">
                  <Icon name={value.icon} className="w-10 h-10 text-oy-icon" />
                  <h3 className="text-lg font-semibold text-oy-heading mb-2">{t(value.label)}</h3>
                  <p className="text-oy-muted text-sm">{t(value.description)}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={{ fr: 'Travaillons ensemble', en: 'Let\'s work together', ar: 'لنعمل معًا' }}
        subtitle={{ fr: 'Contactez-nous pour discuter de votre projet', en: 'Contact us to discuss your project', ar: 'تواصل معنا لمناقشة مشروعك' }}
      />
    </>
  );
}
