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
          '100%': {
            transform: 'scaleX(1)',
          }
        }

      },
      // Animation
      animation: {
        menuBarHover: 'menuBarHover 0.2s ease-in',
      },
      //------------------------
    },
  },
  plugins: [],
}

