/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens : {
        mobile : {max : "425px"},
        tab : {max : "768px"},
        desktop : {max : "1440px"}
      }
    },
  },
  plugins: [],
}

// medium 769 to 1440
// small 320 to 768 mobile and tab

