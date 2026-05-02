'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ExpandableImage({ src, alt, className, sizes, priority }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="expandable-image-wrapper"
        onClick={() => setIsOpen(true)}
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

      {isOpen && (
        <div
          className="image-lightbox"
          onClick={() => setIsOpen(false)}
        >
          <button className="lightbox-close" aria-label="Close">
            &times;
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
      )}
    </>
  );
}
