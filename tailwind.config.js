/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {},
      flex: {
        2: "0 0 45%",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
    colors: {
      primary: "#1597E4",
      card: "#FFFFFF",
      cardBorder: "#E6E6E6",
      dark: "#212121",
      white: "#FAFAFA",
      error: "#D86161",
      placeholder: "#7A7A7A",
      gray: "#DADEDF",
      lightFont: "#212427",
      green: "#23C552",
    },
  },
  plugins: [],
};
