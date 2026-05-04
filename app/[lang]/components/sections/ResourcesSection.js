import SEOLinkGrid from './SEOLinkGrid';
import { getResources } from '../../../../lib/seo-pages';

function ResourcesSection({ dict, lang }) {
  const resources = getResources(lang);
  const strings = dict.landingLinks;

  return (
    <SEOLinkGrid 
      items={resources}
      title={strings.title}
      subtitle={strings.subtitle}
      eyebrow={strings.eyebrow}
      lang={lang}
      cardType="resource"
    />
  );
}

export default memo(ResourcesSection);
