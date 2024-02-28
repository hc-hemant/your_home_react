/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        200: '#F3E8FD',
        400: '#D6B8F9',
        600: '#734CB8',
        800: '#5B31AC'
      },
      black: '#17252A',
      white: '#fff',
      gray: {
        100: '#6b6e70',
        600: '#474b4f',
      }
    },
    extend: {
      backgroundImage: {
        'signup': "url('/src/assets/bg_signup.jpg')",
        'signin': "url('/src/assets/bg_signup.jpg')",
      }
    },
  },
  plugins: [],
}

