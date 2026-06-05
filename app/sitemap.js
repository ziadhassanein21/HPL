import { getSeoPages } from '../lib/seo-pages';
import { getBlogPosts } from '../lib/content/blog-data';

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

  const allBlogPosts = getBlogPosts();
  
  const blogIndexEntries = ['ar', 'en'].map((lang) => ({
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
  }));

  const blogPostEntries = ['ar', 'en'].flatMap((lang) => 
    allBlogPosts.map((post) => ({
      url: `${BASE_URL}/${lang}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/blog/${post.slug}`,
          en: `${BASE_URL}/en/blog/${post.slug}`,
        },
      },
    }))
  );

  const blogEntries = [...blogIndexEntries, ...blogPostEntries];

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
