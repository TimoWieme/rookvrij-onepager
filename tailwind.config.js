module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}