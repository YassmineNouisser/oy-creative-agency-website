'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/providers/LanguageProvider';
import type { Lang } from '@/providers/LanguageProvider';
import { nav } from '@/lib/content';
import { WHATSAPP_LINK } from '@/lib/utils';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { FaWhatsapp } from 'react-icons/fa';

const languages: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'عر' },
];

const navLinks = [
  { href: '/', label: nav.home },
  { href: '/who-we-are', label: nav.whoWeAre },
  {
    href: '/services',
    label: nav.services,
    children: [
      { href: '/services/marketing', label: nav.marketing },
      { href: '/services/developpement-it', label: nav.devIt },
    ],
  },
  { href: '/packs', label: nav.packs },
  { href: '/shop', label: nav.shop },
  { href: '/work', label: nav.work },
  { href: '/contact', label: nav.contact },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 start-0 end-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-2 backdrop-blur-xl bg-oy-dark/80 border-b border-oy-glass-border shadow-lg shadow-oy-dark-2/10'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo-oy.jpeg" alt="OY Creative Agency" width={56} height={56} className="rounded-lg" priority />
            <span className="hidden sm:inline text-sm text-oy-muted font-medium">Creative Agency</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="px-3 py-2 text-sm text-oy-body hover:text-oy-label transition-colors animated-underline rounded-lg flex items-center gap-1"
                  >
                    {t(link.label)}
                    <motion.svg
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full start-0 mt-2 w-56 rounded-xl bg-oy-dark-2/95 backdrop-blur-xl border border-oy-glass-border shadow-xl shadow-oy-dark-2/20 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-3 text-sm text-oy-body hover:text-oy-label hover:bg-oy-electric/10 transition-colors border-b border-oy-glass-border last:border-b-0"
                          >
                            {t(child.label)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-oy-body hover:text-oy-label transition-colors animated-underline rounded-lg"
                >
                  {t(link.label)}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Switch */}
            <div className="flex items-center gap-1 bg-oy-dark-3/50 rounded-lg p-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                    lang === l.code
                      ? 'bg-oy-electric text-white shadow-sm shadow-oy-electric/30'
                      : 'text-oy-muted hover:text-oy-label'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden md:block">
              <Button variant="primary" href={WHATSAPP_LINK} external className="!py-2 !px-4 !text-xs">
                {t(nav.getQuote)}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-oy-label hover:text-oy-heading transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-oy-dark/95 backdrop-blur-xl pt-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-2 p-6">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href} className="w-full">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full text-center py-3 text-lg text-oy-body-strong hover:text-oy-label transition-colors border-b border-oy-glass-border flex items-center justify-center gap-2"
                    >
                      {t(link.label)}
                      <motion.svg
                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="block w-full text-center py-2.5 text-base text-oy-label/70 hover:text-oy-label transition-colors bg-oy-dark-2/30"
                            >
                              {t(child.label)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-center py-3 text-lg text-oy-body-strong hover:text-oy-label transition-colors border-b border-oy-glass-border"
                  >
                    {t(link.label)}
                  </Link>
                )
              )}
              <div className="mt-6">
                <Button variant="whatsapp" href={WHATSAPP_LINK} external>
                  <FaWhatsapp className="inline w-5 h-5" /> {t(nav.getQuote)}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
