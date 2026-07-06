"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 220);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero — Rosso Restaurant"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
        alt="Elegant fine dining plating at Rosso restaurant"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/85 z-10" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-10"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="block w-12 h-px bg-[#c8a96e] opacity-70" />
          <span className="text-[#c8a96e] text-xs font-medium tracking-[0.35em] uppercase font-sans">
            Roma · Est. 2018
          </span>
          <span className="block w-12 h-px bg-[#c8a96e] opacity-70" />
        </div>

        {/* Restaurant Name */}
        <h1
          ref={headingRef}
          className="font-display text-8xl sm:text-9xl font-bold tracking-tight text-[#f5f0e8] leading-none mb-3"
          style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
        >
          Rosso
        </h1>

        {/* Tagline */}
        <p
          ref={subRef}
          className="font-display text-lg sm:text-2xl font-normal italic text-[#c8a96e] tracking-wide mb-10 mt-4"
        >
          Where tradition meets the poetry of the modern table
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reservations"
            id="hero-reserve-cta"
            className="px-10 py-4 bg-[#c8a96e] text-[#0d0d0d] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:bg-[#dfc090] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.4)]"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="px-10 py-4 border border-[#f5f0e8]/50 text-[#f5f0e8] text-xs font-sans font-medium tracking-[0.25em] uppercase hover:border-[#c8a96e] hover:text-[#c8a96e] transition-all duration-300"
          >
            View Menu
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#c8a96e]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#c8a96e] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
