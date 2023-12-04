import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1240px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1240px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        lexend: "var(--font-lexend)",
        integralCf: "var(--font-integralCf)",
      },

      colors: {
        primary: "#EB3A4A",
        light: "#E4E4E7",
        lightGray: "#CACACE",
      },

      backgroundImage: {
        heroBg: `url("../../public/images/hero/hero-bg.png")`,
      },
    },
  },
};
export default config;
