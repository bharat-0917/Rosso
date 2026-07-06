"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";

const reservationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters"),
  date: z
    .string()
    .min(1, "Please select a date")
    .refine((val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Please select a future date"),
  time: z.string().min(1, "Please select a time"),
  partySize: z
    .string()
    .min(1, "Please select party size"),
  requests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const timeSlots = [
  "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30",
];

const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormData) => {
    // Simulate a brief async call
    await new Promise((r) => setTimeout(r, 600));
    console.log("[Rosso Reservation]", data);
    setSubmitted(true);
  };

  // Get today's date in yyyy-mm-dd format for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="reservations"
      className="section-pad bg-[#111111]"
      aria-labelledby="reservations-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#c8a96e] text-xs font-medium tracking-[0.35em] uppercase font-sans">
            Join Us
          </span>
          <div className="gold-divider" />
          <h2
            id="reservations-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-[#f5f0e8] mt-2"
          >
            Reserve a Table
          </h2>
          <p className="font-sans text-[#b8b0a0] mt-4 text-sm leading-relaxed">
            We seat 18 guests per evening. Reservations are confirmed within 24 hours.
          </p>
        </div>

        {submitted ? (
          /* Success State */
          <div
            className="text-center py-16 border border-[#c8a96e]/20"
            role="status"
            aria-live="polite"
          >
            <CheckCircle className="mx-auto text-[#c8a96e] mb-6" size={48} />
            <h3 className="font-display text-2xl font-bold text-[#f5f0e8] mb-3">
              Thank you for your reservation
            </h3>
            <p className="font-sans text-[#b8b0a0] text-sm max-w-sm mx-auto">
              We&apos;ve received your request and will confirm your table within 24 hours.
              We look forward to welcoming you to Rosso.
            </p>
            <button
              id="make-another-reservation-btn"
              onClick={() => setSubmitted(false)}
              className="mt-8 text-xs font-medium tracking-[0.2em] uppercase text-[#c8a96e] border-b border-[#c8a96e]/40 hover:border-[#c8a96e] transition-colors duration-300 font-sans"
            >
              Make another reservation
            </button>
          </div>
        ) : (
          <form
            id="reservation-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
            aria-label="Reservation form"
          >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium tracking-[0.2em] uppercase text-[#b8b0a0] mb-2 font-sans"
                >
                  Full Name <span className="text-[#c8a96e]" aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={`w-full bg-[#0d0d0d] border ${
                    errors.fullName ? "border-[#7d1d3f]" : "border-[#2a2a2a]"
                  } focus:border-[#c8a96e] text-[#f5f0e8] px-4 py-3 text-sm font-sans outline-none transition-colors duration-200 placeholder:text-[#4a4a4a]`}
                  placeholder="Marco Ferretti"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-[#9b2750] font-sans" role="alert">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium tracking-[0.2em] uppercase text-[#b8b0a0] mb-2 font-sans"
                >
                  Email <span className="text-[#c8a96e]" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full bg-[#0d0d0d] border ${
                    errors.email ? "border-[#7d1d3f]" : "border-[#2a2a2a]"
                  } focus:border-[#c8a96e] text-[#f5f0e8] px-4 py-3 text-sm font-sans outline-none transition-colors duration-200 placeholder:text-[#4a4a4a]`}
                  placeholder="marco@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-[#9b2750] font-sans" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium tracking-[0.2em] uppercase text-[#b8b0a0] mb-2 font-sans"
              >
                Phone <span className="text-[#c8a96e]" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full bg-[#0d0d0d] border ${
                  errors.phone ? "border-[#7d1d3f]" : "border-[#2a2a2a]"
                } focus:border-[#c8a96e] text-[#f5f0e8] px-4 py-3 text-sm font-sans outline-none transition-colors duration-200 placeholder:text-[#4a4a4a]`}
                placeholder="+39 06 1234 5678"
                {...register("phone")}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-[#9b2750] font-sans" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Row 3: Date + Time + Party */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-xs font-medium tracking-[0.2em] uppercase text-[#b8b0a0] mb-2 font-sans"
                >
                  Date <span className="text-[#c8a96e]" aria-hidden="true">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  min={today}
                  aria-required="true"
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? "date-error" : undefined}
                  className={`w-full bg-[#0d0d0d] border ${
                    errors.date ? "border-[#7d1d3f]" : "border-[#2a2a2a]"
                  } focus:border-[#c8a96e] text-[#f5f0e8] px-4 py-3 text-sm font-sans outline-none transition-colors duration-200 [color-scheme:dark]`}
                  {...register("date")}
                />
                {errors.date && (
                  <p id="date-error" className="mt-1.5 text-xs text-[#9b2750] font-sans" role="alert">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-xs font-medium tracking-[0.2em] uppercase text-[#b8b0a0] mb-2 font-sans"
                >
                  Time <span className="text-[#c8a96e]" aria-hidden="true">*</span>
                </label>
                <select
                  id="time"
                  aria-required="true"
                  aria-invalid={!!errors.time}
                  aria-describedby={errors.time ? "time-error" : undefined}
                  className={`w-full bg-[#0d0d0d] border ${
                    errors.time ? "border-[#7d1d3f]" : "border-[#2a2a2a]"
                  } focus:border-[#c8a96e] text-[#f5f0e8] px-4 py-3 text-sm font-sans outline-none transition-colors duration-200`}
                  {...register("time")}
                >
                  <option value="">Select</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.time && (
                  <p id="time-error" className="mt-1.5 text-xs text-[#9b2750] font-sans" role="alert">
                    {errors.time.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="partySize"
                  className="block text-xs font-medium tracking-[0.2em] uppercase text-[#b8b0a0] mb-2 font-sans"
                >
                  Guests <span className="text-[#c8a96e]" aria-hidden="true">*</span>
                </label>
                <select
                  id="partySize"
                  aria-required="true"
                  aria-invalid={!!errors.partySize}
                  aria-describedby={errors.partySize ? "partySize-error" : undefined}
                  className={`w-full bg-[#0d0d0d] border ${
                    errors.partySize ? "border-[#7d1d3f]" : "border-[#2a2a2a]"
                  } focus:border-[#c8a96e] text-[#f5f0e8] px-4 py-3 text-sm font-sans outline-none transition-colors duration-200`}
                  {...register("partySize")}
                >
                  <option value="">Select</option>
                  {partySizes.map((n) => (
                    <option key={n} value={n}>{n} {n === "1" ? "guest" : "guests"}</option>
                  ))}
                </select>
                {errors.partySize && (
                  <p id="partySize-error" className="mt-1.5 text-xs text-[#9b2750] font-sans" role="alert">
                    {errors.partySize.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 4: Special Requests */}
            <div>
              <label
                htmlFor="requests"
                className="block text-xs font-medium tracking-[0.2em] uppercase text-[#b8b0a0] mb-2 font-sans"
              >
                Special Requests{" "}
                <span className="text-[#4a4a4a] normal-case tracking-normal">
                  (optional)
                </span>
              </label>
              <textarea
                id="requests"
                rows={4}
                className="w-full bg-[#0d0d0d] border border-[#2a2a2a] focus:border-[#c8a96e] text-[#f5f0e8] px-4 py-3 text-sm font-sans outline-none transition-colors duration-200 resize-none placeholder:text-[#4a4a4a]"
                placeholder="Dietary restrictions, special occasions, seating preferences…"
                {...register("requests")}
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                id="reservation-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#c8a96e] text-[#0d0d0d] text-xs font-semibold tracking-[0.3em] uppercase font-sans hover:bg-[#dfc090] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,110,0.3)]"
              >
                {isSubmitting ? "Sending…" : "Request Reservation"}
              </button>
              <p className="text-center text-[#4a4a4a] text-xs mt-4 font-sans">
                Fields marked <span className="text-[#c8a96e]">*</span> are required
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
