import { getLocalizedUrl, siteConfig } from '../lib/site';
import { getSeoPages } from '../lib/seo-pages';

export default function sitemap() {
  const now = new Date();
  const homePages = siteConfig.locales.map((lang) => ({
    url: getLocalizedUrl(lang),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: lang === siteConfig.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: {
        ar: getLocalizedUrl('ar'),
        en: getLocalizedUrl('en'),
      },
    },
  }));

  const servicePages = siteConfig.locales.flatMap((lang) =>
    getSeoPages(lang).map((page) => ({
      url: `${getLocalizedUrl(lang)}/${page.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${getLocalizedUrl('ar')}/${page.slug}`,
          en: `${getLocalizedUrl('en')}/${page.slug}`,
        },
      },
    }))
  );

  return [...homePages, ...servicePages];
}
