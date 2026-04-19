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
        ink: "#163328",
        mist: "#F4F8F4",
        sand: "#FFFDFC",
        brand: {
          50: "#EDF7F0",
          100: "#D7EEDC",
          200: "#B3DDBD",
          300: "#82C28F",
          400: "#54A866",
          500: "#378D4A",
          600: "#2A723B",
          700: "#225A31",
          800: "#1D4829",
          900: "#183C22"
        },
        accent: {
          50: "#FDF2F2",
          100: "#FBE2E2",
          200: "#F7C9CD",
          300: "#ED979F",
          400: "#E16A74",
          500: "#C94752",
          600: "#AB313D",
          700: "#8D2630",
          800: "#74222A",
          900: "#611F26"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-fraunces)"]
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(22, 51, 40, 0.28)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(55,141,74,0.18), transparent 38%), radial-gradient(circle at top right, rgba(171,49,61,0.12), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(244,248,244,0.98))"
      }
    }
  },
  plugins: []
};

export default config;
