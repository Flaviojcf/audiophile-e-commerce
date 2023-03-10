/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {},
    colors: {
      orange300: "#D87D4A",
      orange100: "#fbaf85",

      black100: "#101010",
      black200: "#191919",
      black: "#000000",
      black50: "#131313",

      gray300: "#4C4C4C",
      gray200: "#F1F1F1",
      gray100: "#FAFAFA",
      gray50: "#CFCFCF",

      white: "#FFFFFF",
      white50: "#F1F1F1",
      white100: "#f2f2f2",

      red: "#CD2C2C",
      modalOverlay: "rgba(0, 0, 0, 0.75)"
    },
    screens: {
      desktop: { max: "1440px" },


      tablet: { max: "1024px" },
    

      md: { max: "768px" },


      mobile: { max: "425px" },

    },
    fontFamily: {
      manrope: "manrope",
    },
    letterSpacing: {
      thin: "2px",
      medium: "10px",
    },
  },
  plugins: [],
};
