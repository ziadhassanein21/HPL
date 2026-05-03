import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Alexandria, Cormorant_Garamond, Manrope } from 'next/font/google';
import '../globals.css';
import { getDictionary } from '../../dictionaries';
import { getLocalizedUrl, getSiteUrl, hasRealContactValue, keywordSets, siteConfig } from '../../lib/site';
import {
  generateOrganizationSchema,
  generateOnlineStoreSchema,
  generateLocalBusinessSchema,
} from '../../lib/schema';
import ThemeProvider from './components/providers/ThemeProvider';

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
    /* ── Google Search Console verification placeholder ── */
    verification: {
      google: 'PASTE_YOUR_GSC_VERIFICATION_CODE_HERE',
    },
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
      canonical: `${getSiteUrl()}/ar`,
      languages: {
        ar: `${getSiteUrl()}/ar`,
        'x-default': `${getSiteUrl()}/ar`,
      },
    },
    icons: {
      icon: '/Images/logo.png',
      apple: '/Images/logo.png',
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: currentUrl,
      siteName: 'NEW BASIC Company',
      locale: 'ar_SA',
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
  return [{ lang: 'ar' }];
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;

  const organizationSchema = generateOrganizationSchema(lang, siteConfig, getSiteUrl, hasRealContactValue);
  const onlineStoreSchema = generateOnlineStoreSchema(lang, siteConfig, getLocalizedUrl, hasRealContactValue);
  const localBusinessSchema = generateLocalBusinessSchema(lang, siteConfig, getSiteUrl, hasRealContactValue);

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* ── TASK A3 — hreflang tags ── */}
        <link rel="alternate" hrefLang="ar" href="https://hplksa.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://hplksa.com/ar" />

        {/* ── TASK A8 — Preconnect for Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const resolvedTheme = storedTheme === 'light' || storedTheme === 'dark'
                  ? storedTheme
                  : (systemDark ? 'dark' : 'light');
                document.documentElement.dataset.theme = resolvedTheme;
                document.documentElement.style.colorScheme = resolvedTheme;
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        dir="rtl"
        className={`${arabicFont.variable} ${bodyFont.variable} ${headingFont.variable}`}
        style={{
          fontFamily: 'var(--font-arabic)',
        }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="store-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(onlineStoreSchema) }}
        />
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
