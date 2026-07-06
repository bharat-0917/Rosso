import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0d0d0d",
          50: "#1a1a1a",
          100: "#151515",
          200: "#111111",
        },
        surface: "#151515",
        gold: {
          DEFAULT: "#c8a96e",
          light: "#dfc090",
          dark: "#a08050",
          muted: "#8a6e48",
        },
        burgundy: {
          DEFAULT: "#7d1d3f",
          light: "#9b2750",
          dark: "#5a1530",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          muted: "#b8b0a0",
          dark: "#8a8278",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #c8a96e 0%, #dfc090 50%, #c8a96e 100%)",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.85) 100%)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
