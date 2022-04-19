module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",
  content: [
    "./dist/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#4b5563",
          text: "#e5e7eb",
        },
        light: {
          bg: "#f3f4f6",
          text: "#374151",
        },
        spaceCadet: "#21295C",
        darkCornflowerBlue: "#1b3b6f",
        blueSapphire: "#065a82",
        cgBlue: "#1c7293",
        pewterBlue: "#b8d5e6",
        airSuperiorityBlue: "#6e9bb1",
        blueGreen: "#5d93ab",
        peacockGreen: "#54dea0",
        lighterGreen: "#53c290",
        pekiYellow: "#ffd42a",
        pekiBlack: "#434242",
        midnightGrey: "#393e46",
        midnightBlue: "#4ECCA3",
        dawnOrange: "#e85039",
        dawnSalmon: "#f3b09d",
        danahPurple: "#8394EE",
        danahLightBlue: "#c3c9e8",
      },
      fontFamily: {
        baloo: ["'Poppins'", "sans-serif"],
        // baloo: ["'Baloo Chettan 2'", "cursive"],
      },
    },
    variants: {},
    plugins: [],
  },
};
