'use client';

import { memo, useState, useCallback } from 'react';
import Image from 'next/image';
import Lightbox from '../ui/Lightbox';

function GallerySection({ dict, images, lang }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = useCallback((image) => setSelectedImage(image), []);
  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  return (
    <>
      <Lightbox
        src={selectedImage ? `/Images/${selectedImage.src}` : ''}
        alt={selectedImage ? (lang === 'ar' ? selectedImage.altAr : selectedImage.altEn) : "Expanded view"}
        isOpen={!!selectedImage}
        onClose={closeLightbox}
      />

      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="section-title">{dict.title}</h2>
            <p className="section-subtitle">{dict.subtitle}</p>
          </div>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <figure 
                className={`gallery-card gallery-card-${index + 1} reveal`} 
                key={image.src}
                onClick={() => openLightbox(image)}
                style={{ cursor: 'zoom-in' }}
              >
                <Image
                  src={`/Images/${image.src}`}
                  alt={lang === 'ar' ? image.altAr : image.altEn}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="cover-image"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(GallerySection);
