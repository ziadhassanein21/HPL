import Image from 'next/image';

const productImages = [
  'hpl-bathroom-partition-system.jpg',
  'hpl-locker-phenolic-system.jpg',
  'hpl-shower-cubicle-riyadh.jpg',
];

export default function ProductsSection({ dict }) {
  const products = [
    { title: dict.p1_title, description: dict.p1_desc, tag: dict.p1_tag },
    { title: dict.p2_title, description: dict.p2_desc, tag: dict.p2_tag },
    { title: dict.p3_title, description: dict.p3_desc, tag: dict.p3_tag },
  ];

  return (
    <section className="products-section" id="products">
      <div className="container products-shell">
        <div className="section-heading reveal">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">{dict.subtitle}</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <article className="product-card reveal" key={product.title}>
              <div className="product-image-container">
                <span className="product-tag">{product.tag}</span>
                <Image
                  src={`/Images/${productImages[index]}`}
                  alt={product.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="cover-image"
                />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
