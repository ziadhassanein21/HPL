import { Alexandria, Cormorant_Garamond, Manrope } from 'next/font/google';
import { getDictionary } from '../../dictionaries';
import { getLocalizedUrl, getSiteUrl, hasRealContactValue, keywordSets, siteConfig } from '../../lib/site';

const arabicFont = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700'],
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0c1014',
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentUrl = getLocalizedUrl(lang);
  const imageUrl = `${getSiteUrl()}${siteConfig.ogImage}`;

  return {
    metadataBase: new URL(getSiteUrl()),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [...keywordSets[lang], ...keywordSets[lang === 'ar' ? 'en' : 'ar']],
    applicationName: siteConfig.name,
    category: 'construction',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        en: getLocalizedUrl('en'),
        ar: getLocalizedUrl('ar'),
        'x-default': getLocalizedUrl(siteConfig.defaultLocale),
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: currentUrl,
      siteName: siteConfig.name,
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: dict.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: getSiteUrl(),
    areaServed: {
      '@type': 'Country',
      name: siteConfig.countryName,
    },
  };

  if (hasRealContactValue(siteConfig.email)) {
    organizationSchema.email = siteConfig.email;
  }

  if (hasRealContactValue(siteConfig.phoneRaw)) {
    organizationSchema.telephone = siteConfig.phoneRaw;
  }

  const onlineStoreSchema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    name: siteConfig.name,
    description: lang === 'ar'
      ? 'حلول HPL فينوليك للقواطع واللوكرات والمناطق الرطبة في السعودية'
      : 'HPL phenolic partition, locker and wet-area solutions across Saudi Arabia',
    url: getLocalizedUrl(lang),
    areaServed: {
      '@type': 'Country',
      name: siteConfig.countryName,
    },
    availableLanguage: ['ar', 'en'],
    image: `${getSiteUrl()}${siteConfig.ogImage}`,
  };

  if (hasRealContactValue(siteConfig.phoneRaw)) {
    onlineStoreSchema.telephone = siteConfig.phoneRaw;
  }

  if (hasRealContactValue(siteConfig.email)) {
    onlineStoreSchema.email = siteConfig.email;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(onlineStoreSchema) }}
      />
      <div
        lang={lang}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className={`${arabicFont.variable} ${bodyFont.variable} ${headingFont.variable}`}
        style={{
          fontFamily: lang === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
        }}
      >
        {children}
      </div>
    </>
  );
}
