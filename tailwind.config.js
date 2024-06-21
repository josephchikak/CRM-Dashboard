/** @type {import('tailwindcss').Config} */
import react from '@vitejs/plugin-react'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'primary' : '#5932EA',
        'secondary': '#3A6EA5',
        'background': '#FFFFFF',
        'grey': '#B5B7C0',
        'text': '#000000',
        'active': '#00B087',
        'inactiveText':'#DF0404',
        'inactive': '#FFC5C5',
        'activeText': '#008767'
    },
    fontFamily: {
      'poppins': ["poppins", 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
