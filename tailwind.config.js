/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "red-primary": "#c30a17"
      },
      backgroundImage: {
        "hero": "url('../images/hero-bg.svg')"
      }
    },
  },
  plugins: [],
}

