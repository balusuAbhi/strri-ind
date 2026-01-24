/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        harvest: {
          primary: '#A73A3A',
          'primary-dark': '#8B2F2F',
          'primary-light': '#C44848',
          beige: '#F5993E',
          tan: '#F5993E',
          gold: '#E8833A',
          'gold-dark': '#D97826',
          cream: '#FDFBF7',
          brown: '#3E3228',
          'brown-light': '#5C4A3E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
