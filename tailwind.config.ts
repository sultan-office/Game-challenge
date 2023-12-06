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
        robotoMono: "var(--font-robotoMono)",
      },

      colors: {
        primary: "#EB3A4A",
        light: "#E4E4E7",
        lightGray: "#CACACE",
      },

      backgroundImage: {
        heroBg: `url("/images/hero/hero-bg.png")`,

      },

      keyframes: {
        round: {
          "0%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(360deg)" },
        },
        heroPil: {
          "0%": { transform: "translateX(-1000%)", opacity: "0" },
          "100%": { transform: "translateX(1000%)", opacity: "1" },
        },

        up: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      animation: {
        round: "round 3s linear infinite",
        herPill: "heroPil 5s infinite ease-in-out",
        up: "up 1s ease-in-out",
      },
    },
  },
};
export default config;
