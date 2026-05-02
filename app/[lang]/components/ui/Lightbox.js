'use client';

import { memo } from 'react';
import Image from 'next/image';

function Lightbox({ src, alt, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="image-lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export default memo(Lightbox);
