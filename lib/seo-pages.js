import { p2BathroomPartitions } from './content/p2-bathroom-partitions';
import { p3Lockers } from './content/p3-lockers';
import { p4ShowerCubicles } from './content/p4-shower-cubicles';
import { p5PhenolicPanels } from './content/p5-phenolic-panels';
import { p6Jeddah } from './content/p6-jeddah';
import { p7Dammam } from './content/p7-dammam';

export const seoPages = {
  ar: [
    p2BathroomPartitions,
    p3Lockers,
    p4ShowerCubicles,
    p5PhenolicPanels,
    p6Jeddah,
    p7Dammam,
  ],
};

export function getSeoPages(lang) {
  return seoPages[lang] || [];
}

export function getSeoPageBySlug(lang, slug) {
  return getSeoPages(lang).find((page) => page.slug === slug);
}
