/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-green": "#41A86F",
      "light-blue": "#0083BF",
      "light-grey": "#58595B",
      "muted-blue": "#b1cae2",
      "pale-blue": "#F2F9FF",
      "team-card-blue": "#0084F1",
      "team-card-blue": "#0084F1",
      "very-light-blue": "#DEEBF2",
      "very-light-green": "#E6EFE4",
      "very-light-grey": "#F2F2F2",
      "very-very-light-blue": "#F2F7FA",
      black: "#111",
      blue: "#00539F",
      green: "#62BB46",
      grey: "#58595B",
      orange: "#F7941D",
      pink: "#EC008C",
      red: "#ED1C24",
      transparent: "transparent",
      white: "#fff",
      yellow: "#FFDD00",
    },
    container: {
      padding: "2rem",
      center: true,
    },

    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
      },
    },
  },
  plugins: [],
};
