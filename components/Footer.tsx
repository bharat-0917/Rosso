"use client";

import { useState } from "react";
import Link from "next/link";
// Inline social icons — lucide-react v1 removed Instagram, Facebook, Twitter
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("[Rosso Newsletter]", { email });
    setSubscribed(true);
    setEmail("");
  };

  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#080808] border-t border-[#1a1a1a]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col items-start">
            <span className="font-display text-3xl font-bold tracking-[0.25em] text-[#c8a96e] mb-2">
              ROSSO
            </span>
            <div className="w-8 h-px bg-[#c8a96e] mb-4" />
            <p className="font-display italic text-[#8a8278] text-sm leading-relaxed mb-6">
              Modern Italian fine dining.<br />
              Roma, Est. 2018.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4" aria-label="Social media links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                className="text-[#8a8278] hover:text-[#c8a96e] transition-colors duration-300"
                aria-label="Rosso on Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-facebook"
                className="text-[#8a8278] hover:text-[#c8a96e] transition-colors duration-300"
                aria-label="Rosso on Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-twitter"
                className="text-[#8a8278] hover:text-[#c8a96e] transition-colors duration-300"
                aria-label="Rosso on X (Twitter)"
              >
                <XIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.3em] uppercase text-[#c8a96e] mb-6 font-sans">
              Navigate
            </h3>
            <ul className="space-y-3" role="list">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Menu", href: "/menu" },
                { label: "Gallery", href: "#gallery" },
                { label: "Reservations", href: "#reservations" },
                { label: "Location & Hours", href: "#location" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-[#8a8278] hover:text-[#c8a96e] transition-colors duration-200 text-sm font-sans"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[#8a8278] hover:text-[#c8a96e] transition-colors duration-200 text-sm font-sans"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.3em] uppercase text-[#c8a96e] mb-6 font-sans">
              Stay in Touch
            </h3>
            <p className="text-[#8a8278] text-sm font-sans leading-relaxed mb-5">
              Seasonal menus, private events, and stories from the kitchen.
              No spam — ever.
            </p>
            {subscribed ? (
              <p
                className="text-[#c8a96e] text-sm font-sans"
                role="status"
                aria-live="polite"
              >
                ✓ You&apos;re on the list. Grazie!
              </p>
            ) : (
              <form
                id="newsletter-form"
                onSubmit={handleSubscribe}
                className="flex"
                aria-label="Newsletter signup"
              >
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-[#111111] border border-[#2a2a2a] focus:border-[#c8a96e] text-[#f5f0e8] px-4 py-2.5 text-sm font-sans outline-none transition-colors duration-200 placeholder:text-[#3a3a3a]"
                  aria-label="Email address for newsletter"
                />
                <button
                  id="newsletter-subscribe-btn"
                  type="submit"
                  className="px-5 py-2.5 bg-[#c8a96e] text-[#0d0d0d] text-xs font-semibold tracking-[0.15em] uppercase font-sans hover:bg-[#dfc090] transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4a4a4a] text-xs font-sans">
            © {year} Rosso Ristorante. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#4a4a4a] hover:text-[#8a8278] text-xs font-sans transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-[#4a4a4a] hover:text-[#8a8278] text-xs font-sans transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
