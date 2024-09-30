import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #242428 30%, #242428 70%, rgba(0, 0, 0, 0) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgColor: "#242428",
        yellow: "#FFDD95",
        gray: "#56565B",
        black: "#111111",
        green: "#B0E3AF",
        gray30: "#EEEEEE33",
      },
      spacing: {
        4.75: "1.1875rem",
        360: "90rem",
        90: "22.5rem",
        7.5: "1.875rem",
      },
    },
  },
  plugins: [],
};
export default config;
