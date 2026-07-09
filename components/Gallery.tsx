"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Elegant fine dining plate presentation",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Intimate restaurant interior with warm lighting",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
    alt: "Grilled salmon/fish with seasonal vegetables",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Premium cuts of meat with rosemary",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    alt: "House-made pasta with truffle",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Candlelit dining room at Rosso",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    alt: "Perfectly seared steak on black plate",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=800&q=80",
    alt: "Chocolate fondant with vanilla gelato",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
    alt: "Elegant table setting with crystal glassware",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    alt: "Artfully plated appetizer course",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    alt: "Burrata with heirloom tomatoes",
    wide: false,
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    alt: "Fresh garden salad with edible flowers",
    wide: false,
  },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () =>
    setLightboxIdx((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () =>
    setLightboxIdx((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <section
      id="gallery"
      className="section-pad bg-[#0d0d0d]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a96e] text-xs font-medium tracking-[0.35em] uppercase font-sans">
            Visuals
          </span>
          <div className="gold-divider" />
          <h2
            id="gallery-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-2"
          >
            The Rosso Experience
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Open image: ${img.alt}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
              id={`gallery-img-${idx}`}
            >
              <div className={`relative ${img.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                  <ZoomIn
                    className="text-[#c8a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={32}
                  />
                </div>
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c8a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c8a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <button
            id="lightbox-close"
            className="absolute top-6 right-6 text-[#f5f0e8] hover:text-[#c8a96e] transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          <button
            id="lightbox-prev"
            className="absolute left-4 sm:left-8 text-[#f5f0e8] hover:text-[#c8a96e] transition-colors text-3xl font-light"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[85vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIdx].src.replace("w=800", "w=1600")}
              alt={galleryImages[lightboxIdx].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button
            id="lightbox-next"
            className="absolute right-4 sm:right-8 text-[#f5f0e8] hover:text-[#c8a96e] transition-colors text-3xl font-light"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            ›
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#8a8278] text-xs font-sans tracking-wider">
            {lightboxIdx + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
}
