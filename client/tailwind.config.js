/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#1a202c',
        accent:'#2b6cb0',
        neutral:'#ffffff',
        secondaryNeutral:'#edf2f7',
        accent1:'#0b6cb0'
      },
      transitionDuration: {
        '400': '4000ms',
      },
    },
  },
  plugins: [],
}

