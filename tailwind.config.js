/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#ff7312ff',
        'secondary-violet': '#800080ff',
      },
      fontFamily: {
        'minion': './THE MINION.ttf'
      }
    },
  },
  plugins: [],
}

