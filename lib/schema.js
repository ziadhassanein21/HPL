/**
 * Schema generation utilities for JSON-LD structured data
 */

export function generateOrganizationSchema(lang, siteConfig, getSiteUrl, hasRealContactValue) {
  const schema = {
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
    schema.email = siteConfig.email;
  }

  if (hasRealContactValue(siteConfig.phoneRaw)) {
    schema.telephone = siteConfig.phoneRaw;
  }

  return schema;
}

export function generateOnlineStoreSchema(lang, siteConfig, getLocalizedUrl, hasRealContactValue) {
  const schema = {
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
    schema.telephone = siteConfig.phoneRaw;
  }

  if (hasRealContactValue(siteConfig.email)) {
    schema.email = siteConfig.email;
  }

  return schema;
}

export function generateLocalBusinessSchema(lang, siteConfig, getSiteUrl, hasRealContactValue) {
  return {
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
}

// Helper function referenced in schemas
function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hplksa.com';
  return siteUrl.replace(/\/$/, '');
}

export function generateBreadcrumbSchema(lang, items) {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
