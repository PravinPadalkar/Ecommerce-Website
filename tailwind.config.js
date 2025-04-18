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
        'custom-300': 'repeat(auto-fit, minmax(300px, 1fr))'
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

