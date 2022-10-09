/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        nun: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#1b2a44cf",
        yell: "#ffea00",
      },
    },
  },
  plugins: [],
};
