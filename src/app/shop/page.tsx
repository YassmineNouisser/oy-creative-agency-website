'use client';

import { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { shopItems, common } from '@/lib/content';
import { WHATSAPP_LINK } from '@/lib/utils';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import AnimatedCard from '@/components/animations/AnimatedCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Badge from '@/components/ui/Badge';
import CTASection from '@/components/ui/CTASection';
import Image from 'next/image';

export default function Shop() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories = shopItems.map((cat, i) => ({
    index: i,
    label: t(cat.category),
  }));

  const filteredItems = activeCategory !== null
    ? [shopItems[activeCategory]]
    : shopItems;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/shop.webp"
          alt="Graphic design and print materials"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oy-hero-from)] via-[var(--oy-hero-via)] to-[var(--oy-hero-to)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--oy-section-tint)] via-transparent to-pink-900/15" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          <TextReveal
            text={lang === 'ar' ? 'المتجر' : lang === 'en' ? 'Shop' : 'Boutique'}
            as="h1"
            className="text-4xl md:text-5xl lg:text-7xl font-bold gradient-text mb-6 drop-shadow-lg"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-oy-body-strong max-w-2xl mx-auto drop-shadow-md">
              {lang === 'ar'
                ? 'مواد مطبوعة ورقمية احترافية لعلامتك التجارية'
                : lang === 'en'
                ? 'Professional print & digital materials for your brand'
                : 'Supports print & digitaux professionnels pour votre marque'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 pb-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === null
                    ? 'bg-oy-electric text-white shadow-lg shadow-oy-electric/30'
                    : 'glass text-oy-muted hover:text-oy-label'
                }`}
              >
                {lang === 'ar' ? 'الكل' : lang === 'en' ? 'All' : 'Tout'}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.index}
                  onClick={() => setActiveCategory(cat.index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat.index
                      ? 'bg-oy-electric text-white shadow-lg shadow-oy-electric/30'
                      : 'glass text-oy-muted hover:text-oy-label'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Items */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredItems.map((category, catIdx) => (
            <div key={catIdx} className="mb-12">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-oy-heading mb-6">{t(category.category)}</h2>
              </ScrollReveal>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <StaggerItem key={itemIdx}>
                    <AnimatedCard className="h-full flex flex-col">
                      {/* Product image */}
                      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative border border-oy-glass-border">
                        <Image
                          src={item.image}
                          alt={t(item.name)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      <h3 className="text-lg font-semibold text-oy-heading">{t(item.name)}</h3>
                      <p className="text-oy-muted text-sm mt-1 flex-1">{t(item.description)}</p>

                      {/* Variants */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {item.variants[lang].map((v, vi) => (
                          <Badge key={vi}>{v}</Badge>
                        ))}
                      </div>

                      {/* Delay */}
                      <p className="text-oy-electric/60 text-xs mt-2">
                        ⏱ {t(item.delay)}
                      </p>

                      {/* CTA */}
                      <div className="mt-4">
                        <Button variant="whatsapp" href={WHATSAPP_LINK} external className="w-full !text-sm">
                          <Icon name="whatsapp" className="w-5 h-5 inline-block mr-1" /> {t(common.chatWhatsapp)}
                        </Button>
                      </div>
                    </AnimatedCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={{ fr: 'Besoin d\'un design personnalisé ?', en: 'Need a custom design?', ar: 'تحتاج تصميمًا مخصصًا؟' }}
        subtitle={{ fr: 'Contactez-nous pour un devis sur mesure', en: 'Contact us for a custom quote', ar: 'تواصل معنا للحصول على عرض أسعار مخصص' }}
      />
    </>
  );
}
