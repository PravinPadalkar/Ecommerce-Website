const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        'custom-300': 'repeat(auto-fit, minmax(275px, 1fr))',
        'custom-400': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

