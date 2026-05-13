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
  googleMapsUrl: 'https://www.google.com/maps/place/New+Basic+HPL/@22.6930914,23.4316767,7131993m/data=!3m1!1e3!4m6!3m5!1s0x69374ca786c9773d:0xf307f578894c6c75!8m2!3d24.222142!4d45.0740834!16s%2Fg%2F11z7472fn6',
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
