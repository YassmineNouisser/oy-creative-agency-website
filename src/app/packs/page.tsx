'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import { packs, common } from '@/lib/content';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '@/lib/utils';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientBorderCard from '@/components/animations/GradientBorderCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import CTASection from '@/components/ui/CTASection';
import Image from 'next/image';

export default function Packs() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/packs.webp"
          alt="Business strategy and planning"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oy-hero-from)] via-[var(--oy-hero-via)] to-[var(--oy-hero-to)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-[var(--oy-section-tint)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          <TextReveal
            text={lang === 'ar' ? 'باقاتنا' : lang === 'en' ? 'Our Packs' : 'Nos Packs'}
            as="h1"
            className="text-4xl md:text-5xl lg:text-7xl font-bold gradient-text mb-6 drop-shadow-lg"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-oy-body-strong max-w-2xl mx-auto drop-shadow-md">
              {lang === 'ar'
                ? 'باقات مصممة لتلبية احتياجاتك وأهدافك بدقة'
                : lang === 'en'
                ? 'Packages designed to precisely meet your needs and goals'
                : 'Des formules conçues pour répondre précisément à vos besoins et objectifs'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Packs Grid */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packs.map((pack, i) => (
              <StaggerItem key={i}>
                <GradientBorderCard
                  popular={pack.popular}
                  hoverOnly={!pack.popular}
                  className={`h-full flex flex-col relative p-6 ${
                    pack.popular ? 'md:scale-105 md:-my-4 z-10' : ''
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute -top-3 start-6 px-3 py-1 bg-gradient-to-r from-oy-electric to-oy-cyan rounded-full text-xs font-bold text-white shadow-lg shadow-oy-electric/30">
                      {lang === 'ar' ? 'الأكثر طلبًا' : lang === 'en' ? 'Most popular' : 'Le plus demandé'}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-oy-heading mt-2">{t(pack.name)}</h3>
                  <p className="text-oy-icon text-sm font-medium mt-1">{t(pack.tagline)}</p>
                  <p className="text-oy-muted text-sm mt-3 leading-relaxed">{t(pack.description)}</p>

                  <div className="mt-6 flex-1">
                    <h4 className="text-xs font-semibold text-oy-label uppercase tracking-wider mb-3">
                      {lang === 'ar' ? 'يشمل' : lang === 'en' ? 'Includes' : 'Inclus'}
                    </h4>
                    <ul className="space-y-2">
                      {pack.includes[lang].map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-oy-muted">
                          <span className="text-oy-icon mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 space-y-2">
                    <Button variant="whatsapp" href={WHATSAPP_LINK} external className="w-full">
                      <Icon name="whatsapp" className="w-5 h-5 inline-block mr-1" /> {t(common.requestQuote)}
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" href={INSTAGRAM_LINK} external className="flex-1 !text-xs">
                        <Icon name="instagram" className="w-4 h-4 inline-block mr-1" /> {t(common.viewInstagram)}
                      </Button>
                      <Button variant="glass" href={WHATSAPP_LINK} external className="flex-1 !text-xs">
                        <Icon name="phone" className="w-4 h-4 inline-block mr-1" /> {t(common.scheduleCall)}
                      </Button>
                    </div>
                  </div>
                </GradientBorderCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={{ fr: 'Besoin d\'un pack sur mesure ?', en: 'Need a custom package?', ar: 'تحتاج باقة مخصصة؟' }}
        subtitle={{ fr: 'Nous créons aussi des formules personnalisées adaptées à vos besoins spécifiques', en: 'We also create custom packages tailored to your specific needs', ar: 'نصمم أيضًا باقات مخصصة حسب احتياجاتك' }}
      />
    </>
  );
}
