import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          scrollW: {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          },
      },
      animation: {
        scrollW: 'scrollW 25s linear infinite',
        tiltInB: 'tilt-inB 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-montserrat)'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C", 
          primary: {
            foreground: "#9F7AEA",
            DEFAULT: "#ED64A6",
          },
          secondary: {
            DEFAULT: "#9F7AEA",
          },
          success: {
            DEFAULT: "#4EA966",
          },
          warning: {
            DEFAULT: "#0A3871",
          },
           
        },
      },
      dark: {
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            foreground: "#FFFFFF", //Es el texto
            DEFAULT: "#006FEE",
          },
        },
        // ... rest of the colors
      },
    },
  })],
  // plugins: [],
};
export default config;
