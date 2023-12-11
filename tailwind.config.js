/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/app.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        purple: 'hsl(259, 100%, 65%)',
        light_red: 'hsl(0, 100%, 67%)',
        white: 'hsl(0, 0%, 100%)',
        off_white: 'hsl(0, 0%, 94%)',
        light_grey: 'hsl(0, 0%, 86%)',
        smokey_grey: 'hsl(0, 1%, 44%)',
        off_black: 'hsl(0, 0%, 8%)'
      }
    },
  },
  plugins: [],
}

