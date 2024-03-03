/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CCEAC",
        "primary-second": "#6870FA",
        "main-bg": "#141b2d",
        "box-bg": "#1F2A40",
        gray: "#E0E0E0",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
