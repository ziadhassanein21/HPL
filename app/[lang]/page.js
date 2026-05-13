import { getDictionary } from '../../dictionaries';
import ClientPage from './ClientPage';
import { getLocalizedUrl, getSiteUrl, siteConfig } from '../../lib/site';
import SchemaOrg from '../../components/SchemaOrg';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentUrl = getLocalizedUrl(lang);
  const imageUrl = `${getSiteUrl()}${siteConfig.ogImage}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: currentUrl,
      languages: {
        ar: `${getSiteUrl()}/ar`,
        en: `${getSiteUrl()}/en`,
        'x-default': `${getSiteUrl()}/ar`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: currentUrl,
      siteName: siteConfig.name,
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: dict.hero.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentUrl = getLocalizedUrl(lang);
  const imageUrl = `${getSiteUrl()}${siteConfig.ogImage}`;

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${currentUrl}#webpage`,
    url: currentUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: lang,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageUrl,
    },
    about: {
      '@type': 'Thing',
      name: lang === 'ar' ? 'ألواح وحلول HPL في السعودية' : 'HPL panels and solutions in Saudi Arabia',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: dict.faq.q1,
        acceptedAnswer: {
          '@type': 'Answer',
          text: dict.faq.a1,
        },
      },
      {
        '@type': 'Question',
        name: dict.faq.q2,
        acceptedAnswer: {
          '@type': 'Answer',
          text: dict.faq.a2,
        },
      },
      {
        '@type': 'Question',
        name: dict.faq.q3,
        acceptedAnswer: {
          '@type': 'Answer',
          text: dict.faq.a3,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'ar' ? 'الرئيسية' : 'Home', item: currentUrl },
    ],
  };

  return (
    <>
      <ClientPage dict={dict} lang={lang} />
      <SchemaOrg schema={webPageSchema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
    </>
  );
}
