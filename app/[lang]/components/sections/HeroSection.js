import Image from 'next/image';

export default function HeroSection({ dict }) {
  const metrics = [dict.metric1, dict.metric2, dict.metric3];
  const heroBadges = [dict.badge1, dict.badge2, dict.badge3].filter(Boolean);

  return (
    <section className="hero-section" id="home">
      <div className="hero-backdrop" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h1 className="hero-title">{dict.title}</h1>
          <p className="hero-text">{dict.subtitle}</p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">{dict.btnExplore}</a>
            <a href="#contact" className="btn btn-secondary">{dict.btnQuote}</a>
          </div>

          <div className="hero-chip-row">
            {heroBadges.map((item) => (
              <span className="hero-chip" key={item}>{item}</span>
            ))}
          </div>

          <div className="hero-metrics">
            {metrics.map((item) => (
              <div className="metric-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/Images/hpl-bathroom-partition-riyadh.jpg"
              alt="HPL Partition Project"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className="cover-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
