/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        black: '#0B0B0B',
        gold: '#D4AF37',
        'gold-soft': '#E6C766',
        gray: '#B5B5B5',
      },
    },
  },
  plugins: [],
}
