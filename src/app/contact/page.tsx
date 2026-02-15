'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { contactContent, common } from '@/lib/content';
import { WHATSAPP_LINK, INSTAGRAM_LINK, EMAIL, PHONE } from '@/lib/utils';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t, lang } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setError(
        lang === 'ar' ? 'حدث خطأ، حاول مرة أخرى.' :
        lang === 'en' ? 'An error occurred. Please try again.' :
        'Une erreur est survenue. Veuillez réessayer.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/contact-new.jpg"
          alt="Contact and communication"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oy-hero-from)] via-[var(--oy-hero-via)] to-[var(--oy-hero-to)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/25 via-transparent to-[var(--oy-section-tint)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          <TextReveal
            text={t(contactContent.title)}
            as="h1"
            className="text-4xl md:text-5xl lg:text-7xl font-bold gradient-text mb-6 drop-shadow-lg"
          />
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-oy-body-strong max-w-2xl mx-auto drop-shadow-md">
              {t(contactContent.subtitle)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <GlassCard>
                {sent ? (
                  <div className="text-center py-10">
                    <div className="text-5xl mb-4">✅</div>
                    <p className="text-xl font-semibold text-oy-heading">{t(contactContent.form.success)}</p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-oy-label mb-1">{t(contactContent.form.name)}</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-oy-dark-3 border border-oy-glass-border text-oy-body-strong placeholder:text-oy-muted focus:outline-none focus:border-oy-icon/50 focus:ring-1 focus:ring-oy-icon/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-oy-label mb-1">{t(contactContent.form.email)}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-oy-dark-3 border border-oy-glass-border text-oy-body-strong placeholder:text-oy-muted focus:outline-none focus:border-oy-icon/50 focus:ring-1 focus:ring-oy-icon/30 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-oy-label mb-1">{t(contactContent.form.subject)}</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-oy-dark-3 border border-oy-glass-border text-oy-body-strong placeholder:text-oy-muted focus:outline-none focus:border-oy-icon/50 focus:ring-1 focus:ring-oy-icon/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-oy-label mb-1">{t(contactContent.form.message)}</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-oy-dark-3 border border-oy-glass-border text-oy-body-strong placeholder:text-oy-muted focus:outline-none focus:border-oy-icon/50 focus:ring-1 focus:ring-oy-icon/30 transition-all resize-none"
                      />
                    </div>
                    {error && (
                      <p className="text-red-400 text-sm text-center">{error}</p>
                    )}
                    <Button variant="primary" className="w-full" disabled={sending}>
                      {sending
                        ? (lang === 'ar' ? 'جاري الإرسال...' : lang === 'en' ? 'Sending...' : 'Envoi en cours...')
                        : `${t(contactContent.form.send)} →`
                      }
                    </Button>
                  </form>
                )}
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal delay={0.1}>
              <GlassCard>
                <h3 className="font-semibold text-oy-heading mb-4">
                  {lang === 'ar' ? 'معلومات الاتصال' : lang === 'en' ? 'Contact info' : 'Informations de contact'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="envelope" className="w-5 h-5 text-oy-icon mt-0.5" />
                    <div>
                      <p className="text-xs text-oy-muted">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-oy-heading hover:text-oy-label transition-colors">{EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="phone" className="w-5 h-5 text-oy-icon mt-0.5" />
                    <div>
                      <p className="text-xs text-oy-muted">{lang === 'ar' ? 'الهاتف' : lang === 'en' ? 'Phone' : 'Téléphone'}</p>
                      <p className="text-oy-heading">{PHONE}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="mappin" className="w-5 h-5 text-oy-icon mt-0.5" />
                    <div>
                      <p className="text-xs text-oy-muted">{lang === 'ar' ? 'العنوان' : lang === 'en' ? 'Address' : 'Adresse'}</p>
                      <p className="text-oy-heading">{t(contactContent.info.address)}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard>
                <h3 className="font-semibold text-oy-heading mb-4">
                  {lang === 'ar' ? 'تواصل سريع' : lang === 'en' ? 'Quick contact' : 'Contact rapide'}
                </h3>
                <div className="space-y-2">
                  <Button variant="whatsapp" href={WHATSAPP_LINK} external className="w-full">
                    <Icon name="whatsapp" className="w-5 h-5 inline-block mr-2" /> WhatsApp
                  </Button>
                  <Button variant="instagram" href={INSTAGRAM_LINK} external className="w-full">
                    <Icon name="instagram" className="w-5 h-5 inline-block mr-2" /> Instagram
                  </Button>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <GlassCard>
                <h3 className="font-semibold text-oy-heading mb-4">
                  {lang === 'ar' ? 'ساعات العمل' : lang === 'en' ? 'Working hours' : 'Horaires'}
                </h3>
                <div className="space-y-2 text-sm text-oy-muted">
                  <div className="flex justify-between">
                    <span>{lang === 'ar' ? 'الإثنين - الجمعة' : lang === 'en' ? 'Monday - Friday' : 'Lundi - Vendredi'}</span>
                    <span className="text-oy-label">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === 'ar' ? 'السبت' : lang === 'en' ? 'Saturday' : 'Samedi'}</span>
                    <span className="text-oy-label">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === 'ar' ? 'الأحد' : lang === 'en' ? 'Sunday' : 'Dimanche'}</span>
                    <span className="text-oy-icon/50">{lang === 'ar' ? 'مغلق' : lang === 'en' ? 'Closed' : 'Fermé'}</span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
