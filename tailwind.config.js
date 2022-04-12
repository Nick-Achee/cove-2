const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        chocolate: "#6b470f",
      },
      fontFamily: {
        bely: ["bely"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
