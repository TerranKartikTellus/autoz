/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
       'NewBluishBlack': '#072227',
       'NewDarkBlue': '#35858B',
       'NewLightlue': "#4FBDBA",
       'NewBluishWhite': '#AEFEFF' 
      },
     fontFamily: {
       Maven: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
}
