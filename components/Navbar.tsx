"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservations", href: "#reservations" },
  { label: "Find Us", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-3" : "py-6 bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-center group"
            aria-label="Rosso home"
          >
            <span className="font-display text-2xl font-bold tracking-[0.25em] text-[#c8a96e] group-hover:text-[#dfc090] transition-colors duration-300">
              ROSSO
            </span>
            <span className="block h-px w-full bg-[#c8a96e] opacity-60 mt-0.5"></span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs font-sans font-medium tracking-[0.18em] uppercase text-[#b8b0a0] hover:text-[#c8a96e] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservations"
                id="nav-reserve-cta"
                className="text-xs font-medium tracking-[0.18em] uppercase px-5 py-2.5 border border-[#c8a96e] text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#0d0d0d] transition-all duration-300"
              >
                Reserve
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-[#c8a96e] hover:text-[#dfc090] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col items-center justify-center transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <Link
          href="/"
          onClick={handleLinkClick}
          className="mb-12 font-display text-4xl font-bold tracking-[0.3em] text-[#c8a96e]"
        >
          ROSSO
        </Link>
        <ul className="flex flex-col items-center gap-8" role="list">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium tracking-[0.2em] uppercase text-[#f5f0e8] hover:text-[#c8a96e] transition-colors duration-300"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#reservations"
              onClick={handleLinkClick}
              className="text-sm font-medium tracking-[0.18em] uppercase px-8 py-3 border border-[#c8a96e] text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#0d0d0d] transition-all duration-300"
            >
              Reserve a Table
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
