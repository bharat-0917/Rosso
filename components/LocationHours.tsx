"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Thursday", time: "18:00 – 22:30" },
  { day: "Friday – Saturday", time: "17:30 – 23:00" },
  { day: "Sunday", time: "18:00 – 22:00" },
];

export default function LocationHours() {
  // Get current day to highlight today's hours
  const dayOfWeek = new Date().getDay(); // 0=Sun, 1=Mon, ...
  const todayIdx =
    dayOfWeek === 0
      ? 3        // Sunday → last row
      : dayOfWeek === 1
      ? 0        // Monday → first row
      : dayOfWeek <= 4
      ? 1        // Tue-Thu → second row
      : 2;       // Fri-Sat → third row

  return (
    <section
      id="location"
      className="section-pad bg-[#0d0d0d]"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a96e] text-xs font-medium tracking-[0.35em] uppercase font-sans">
            Find Us
          </span>
          <div className="gold-divider" />
          <h2
            id="location-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-2"
          >
            Location & Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-[#1e1e1e]">
          {/* Map */}
          <div className="lg:col-span-3 h-80 lg:h-auto min-h-[380px]">
            <iframe
              title="Rosso Restaurant location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9!2d12.4964!3d41.9028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sColosseum!5e0!3m2!1sen!2sit!4v1700000000000!5m2!1sen!2sit"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%) invert(5%) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Rosso restaurant location near the Colosseum, Rome"
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-2 bg-[#111111] p-8 sm:p-10 flex flex-col justify-between gap-8">
            {/* Address */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-[#c8a96e] mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8278] mb-1 font-sans">Address</p>
                  <address className="not-italic font-sans text-[#f5f0e8] text-sm leading-relaxed">
                    Via della Conciliazione, 14<br />
                    00193 Roma RM, Italy
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-[#c8a96e] mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8278] mb-1 font-sans">Telephone</p>
                  <a
                    href="tel:+390612345678"
                    className="font-sans text-[#f5f0e8] text-sm hover:text-[#c8a96e] transition-colors duration-200"
                  >
                    +39 06 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#c8a96e] mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8278] mb-1 font-sans">Email</p>
                  <a
                    href="mailto:info@ristoranterosso.it"
                    className="font-sans text-[#f5f0e8] text-sm hover:text-[#c8a96e] transition-colors duration-200"
                  >
                    info@ristoranterosso.it
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#1e1e1e]" />

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Clock className="text-[#c8a96e] shrink-0" size={18} />
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8a8278] font-sans">Opening Hours</p>
              </div>
              <table className="w-full" aria-label="Restaurant opening hours">
                <tbody>
                  {hours.map((row, i) => (
                    <tr
                      key={row.day}
                      className={`border-b border-[#1e1e1e] last:border-0 ${
                        i === todayIdx ? "text-[#c8a96e]" : "text-[#b8b0a0]"
                      }`}
                    >
                      <td className="py-2.5 text-sm font-sans pr-4">
                        {row.day}
                        {i === todayIdx && (
                          <span className="ml-2 text-[10px] tracking-[0.15em] uppercase bg-[#c8a96e]/15 text-[#c8a96e] px-1.5 py-0.5">
                            Today
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 text-sm font-sans text-right">
                        {row.time === "Closed" ? (
                          <span className="text-[#4a4a4a]">Closed</span>
                        ) : (
                          row.time
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Reserve CTA */}
            <a
              href="#reservations"
              id="location-reserve-cta"
              className="block text-center py-3.5 border border-[#c8a96e] text-[#c8a96e] text-xs font-medium tracking-[0.25em] uppercase hover:bg-[#c8a96e] hover:text-[#0d0d0d] transition-all duration-300 font-sans"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
