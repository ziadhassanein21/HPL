'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const productImages = [
  'hpl-bathroom-partition-system.jpg',
  'hpl-locker-phenolic-system.jpg',
  'hpl-shower-cubicle-riyadh.jpg',
];

/* ── TASK D1 — Arabic alt texts for product images ── */
const productAlts = [
  'نظام قواطع حمامات HPL كومباكت فينوليك بإكسسوارات فولاذ مقاوم للصدأ',
  'خزائن HPL فينوليك لغرف تبديل الملابس في الأندية الرياضية بالمملكة',
  'كبائن استحمام HPL مقاومة للمياه في نادٍ رياضي بالرياض',
];

/* ── TASK C1 — Product card links ── */
const productLinks = [
  '/ar/hpl-bathroom-partitions-ksa',
  '/ar/hpl-lockers-ksa',
  '/ar/hpl-shower-cubicles-ksa',
];

function ProductsSection({ dict }) {
  const products = [
    { title: dict.p1_title, description: dict.p1_desc, tag: dict.p1_tag },
    { title: dict.p2_title, description: dict.p2_desc, tag: dict.p2_tag },
    { title: dict.p3_title, description: dict.p3_desc, tag: dict.p3_tag },
  ];

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">{dict.subtitle}</p>
        </div>

        <div className="products-list">
          {products.map((product, index) => (
            <Link href={productLinks[index]} key={product.title} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="product-row reveal">
                <div className="product-row-image">
                  <span className="product-tag">{product.tag}</span>
                  <Image
                    src={`/Images/${productImages[index]}`}
                    alt={productAlts[index]}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="cover-image"
                  />
                </div>
                <div className="product-row-body">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProductsSection);
