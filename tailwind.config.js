/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'marshall': "Marshall",
      "racama": "Racama"
    },
    screens: {
      'xxxl': {max: '1700px'},
      'xxl': {max: '1400px'},
      'xl': {max: '1200px'},
      'lg': {max: '992px'},
      'md': {max: '768px'},
      'sm': {max: '576px'},

      '-xxxl': {min: '1700px'},
      '-xxl': {min: '1400px'},
      '-xl': {min: '1200px'},
      '-lg': {min: '992px'},
      '-md': {min: '768px'},
      '-sm': {min: '576px'}
    },
  },
  plugins: [],
}