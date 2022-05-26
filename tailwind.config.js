module.exports = {
  content: ["./src/**/*.njk"],
  theme: {
    fontFamily: {
      'primary': ['Poppins', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'secondary': ['Work Sans', 'Roboto Condensed', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        'hero': '10% 2fr 1.4fr',
        'section': '10% 1fr 10%;'
      },
      colors: {
        marine : '#18E7A0'
      }
    },
  },
  plugins: [],
}