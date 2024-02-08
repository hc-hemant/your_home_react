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
        200: '#88BDBC',
        500: '#254E58',
        800: '#112D32'
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

