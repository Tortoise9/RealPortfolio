/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ibm-plex-mono':["IBM Plex Mono", 'system-ui'],
        'poppin':["Poppins", 'system-ui'],
        'playfair':["Playfair Display", "serif"],
        'roboto':["Roboto", 'sans-serif'],
        'cursivesac':[ "Sacramento", 'system-ui']
      }
    },
  },
  plugins: [],
}