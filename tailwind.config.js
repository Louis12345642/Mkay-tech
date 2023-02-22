/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors:{
      "default-bg":"#f3e9e9"
      }
    },
  },
  plugins: [],
}
