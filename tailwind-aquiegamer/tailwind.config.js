module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      zIndex: {
        '99': '-10',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
