module.exports = {
  content: ['./src/**/*.{njk,md}'],
  // transform: {
  //   md: (content) => {
  //     return remark().process(content)
  //   }
  // },
  theme: {
    fontFamily: {
      'primary': ['Poppins', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'secondary': ['Work Sans', 'Roboto Condensed', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      gridTemplateColumns: {
        'hero': 'var(--gutter) 2fr 1.4fr',
        'hero-slim': 'var(--gutter-slim) 2fr 1.4fr',
        'section': 'var(--gutter) 1fr var(--gutter)',
        'section-slim': 'var(--gutter-slim) 1fr var(--gutter-slim)',
        'nav': 'var(--gutter) repeat(3, 1fr) var(--gutter)',
        'nav-slim': 'var(--gutter-slim) repeat(3, 1fr) var(--gutter-slim)',
      },
      colors: {
        marine : '#18E7A0'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}