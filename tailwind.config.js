/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#343434',
        customBlack: '#000000', // Adds custom color named 'customGray'
      },
    },
  },
  plugins: [],
}