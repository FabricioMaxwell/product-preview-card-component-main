/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'dark-cyan-btn': 'hsl(158, 36%, 22%)'
      },
      fontFamily: {
        'montserrat': ['montserrat', 'sans-serif'],
        'fraunces': ['fraunces', 'sans-serif']
      }
    },
  },
  plugins: [],
}

