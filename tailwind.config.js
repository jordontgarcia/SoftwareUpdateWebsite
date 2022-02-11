const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-primary': 'rgb(9, 12, 21)',
        'dark-secondary': 'rgb(11, 14, 28)',
        'gray-lead': 'rgb(161, 168, 181)',
        'dark-lead': 'rgb(20, 24, 39)',
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};