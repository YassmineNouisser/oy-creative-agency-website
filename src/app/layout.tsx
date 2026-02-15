import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';
import BackgroundEffects from '@/components/layout/BackgroundEffects';
import ScrollProgress from '@/components/animations/ScrollProgress';
import './globals.css';

export const metadata: Metadata = {
  title: 'OY Creative Agency | Marketing, Branding & Développement Web',
  description:
    'OY Creative Agency — Agence hybride en Tunisie alliant marketing stratégique, production créative et développement web & apps pour propulser votre marque.',
  keywords: ['agence créative', 'marketing digital', 'branding', 'développement web', 'Tunisie', 'OY Creative'],
  openGraph: {
    title: 'OY Creative Agency',
    description: 'Agence hybride — Marketing, Branding, Production & Tech',
    url: 'https://oycreative.tn',
    siteName: 'OY Creative Agency',
    locale: 'fr_TN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('oy-theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'OY Creative Agency',
              description: 'Agence créative hybride - Marketing, Branding, Production de contenu, Développement web & apps',
              url: 'https://oycreative.tn',
              telephone: '+216XXXXXXXX',
              email: 'oycreatifagency@outlook.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tunis',
                addressCountry: 'TN',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <BackgroundEffects />
            <Header />
            <main className="pt-20 relative z-10">
              {children}
            </main>
            <Footer />
            <FloatingCTA />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
