import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{mdx,yml,yaml}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        paper: "#f2f0ea",
        card: "#ffffff",
        line: "#dcd9d0",
        mute: "#6b6b66",
        acid: "#d4ff3f",
        electric: "#3d5afe",
        neon: "#ff3d2e",
        mint: "#00e08a",
        punch: "#ff2e88",
        fog: "#9a9a94",
      },
      boxShadow: {
        hard: "5px 5px 0 0 #101010",
        "hard-sm": "2px 2px 0 0 #101010",
        "hard-acid": "5px 5px 0 0 #d4ff3f",
        "hard-paper": "5px 5px 0 0 #f2f0ea",
        lift: "0 18px 40px rgba(16,16,16,0.12)",
      },
      borderRadius: {
        board: "4px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        rise: "rise 0.8s ease forwards",
        marquee: "marquee 24s linear infinite",
        "marquee-slow": "marquee 48s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
    },
  },
  plugins: [],
};

export default config;
