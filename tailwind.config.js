module.exports = {
  content: ["./src/**/*.njk"],
  theme: {
    fontFamily: {
      'hdg': ['Work Sans', 'Roboto Condensed', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'body': ['Poppins', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        'hero': '10% 2fr 6rem 1fr',
        'section': '10% 1fr 10%;'
      }
    },
  },
  plugins: [],
}