import 'server-only';

const dictionaries = {
  ar: () => import('./ar.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  const loadDictionary = dictionaries[locale] || dictionaries.ar;
  return loadDictionary();
};
