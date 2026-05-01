export default function FeaturesSection({ dict }) {
  const features = [
    { icon: '01', title: dict.f1_title, description: dict.f1_desc },
    { icon: '02', title: dict.f2_title, description: dict.f2_desc },
    { icon: '03', title: dict.f3_title, description: dict.f3_desc },
    { icon: '04', title: dict.f4_title, description: dict.f4_desc },
    { icon: '05', title: dict.f5_title, description: dict.f5_desc },
    { icon: '06', title: dict.f6_title, description: dict.f6_desc },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container features-shell">
        <div className="section-heading reveal">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">{dict.subtitle}</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card reveal" key={feature.title}>
              <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
