'use client';

import { memo } from 'react';
import Image from 'next/image';

const productImages = [
  'hpl-bathroom-partition-system.jpg',
  'hpl-locker-phenolic-system.jpg',
  'hpl-shower-cubicle-riyadh.jpg',
];

/* ── TASK D1 — Alt texts for product images ── */
const productAlts = {
  ar: [
    'نظام قواطع حمامات HPL كومباكت فينوليك بإكسسوارات فولاذ مقاوم للصدأ',
    'خزائن HPL فينوليك لغرف تبديل الملابس في الأندية الرياضية بالمملكة',
    'كبائن استحمام HPL مقاومة للمياه في نادٍ رياضي بالرياض',
  ],
  en: [
    'HPL compact phenolic bathroom partition system with stainless steel accessories',
    'Phenolic HPL lockers for changing rooms in sports clubs across the Kingdom',
    'Water-resistant HPL shower cubicles in a sports club',
  ],
};



function ProductsSection({ dict, lang = 'ar' }) {
  const products = [
    { title: dict.p1_title, description: dict.p1_desc, tag: dict.p1_tag },
    { title: dict.p2_title, description: dict.p2_desc, tag: dict.p2_tag },
    { title: dict.p3_title, description: dict.p3_desc, tag: dict.p3_tag },
  ];
  
  const currentAlts = productAlts[lang] || productAlts.ar;

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
            <div key={product.title}>
              <article className="product-row reveal">
                <div className="product-row-image">
                  <span className="product-tag">{product.tag}</span>
                  <Image
                    src={`/Images/${productImages[index]}`}
                    alt={currentAlts[index]}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProductsSection);
