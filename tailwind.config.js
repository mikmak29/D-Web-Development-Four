/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*",
    "./js/*",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobileM: "375px",
        mobileL: "425px"
      },
      fontFamily: {
        sansation: ['Sansation', 'sans-serif'],
        sansita: ['Sansita', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      container: {
        center: true,
      },
      colors: {
        color_primary: '#121212',
        color_secondary: '#efefef',
        color_accent: '#CB7428',
        color_gray: '#939DA5',
        color_slate_light_blue: '#7C8EA4',
        color_slate_dark_blue: '#939DA5',
        color_slate_orange: '#8A7970',
        color_bg_dark: '#1E2A2F',
        color_bg_light: '#DFDDDC',
      }
    },
  },
  plugins: [],
}

