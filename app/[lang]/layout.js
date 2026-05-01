import { SpeedInsights } from "@vercel/speed-insights/next";
import { Alexandria, Cormorant_Garamond, Manrope } from 'next/font/google';
import '../globals.css';
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
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        ar: '/ar',
        'x-default': `/${siteConfig.defaultLocale}`,
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/Images/logo.png',
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${getSiteUrl()}#localbusiness`,
    name: siteConfig.name,
    image: `${getSiteUrl()}${siteConfig.logo}`,
    url: getSiteUrl(),
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    description: lang === 'ar'
      ? 'توريد وتركيب قواطع حمامات ولوكرات وكبائن استحمام HPL فينوليك في السعودية'
      : 'Supply and installation of HPL phenolic bathroom partitions, lockers and shower cubicles in Saudi Arabia',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: lang === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'ar' ? 'حلول HPL' : 'HPL Solutions',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: lang === 'ar' ? 'قواطع حمامات HPL' : 'HPL Bathroom Partitions',
        },
        {
          '@type': 'OfferCatalog',
          name: lang === 'ar' ? 'لوكرات HPL' : 'HPL Lockers',
        },
        {
          '@type': 'OfferCatalog',
          name: lang === 'ar' ? 'كبائن استحمام HPL' : 'HPL Shower Cubicles',
        },
      ],
    },
    sameAs: [],
  };

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const resolvedTheme = storedTheme === 'light' || storedTheme === 'dark'
                    ? storedTheme
                    : (systemDark ? 'dark' : 'light');
                  document.documentElement.dataset.theme = resolvedTheme;
                  document.documentElement.style.colorScheme = resolvedTheme;
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        className={`${arabicFont.variable} ${bodyFont.variable} ${headingFont.variable}`}
        style={{
          fontFamily: lang === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(onlineStoreSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
