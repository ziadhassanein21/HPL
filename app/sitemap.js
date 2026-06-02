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
    ...pageEntries,
  ];
}
