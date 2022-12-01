/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    minWidth: {
      375: '375px',
      327: '327px',
      730: '730px',
    },
    maxWidth: {
      327: '327px',
      500: '500px',
    },
    colors: {
      VeryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
      DesaturatedDarkBlue: 'hsl(214, 17%, 51%)',
      grayishBlue: 'hsl(212, 23%, 69%)',
      lightGrayishBlue: 'hsl(210, 46%, 95%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      500: '500',
      700: '700',
    },
  },
  plugins: [],
};
