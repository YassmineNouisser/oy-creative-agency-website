'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Lang = 'fr' | 'en' | 'ar';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: Record<Lang, string>) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('oy-lang') as Lang | null;
    if (stored && ['fr', 'en', 'ar'].includes(stored)) {
      setLangState(stored);
      applyDir(stored);
    }
    setMounted(true);
  }, []);

  const applyDir = (l: Lang) => {
    const d = l === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = d;
    document.documentElement.lang = l;
    if (l === 'ar') {
      document.documentElement.classList.add('font-arabic');
    } else {
      document.documentElement.classList.remove('font-arabic');
    }
  };

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('oy-lang', l);
    applyDir(l);
  }, []);

  const t = useCallback((obj: Record<Lang, string>) => {
    return obj[lang] || obj.fr;
  }, [lang]);

  const dir = lang === 'ar' ? 'rtl' as const : 'ltr' as const;

  if (!mounted) {
    return <div className="min-h-screen bg-oy-dark" />;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
