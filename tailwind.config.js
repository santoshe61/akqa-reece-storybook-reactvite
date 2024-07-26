/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      "blue": {
        DEFAULT: '#003057',
        50: "#E6EAEE",
        100: "#B0BFCB",
        200: "#8AA0B2",
        300: "#54748E",
        400: "#335979",
        500: "#003057",
        600: "#002C4F",
        700: "#00223E",
        800: "#001A30",
        900: "#001425",
      },
      "trueblue": {
        DEFAULT: "#6FB1C8",
        50: "#F1F7FA",
        100: "#D2E7EE",
        200: "#BDDBE6",
        300: "#9FCBDA",
        400: "#8CC1D3",
        500: "#6FB1C8",
        600: "#65A1B6",
        700: "#4F7E8E",
        800: "#3D616E",
        900: "#2F4A54",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}