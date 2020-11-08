module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'content': '70ch',
      },
      spacing: {
        7: '1.75rem',
      },
      textColor: {
        captain: {
          400: '#1229EA',
          default: '#1849CA',
          500: '#1849CA',
          600: ''
        }
      },
    },
  },
  variants: {},
  plugins: [],
  purge: ['./src/**/*.js'],
}
