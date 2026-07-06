"use client";

import Image from "next/image";

const categories = [
  {
    name: "Antipasti",
    subtitle: "To Begin",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
    description: "Seasonal starters crafted to awaken the palate",
  },
  {
    name: "Primi",
    subtitle: "First Course",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
    description: "House-made pastas and risottos at the heart of Italian tradition",
  },
  {
    name: "Secondi",
    subtitle: "Main Course",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    description: "Premium meats and seafood, simply celebrated",
  },
  {
    name: "Dolci",
    subtitle: "Desserts",
    image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=600&q=80",
    description: "Sweet conclusions rooted in Italian pastry craft",
  },
];

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="section-pad bg-[#111111]"
      aria-labelledby="menu-preview-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a96e] text-xs font-medium tracking-[0.35em] uppercase font-sans">
            Cucina
          </span>
          <div className="gold-divider" />
          <h2
            id="menu-preview-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-2"
          >
            Our Menu
          </h2>
          <p className="font-sans text-[#b8b0a0] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            A seasonal tasting of Italy's finest — composed with intention,
            served with warmth.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="/menu"
              className="group relative block overflow-hidden border border-[#1e1e1e] hover:border-[#c8a96e]/50 transition-all duration-500 cursor-pointer"
              aria-label={`View ${cat.name} section of our menu`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-6 bg-[#151515] group-hover:bg-[#1a1a1a] transition-colors duration-300">
                <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#c8a96e] font-sans">
                  {cat.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#f5f0e8] mt-1 mb-2">
                  {cat.name}
                </h3>
                <p className="text-[#8a8278] text-sm leading-relaxed font-sans">
                  {cat.description}
                </p>
                <span className="inline-block mt-4 text-[10px] font-medium tracking-[0.2em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/40 group-hover:border-[#c8a96e] transition-colors duration-300">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Full menu CTA */}
        <div className="text-center">
          <a
            href="/menu"
            id="view-full-menu-btn"
            className="inline-block px-12 py-4 border border-[#c8a96e] text-[#c8a96e] text-xs font-medium tracking-[0.25em] uppercase hover:bg-[#c8a96e] hover:text-[#0d0d0d] transition-all duration-300 font-sans"
          >
            View Full Menu
          </a>
          <p className="text-[#8a8278] text-xs mt-4 font-sans">
            PDF download available on the menu page
          </p>
        </div>
      </div>
    </section>
  );
}
