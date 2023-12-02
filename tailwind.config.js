/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Key frames
      keyframes: {
        menuBarHover: {
          '0%': {
            transform: 'scaleX(0)',
          },
          // '80%': {
          //   transform: 'scaleX(0.8)',
          // },
          // '92%': {
          //   transform: 'scaleX(0.95)',
          // },
          '100%': {
            transform: 'scaleX(1)',
          }
        }

      },
      // Animation
      animation: {
        menuBarHover: 'menuBarHover 0.12s ease-in-out',
      },
      //------------------------
    },
  },
  plugins: [],
}

