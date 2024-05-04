/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': '#1F2544',
        'secbg': ' #474F7A',
        'frnt': '#81689D',
        'font': '#FFD0EC',
      },
    },
  },
  plugins: [],
}
