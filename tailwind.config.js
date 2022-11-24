/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        primary: '#007BFF',
        primaryDark: '#0062CC',
        primaryHighlight: '#CDE2F9',
        primaryHighlightHover: '#BADBFF',
        warning: '#FFC107',
        warningDark: '#D39E00',
        warningHighlight: '#FFF7DD',
        success: '#739E73',
        successDark: '#659265',
        successHighlight: '#D0E4D0',
        danger: '#D44936',
        dangerDark: '#B13726',
        dangerHighlight: '#F6D8D4',
        info: '#718096',
        infoDark: '#4A5568',
        gray: {
          100: '#F7FAFC',
          200: '#EDF2F7',
          300: '#E2E8F0',
          400: '#CBD5E0',
          500: '#A0AEC0',
          600: '#718096',
          700: '#4A5568',
          800: '#2D3748',
          900: '#1A202C',
        },
        yellow: {
          ...colors.yellow,
          DEFAULT: '#FFC107',
        },
        red: {
          ...colors.red,
          DEFAULT: '#D44936',
        },
        orange: {
          ...colors.orange,
          DEFAULT: '#F6993F',
        },
        green: {
          ...colors.green,
          DEFAULT: '#739E73',
        },
        blue: {
          ...colors.blue,
          DEFAULT: '#007BFF',
        },
      },
    },
  },
  plugins: [],
}