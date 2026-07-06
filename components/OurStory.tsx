"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="section-pad bg-[#0d0d0d]"
      aria-labelledby="story-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <span className="text-[#c8a96e] text-xs font-medium tracking-[0.35em] uppercase font-sans">
                Our Story
              </span>
              <div className="gold-divider !mx-0 !my-4 !w-12" />
            </div>

            <h2
              id="story-heading"
              className="reveal font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8] leading-tight mb-6"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              A lifetime spent
              <br />
              <em className="text-[#c8a96e] not-italic">at the table</em>
            </h2>

            <p
              className="reveal font-sans text-[#b8b0a0] leading-relaxed text-base mb-6"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              Rosso was born from Chef Marco Ferretti&apos;s obsession with a single
              question: what does Italian food taste like when freed from nostalgia?
              Raised in Bologna by a grandmother who treated every meal as a ceremony,
              Marco trained under three Michelin-starred kitchens across Milan and
              Lyon before opening Rosso in 2018.
            </p>

            <p
              className="reveal font-sans text-[#b8b0a0] leading-relaxed text-base mb-8"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              Our menu changes with the seasons and the market. We source directly
              from small Italian producers — the olive oil from a family grove in
              Umbria, the truffles hand-foraged in the Langhe — and pair each dish
              with a wine list curated to tell the story of Italy, one glass at a time.
            </p>

            <div
              className="reveal flex items-center gap-6"
              style={{
                opacity: 0,
                transform: "translateY(25px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-[#c8a96e]">6+</span>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8a8278] mt-1 font-sans">Years</p>
              </div>
              <div className="w-px h-10 bg-[#c8a96e]/30" />
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-[#c8a96e]">2★</span>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8a8278] mt-1 font-sans">Michelin</p>
              </div>
              <div className="w-px h-10 bg-[#c8a96e]/30" />
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-[#c8a96e]">18</span>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8a8278] mt-1 font-sans">Covers</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="order-1 lg:order-2 reveal"
            style={{
              opacity: 0,
              transform: "translateY(25px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="relative">
              {/* Decorative border offset */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#c8a96e]/20 z-0" />
              <div className="relative z-10 img-zoom aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=85"
                  alt="Chef Marco Ferretti at work in the Rosso kitchen"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
