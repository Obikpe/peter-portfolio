/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        surface: "#11161C",
        muted: "#161B22",
        accent: "#5B8DEF",
        "text-primary": "#E6EDF3",
        "text-secondary": "#9DA7B3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}