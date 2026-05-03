export const siteConfig = {
  name: 'NEW BASIC Company',
  legalName: 'NEW BASIC Company',
  defaultLocale: 'ar',
  locales: ['ar', 'en'],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hplksa.com',
  phoneDisplay: '+966 551 130 855',
  phoneRaw: '+966551130855',
  whatsappRaw: '966551130855',
  email: 'newbasic.ac@gmail.com',
  addressCountry: 'SA',
  countryName: 'Saudi Arabia',
  serviceArea: 'Saudi Arabia',
  ogImage: '/Images/hpl-bathroom-partition-riyadh.webp',
  logo: '/Images/logo.png',
};

export const keywordSets = {
  ar: [
    'hpl السعودية',
    'الواح hpl السعودية',
    'مورد hpl في السعودية',
    'قواطع حمامات hpl',
    'قواطع حمامات hpl السعودية',
    'قواطع فينوليك السعودية',
    'الواح hpl',
    'الواح فينوليك',
    'كومباكت hpl',
    'لوكرات hpl',
    'كبائن استحمام hpl',
    'قواطع دورات المياه hpl',
    'توريد وتركيب hpl السعودية',
  ],
  en: [
    'HPL Saudi Arabia',
    'HPL supplier Saudi Arabia',
    'HPL panels Saudi Arabia',
    'HPL bathroom partitions Saudi Arabia',
    'HPL toilet cubicle partitions Saudi Arabia',
    'phenolic compact laminate Saudi Arabia',
    'HPL lockers Saudi Arabia',
    'HPL shower cubicles Saudi Arabia',
    'toilet cubicle partitions Saudi Arabia',
    'compact laminate partitions Saudi Arabia',
    'phenolic partitions Saudi Arabia',
  ],
};

export function hasRealContactValue(value) {
  if (!value) {
    return false;
  }

  return !/example\.com|X{3,}|x{3,}/.test(value);
}

export function getSiteUrl() {
  return siteConfig.siteUrl.replace(/\/$/, '');
}

export function getLocalizedUrl(lang) {
  return `${getSiteUrl()}/${lang}`;
}
