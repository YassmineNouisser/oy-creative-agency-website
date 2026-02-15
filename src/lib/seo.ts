import type { Metadata } from 'next';

const SITE_URL = 'https://oycreative.tn';
const SITE_NAME = 'OY Creative Agency';

export function generatePageMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'fr_TN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: 'Agence créative hybride - Marketing, Branding, Production de contenu, Développement web & apps',
    url: SITE_URL,
    telephone: '+216XXXXXXXX',
    email: 'oycreatifagency@outlook.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tunis',
      addressCountry: 'TN',
    },
    sameAs: [
      'https://instagram.com/oy.creative',
    ],
  };
}
