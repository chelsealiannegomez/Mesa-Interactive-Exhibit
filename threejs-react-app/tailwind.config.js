/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-pulse': 'pulse 10s infinite',
      },
      fontFamily: {
        Cormorant: 'Cormorant SC',
      }
    },
  },
  plugins: [],
}

