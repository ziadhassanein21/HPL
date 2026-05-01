export function generateSchemaGraph(dict, lang, pageUrl, imageUrl, siteConfig, hasRealContactValue, getSiteUrl) {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: lang,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${getSiteUrl()}#website`,
          url: getSiteUrl(),
          name: siteConfig.name,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: imageUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'ar' ? 'الرئيسية' : 'Home',
            item: pageUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: lang === 'ar' ? 'قواطع حمامات HPL' : 'HPL Bathroom Partitions',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: lang === 'ar' ? 'توريد وتركيب حلول HPL في السعودية' : 'HPL supply and installation in Saudi Arabia',
        name: dict.meta.title,
        description: dict.meta.description,
        areaServed: {
          '@type': 'Country',
          name: siteConfig.countryName,
        },
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: lang === 'ar' ? 'حلول HPL' : 'HPL Solutions',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: dict.products.p1_title } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: dict.products.p2_title } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: dict.products.p3_title } },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: dict.faq.q1,
            acceptedAnswer: { '@type': 'Answer', text: dict.faq.a1 },
          },
          {
            '@type': 'Question',
            name: dict.faq.q2,
            acceptedAnswer: { '@type': 'Answer', text: dict.faq.a2 },
          },
          {
            '@type': 'Question',
            name: dict.faq.q3,
            acceptedAnswer: { '@type': 'Answer', text: dict.faq.a3 },
          },
        ],
      },
    ],
  };

  if (hasRealContactValue(siteConfig.phoneRaw)) {
    schemaGraph['@graph'][2].provider.telephone = siteConfig.phoneRaw;
  }

  if (hasRealContactValue(siteConfig.email)) {
    schemaGraph['@graph'][2].provider.email = siteConfig.email;
  }

  return schemaGraph;
}
