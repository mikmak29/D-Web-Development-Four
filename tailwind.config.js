/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*"
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px"
      },
      fontFamily: {
        sansation: ['Sansation', 'sans-serif'],
        sansita: ['Sansita', 'sans-serif'],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

