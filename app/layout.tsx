import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rosso — Modern Italian Fine Dining",
  description:
    "Experience the art of modern Italian cuisine at Rosso. Award-winning chef, seasonal ingredients, and an atmosphere that transports you to the heart of Italy. Reserve your table today.",
  keywords: [
    "Italian restaurant",
    "fine dining",
    "Rosso",
    "modern Italian",
    "tasting menu",
    "reservations",
  ],
  openGraph: {
    title: "Rosso — Modern Italian Fine Dining",
    description:
      "Experience the art of modern Italian cuisine at Rosso. Award-winning chef, seasonal ingredients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0d0d0d] text-[#f5f0e8]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
