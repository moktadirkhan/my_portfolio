module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],   //we only need tsx that is why tsx formats are here
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  extend:{
    colors:{
      green:{
        DEFAULT:"#00f260",
      },
      dark:{
        DEFAULT:"#010101",
        100:"#0a0b1e",
        200:"#16181d",
        300:"#16181d",
        500:"#0f1115",
        700:"#202125",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
