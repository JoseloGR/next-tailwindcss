const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blueGray: colors.blueGray,
      white: colors.white,
      green: colors.green,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled']
    },
  },
  plugins: [],
}
