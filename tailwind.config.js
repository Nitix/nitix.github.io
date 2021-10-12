module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
        // => @media print { ... }
      },
      fontFamily: {
        'manuscrit': '"Alex Brush"',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
