import Image from 'next/image';

export default function GallerySection({ dict, images }) {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">{dict.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <figure className={`gallery-card gallery-card-${index + 1} reveal`} key={image}>
              <Image
                src={`/Images/${image}`}
                alt={`${dict.title} ${index + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className="cover-image"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
