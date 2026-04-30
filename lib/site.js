export const siteConfig = {
  name: 'HPL Solutions',
  legalName: 'HPL Solutions Riyadh',
  defaultLocale: 'ar',
  locales: ['ar', 'en'],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  phoneDisplay: '+966 5X XXX XXXX',
  phoneRaw: '+9665XXXXXXXX',
  email: 'info@example.com',
  addressLocality: 'Riyadh',
  addressCountry: 'SA',
  serviceArea: 'Riyadh, Saudi Arabia',
  ogImage: '/Images/photo_3_2026-04-29_18-01-45.jpg',
};

export const keywordSets = {
  ar: [
    'قواطع حمامات hpl',
    'قواطع حمامات hpl الرياض',
    'قواطع فينوليك الرياض',
    'الواح hpl',
    'الواح فينوليك',
    'كومباكت hpl',
    'لوكرات hpl',
    'كبائن استحمام hpl',
    'قواطع دورات المياه hpl',
    'توريد وتركيب hpl الرياض',
  ],
  en: [
    'HPL bathroom partitions Riyadh',
    'HPL toilet cubicle partitions Saudi Arabia',
    'phenolic compact laminate Riyadh',
    'HPL lockers Riyadh',
    'HPL shower cubicles Riyadh',
    'toilet cubicle partitions Riyadh',
    'compact laminate partitions Saudi Arabia',
    'phenolic partitions Riyadh',
  ],
};

export function getSiteUrl() {
  return siteConfig.siteUrl.replace(/\/$/, '');
}

export function getLocalizedUrl(lang) {
  return `${getSiteUrl()}/${lang}`;
}
