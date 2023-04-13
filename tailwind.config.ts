import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        spline: ["var(--font-spline-sans)"],
        heading: ["var(--font-heading)"],
      },
    },
  },

  plugins: [],
} satisfies Config;
