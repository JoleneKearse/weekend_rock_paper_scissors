/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      neutral: {
        100: "#FFFFFF",
        200: "#F3F3F3",
        300: "#DADADA",
        400: "#E1E4ED",
        500: "#BABFD4",
        600: "#B1B4C5",
        700: "#8A90AC",
        800: "#3B4262",
      },
      brand: {
        100: "#1F3757",
        200: "#131537",
      },
      yellow: {
        100: "#EB9F0E",
        200: "#C76C1B",
      },
      red: {
        100: "#DB2E4D",
        200: "#9D1634",
      },
      blue: {
        100: "#4664F4",
        200: "#2A45C2",
      },

    },
    extend: {},
  },
  plugins: [],
};
