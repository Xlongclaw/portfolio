/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        "DARK-I":"#151414",
        "DARK-II":"#1F1F1F",
        "DARK-III":"#080808",
        "GRAY-I":"#5F5F5F",
        "WHITE":"#FFFFFF",
        "ASCENT":"#007305",
      },
      fontFamily:{
        'inter' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

