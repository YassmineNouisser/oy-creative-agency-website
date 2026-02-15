'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import {
  hero, showreel, servicesHighlights, whyUs, process, stats,
  faq, insights, portfolioProjects, common,
  heroTaglines, marqueeItems,
} from '@/lib/content';
import { WHATSAPP_LINK } from '@/lib/utils';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import AnimatedCard from '@/components/animations/AnimatedCard';
import AnimatedCounter from '@/components/animations/AnimatedCounter';
import TypewriterText from '@/components/animations/TypewriterText';
import AnimatedTimeline from '@/components/animations/AnimatedTimeline';
import MarqueeStrip from '@/components/animations/MarqueeStrip';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import VideoShowreel from '@/components/ui/VideoShowreel';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CTASection from '@/components/ui/CTASection';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero/home.webp"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oy-hero-from)] via-[var(--oy-hero-via)] to-[var(--oy-hero-to)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--oy-section-tint)] via-transparent to-oy-cyan/10" />

        <div className="absolute inset-0">
          <div className="absolute top-20 start-10 w-72 h-72 rounded-full bg-oy-electric/10 blur-[100px] animate-float" />
          <div className="absolute bottom-20 end-10 w-96 h-96 rounded-full bg-oy-cyan/[0.08] blur-[120px] animate-float-slow" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight gradient-text mb-6 drop-shadow-lg">
            <TypewriterText
              phrases={heroTaglines[lang]}
              typingSpeed={70}
              deletingSpeed={35}
              pauseDuration={2500}
            />
          </h1>
          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-xl text-oy-body-strong max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              {t(hero.subtitle)}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="whatsapp" href={WHATSAPP_LINK} external>
                <Icon name="whatsapp" className="w-5 h-5 inline-block mr-1" /> {t(hero.ctaWhatsapp)}
              </Button>
              <Button variant="outline" href="/services">
                {t(hero.ctaServices)}
              </Button>
            </div>
          </ScrollReveal>
          {/* Scroll indicator */}
          <ScrollReveal delay={1}>
            <div className="mt-16 flex justify-center">
              <div className="w-6 h-10 rounded-full border-2 border-oy-icon/40 flex justify-center pt-2">
                <div className="w-1.5 h-3 rounded-full bg-oy-accent animate-scroll-indicator" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SHOWREEL ===== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title={showreel.title} subtitle={showreel.subtitle} />
          <ScrollReveal>
            <VideoShowreel />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICES HIGHLIGHTS ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title={{ fr: 'Nos expertises', en: 'Our expertise', ar: 'خبراتنا' }}
            subtitle={{ fr: 'Des solutions 360° pour votre transformation digitale', en: '360° solutions for your digital transformation', ar: 'حلول شاملة 360° لتحولك الرقمي' }}
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesHighlights.map((service, i) => (
              <StaggerItem key={i}>
                <Link href={service.link}>
                  <AnimatedCard className="h-full">
                    <Icon name={service.icon} className="w-10 h-10 text-oy-icon" />
                    <h3 className="text-lg font-semibold text-oy-heading mb-2">{t(service.title)}</h3>
                    <p className="text-oy-muted text-sm leading-relaxed">{t(service.description)}</p>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--oy-section-tint)] to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTitle
            title={{ fr: 'Pourquoi OY ?', en: 'Why OY?', ar: 'لماذا OY؟' }}
            subtitle={{ fr: 'Ce qui nous différencie', en: 'What sets us apart', ar: 'ما يميزنا' }}
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <StaggerItem key={i}>
                <AnimatedCard className="h-full text-center">
                  <Icon name={item.icon} className="w-10 h-10 text-oy-icon" />
                  <h3 className="text-lg font-semibold text-oy-heading mb-2">{t(item.title)}</h3>
                  <p className="text-oy-muted text-sm leading-relaxed">{t(item.description)}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title={{ fr: 'Notre processus', en: 'Our process', ar: 'منهجيتنا' }}
            subtitle={{ fr: 'Un accompagnement structuré de A à Z', en: 'Structured support from A to Z', ar: 'دعم منظم من الألف إلى الياء' }}
          />
          <AnimatedTimeline steps={process} />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--oy-section-tint)] via-oy-cyan/10 to-[var(--oy-section-tint)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-oy-muted text-sm">{t(stat.label)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK MARQUEE ===== */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--oy-section-tint)] to-transparent opacity-50" />
        <div className="relative">
          <MarqueeStrip items={marqueeItems} speed={35} />
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--oy-section-tint)] to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTitle
            title={{ fr: 'Nos réalisations', en: 'Our work', ar: 'أعمالنا' }}
            subtitle={{ fr: 'Quelques projets qui parlent d\'eux-mêmes', en: 'Some projects that speak for themselves', ar: 'بعض المشاريع التي تتحدث عن نفسها' }}
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {portfolioProjects.slice(0, 3).map((project, i) => (
              <StaggerItem key={i}>
                <AnimatedCard className="h-full group">
                  <div className="aspect-video rounded-lg mb-4 overflow-hidden relative border border-oy-glass-border">
                    <Image
                      src={project.image}
                      alt={t(project.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
              </StaggerItem>
            ))}
          </StaggerContainer>
          <ScrollReveal className="text-center mt-10">
            <Button variant="outline" href="/work">
              {t(common.viewAll)} →
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title={{ fr: 'Questions fréquentes', en: 'Frequently asked questions', ar: 'الأسئلة الشائعة' }}
            subtitle={{ fr: 'Tout ce que vous devez savoir', en: 'Everything you need to know', ar: 'كل ما تحتاج معرفته' }}
          />
          <FAQAccordion items={faq} />
        </div>
      </section>

      {/* ===== LATEST INSIGHTS ===== */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--oy-section-tint)] to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTitle
            title={{ fr: 'Dernières actualités', en: 'Latest insights', ar: 'آخر الأخبار' }}
            subtitle={{ fr: 'Tendances, conseils et bonnes pratiques', en: 'Trends, tips and best practices', ar: 'اتجاهات ونصائح وأفضل الممارسات' }}
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((post, i) => (
              <StaggerItem key={i}>
                <AnimatedCard className="h-full">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 relative border border-oy-glass-border">
                    <Image
                      src={post.image}
                      alt={t(post.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <Badge>{t(post.category)}</Badge>
                  <h3 className="text-lg font-semibold text-oy-heading mt-2 mb-1">{t(post.title)}</h3>
                  <p className="text-oy-muted text-sm leading-relaxed">{t(post.excerpt)}</p>
                  <p className="text-oy-electric/50 text-xs mt-3">{post.date}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection
        title={{ fr: 'Prêt à propulser votre marque ?', en: 'Ready to propel your brand?', ar: 'مستعد لدفع علامتك التجارية؟' }}
        subtitle={{ fr: 'Discutons de votre projet ensemble', en: 'Let\'s discuss your project together', ar: 'لنناقش مشروعك معًا' }}
      />
    </>
  );
}
