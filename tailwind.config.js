/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Nunito'],
    },
    extend: {
      backgroundImage: {
        'split-white-black':
          'linear-gradient(to right, #086788 50% , #EF3054 50%);',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
