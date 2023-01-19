/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka-one': ['Fredoka One', 'cursive'],
        'nunito-sans': ['Nunito Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}