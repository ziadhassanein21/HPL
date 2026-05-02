'use client';

import { memo, useState, useCallback } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

function ExpandableImage({ src, alt, className, sizes, priority }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = useCallback(() => setIsOpen(true), []);
  const closeLightbox = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div
        className="expandable-image-wrapper"
        onClick={openLightbox}
        style={{ cursor: 'zoom-in', width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          sizes={sizes || '(max-width: 900px) 100vw, 50vw'}
          priority={priority}
          style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
        />
      </div>

      <Lightbox
        src={src}
        alt={alt}
        isOpen={isOpen}
        onClose={closeLightbox}
      />
    </>
  );
}

export default memo(ExpandableImage);
