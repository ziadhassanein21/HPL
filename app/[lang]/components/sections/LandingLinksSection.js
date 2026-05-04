import SEOLinkGrid from './SEOLinkGrid';
import { getProjectGuides } from '../../../../lib/seo-pages';

function LandingLinksSection({ dict, lang }) {
  const projectGuides = getProjectGuides(lang);
  const strings = dict.projectGuides;

  return (
    <SEOLinkGrid 
      items={projectGuides}
      title={strings.title}
      subtitle={strings.subtitle}
      eyebrow={strings.eyebrow}
      lang={lang}
      cardType="standard"
    />
  );
}

export default memo(LandingLinksSection);
