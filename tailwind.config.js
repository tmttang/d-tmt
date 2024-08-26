/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: '#7f7f7f',
      'light-gray': '#e8e5e480',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      regular: ['NeueMontrealRegular', 'serif'],
      medium: ['NeueMontrealMedium', 'serif'],
      bold: ['NeueMontrealBold', 'serif'],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'NeueMontrealMedium',
        },
        'p, span': {
          fontFamily: 'NeueMontrealRegular',
        },
        h1: {
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.tight'),
          '@screen sm': {
            fontSize: theme('fontSize.5xl'),
          },
        },
        h2: {
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.tight'),
          '@screen sm': {
            fontSize: theme('fontSize.4xl'),
          },
        },
        p: {
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.tight'),
        },
      })
    }),
  ],
}
