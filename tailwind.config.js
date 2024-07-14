/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'"Poppins", sans-serif',
        popMocy:'"Mochiy Pop One", sans-serif',
        Almendra: '"Almendra SC", serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

