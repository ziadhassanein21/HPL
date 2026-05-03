import { p2BathroomPartitions } from './content/p2-bathroom-partitions';
import { p3Lockers } from './content/p3-lockers';
import { p4ShowerCubicles } from './content/p4-shower-cubicles';
import { p5PhenolicPanels } from './content/p5-phenolic-panels';

import { p2BathroomPartitionsEn } from './content/p2-bathroom-partitions-en';
import { p3LockersEn } from './content/p3-lockers-en';
import { p4ShowerCubiclesEn } from './content/p4-shower-cubicles-en';
import { p5PhenolicPanelsEn } from './content/p5-phenolic-panels-en';
import { arSeoClusterPages, enSeoClusterPages } from './content/seo-clusters';

export const seoPages = {
  ar: [
    p2BathroomPartitions,
    p3Lockers,
    p4ShowerCubicles,
    p5PhenolicPanels,
    ...arSeoClusterPages,
  ],
  en: [
    p2BathroomPartitionsEn,
    p3LockersEn,
    p4ShowerCubiclesEn,
    p5PhenolicPanelsEn,
    ...enSeoClusterPages,
  ],
};

export function getSeoPages(lang) {
  return seoPages[lang] || [];
}

export function getSeoPageBySlug(lang, slug) {
  return getSeoPages(lang).find((page) => page.slug === slug);
}
