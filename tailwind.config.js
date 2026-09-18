/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111315",
        ivory: "#F6F5F1",
        stone: "#E7E5DF",
        secondaryText: "#686A68",
        brass: "#B49A6C",
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      }
    },
  },
  plugins: [],
}