/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // eslint-disable-next-line global-require
  plugins: [require("tailwindcss-rfs")],
  content: ["./src/**/*.{astro,jsx}"],
  theme: {
    fontFamily: {
      primary: ["LTCBodoni175Pro", "serif"],
      secondary: ["ProximaNova", "sans-serif"],
      tertiary: ["Ramaraja", "serif"],
      gotham: ["Gotham", "sans-serif"],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1792px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    container: {
      padding: {
        DEFAULT: "1.06em",
        "2xl": "8.125%",
      },
    },
    colors: {
      gray: {
        DEFAULT: "#EFEFEF",
        lighter: "#F5F5F5",
        light: "#E5E3DF",
        dark: "#D9D9D9",
      },
      black: {
        DEFAULT: "#000000",
        dark: "#212121",
        darker: "#0A040C",
        darkest: "#0D0D0D",
      },
      green: {
        DEFAULT: "#3E5C54",
        dark: "#2C3B34",
        darkest: "#333333",
      },
      gold: "#BD9B60",
      purple: "#5C3787",
      red: "#CC0000",
      yellow: "#EDA71F",
      tan: {
        DEFAULT: "#F0EEE6",
        light: "#E6E0D2",
      },
      white: "#ffffff",
      transparent: "transparent",
      inherit: "inherit",
      currentColor: "currentcolor",
    },
  },
};
