import { getDictionary } from '../../dictionaries';
import ClientPage from './ClientPage';
import { getLocalizedUrl, getSiteUrl, siteConfig } from '../../lib/site';

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const pageUrl = getLocalizedUrl(lang);
  const imageUrl = `${getSiteUrl()}${siteConfig.ogImage}`;

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
        serviceType: lang === 'ar' ? 'توريد وتركيب قواطع حمامات HPL' : 'HPL partition supply and installation',
        name: dict.meta.title,
        description: dict.meta.description,
        areaServed: siteConfig.serviceArea,
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.name,
          telephone: siteConfig.phoneRaw,
          email: siteConfig.email,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ClientPage dict={dict} lang={lang} />
    </>
  );
}
