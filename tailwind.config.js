/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      desaturatedRed: 'hsl(0, 36%, 70%)',
      softRed: 'hsl(214, 17%, 51%)',
      darkGrayishRed: 'hsl(0, 6%, 24%)',
      firstGradientFrom: 'hsl(0, 0%, 100%)',
      firstGradientTo: 'hsl(0, 100%, 98%)',
      secondGradientFrom: 'hsl(0, 80%, 86%)',
      secondGradientTo: 'hsl(0, 74%, 74%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      300: '300',
      400: '400',
      600: '600',
    },
  },
  plugins: [],
};
