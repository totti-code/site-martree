import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#112334",
        mist: "#EEF3F7",
        sand: "#F4EEE6",
        brand: {
          50: "#EEF8F7",
          100: "#D2ECE7",
          200: "#A8D9D1",
          300: "#78C1B6",
          400: "#499F93",
          500: "#2C8378",
          600: "#20695F",
          700: "#195349",
          800: "#173F38",
          900: "#163531"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-fraunces)"]
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(17, 35, 52, 0.35)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(44,131,120,0.18), transparent 38%), radial-gradient(circle at top right, rgba(17,35,52,0.16), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.96), rgba(238,243,247,0.98))"
      }
    }
  },
  plugins: []
};

export default config;
