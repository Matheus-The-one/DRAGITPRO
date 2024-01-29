/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mainbackgroundcolor" : '#0D1117',
        'maincolcolor' : '#161C22'
      }
    },
  },
  plugins: [],
}