import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Alexandria, Cormorant_Garamond, Manrope } from 'next/font/google';
import '../globals.css';
import { getDictionary } from '../../dictionaries';
import { getLocalizedUrl, getSiteUrl, hasRealContactValue, keywordSets, siteConfig } from '../../lib/site';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateOnlineStoreSchema,
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
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? {
          verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
          },
        }
      : {}),
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
      canonical: `${getSiteUrl()}/${lang}`,
      languages: {
        ar: `${getSiteUrl()}/ar`,
        en: `${getSiteUrl()}/en`,
        'x-default': `${getSiteUrl()}/ar`,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/Images/favicon-square.webp', type: 'image/png' },
      ],
      apple: '/Images/favicon-square.webp',
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
  return siteConfig.locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const direction = lang === 'ar' ? 'rtl' : 'ltr';

  const organizationSchema = generateOrganizationSchema(lang, siteConfig, getSiteUrl, hasRealContactValue);
  const onlineStoreSchema = generateOnlineStoreSchema(lang, siteConfig, getLocalizedUrl, hasRealContactValue);
  const localBusinessSchema = generateLocalBusinessSchema(lang, siteConfig, getSiteUrl, hasRealContactValue);

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <head>
        {/* ── TASK A3 — hreflang tags ── */}
        <link rel="alternate" hrefLang="ar" href={`${getSiteUrl()}/ar`} />
        <link rel="alternate" hrefLang="en" href={`${getSiteUrl()}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${getSiteUrl()}/ar`} />

        {/* ── TASK A8 — Preconnect for Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Brand Icons for Google Search ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Images/favicon-square.webp" type="image/png" />
        <link rel="apple-touch-icon" href="/Images/favicon-square.webp" />
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
            try {
              var t = localStorage.getItem('theme');
              var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var r = t === 'light' || t === 'dark' ? t : (d ? 'dark' : 'light');
              document.documentElement.dataset.theme = r;
              document.documentElement.style.colorScheme = r;
            } catch (e) {}
          `}
        </Script>
      </head>
      <body
        dir={direction}
        className={`${arabicFont.variable} ${bodyFont.variable} ${headingFont.variable}`}
        style={{
          fontFamily: lang === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)',
        }}
      >
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
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <SpeedInsights />
      </body>
    </html>
  );
}
