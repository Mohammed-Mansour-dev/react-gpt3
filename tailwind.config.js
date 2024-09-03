/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#040C18",
         orange:{
          dark:"#FF4820",
          light:"#FF8A71"
         },
         light:"#81AFDD",
      },
      fontFamily:{
        Manrope:'"Manrope", system-ui'
      }
    },
  },
  plugins: [],
}

