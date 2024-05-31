import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "sans": ["var(--font-inter)", ...fontFamily.sans],
        "spline": ["var(--font-spline-sans)", ...fontFamily.sans],
        "heading": ["var(--font-heading)", ...fontFamily.sans],

        "landscaper-1": ["var(--font-inter)", ...fontFamily.sans],
        "landscaper-1-heading": ["var(--font-dm-sans)", ...fontFamily.sans],
      },
    },
  },

  plugins: [],
} satisfies Config;
