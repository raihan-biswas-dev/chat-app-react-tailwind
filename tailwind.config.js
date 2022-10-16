/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        nun: ["Nunito", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#1b2a44cf",
        yell: "#ffea00",
        para: "rgba(77, 77, 77, 0.75)",
      },
    },
  },

  screens: {
    sm: "375px",
    sml: "768px",
    mdl: "1024px",
  },
  plugins: [],
};
