export default function TrustSection({ dict }) {
  return (
    <section className="trust-section">
      <div className="container trust-grid reveal">
        <div className="trust-badge">
          <span>★</span>
          <strong>{dict.b1_strong}</strong>
          <small>{dict.b1_small}</small>
        </div>
        <div className="trust-badge">
          <span>⚡</span>
          <strong>{dict.b2_strong}</strong>
          <small>{dict.b2_small}</small>
        </div>
        <div className="trust-badge">
          <span>🛡️</span>
          <strong>{dict.b3_strong}</strong>
          <small>{dict.b3_small}</small>
        </div>
      </div>
    </section>
  );
}
