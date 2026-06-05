import { getSeoPages } from '../lib/seo-pages';

const BASE_URL = 'https://hplksa.com';

export default function sitemap() {
  const now = new Date().toISOString();
  const pageEntries = ['ar', 'en'].flatMap((lang) =>
    getSeoPages(lang).map((page) => ({
      url: `${BASE_URL}/${lang}/${page.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: lang === 'ar' ? 0.9 : 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/${page.slug}`,
          en: `${BASE_URL}/en/${page.slug}`,
        },
      },
    }))
  );

  const blogEntries = ['ar', 'en'].flatMap((lang) => [
    {
      url: `${BASE_URL}/${lang}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/blog`,
          en: `${BASE_URL}/en/blog`,
        },
      },
    },
    {
      url: `${BASE_URL}/${lang}/blog/hpl-vs-mdf-vs-pvc`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/blog/hpl-vs-mdf-vs-pvc`,
          en: `${BASE_URL}/en/blog/hpl-vs-mdf-vs-pvc`,
        },
      },
    }
  ]);

  return [
    {
      url: `${BASE_URL}/ar`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: { ar: `${BASE_URL}/ar`, en: `${BASE_URL}/en` } }
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: { ar: `${BASE_URL}/ar`, en: `${BASE_URL}/en` } }
    },
    ...blogEntries,
    ...pageEntries,
  ];
}
