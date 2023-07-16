/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "red-primary": "#c30a17",
        "red-dark": "#780a0e",
        "gray-dark": "#3a3e41",
      },
      backgroundImage: {
        "hero": "url('../images/hero-bg.svg')",
      }
    },
  },
  plugins: [],
}

