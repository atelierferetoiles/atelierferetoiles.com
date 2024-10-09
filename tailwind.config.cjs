/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      display: ['blank_river', 'ui-serif'],
    },
    extend: {
      colors: {
        egyptianblue: '#333399',
        blush: '#D99D85',
        princeton_orange: "#ff9933",
        vistablue: '#8F95D3',
        whitesmoke: '#F2F2F2',

        darkblue: '#23425A',
        duck: '#5A8DA8',
        lakeblue: '#D2DCE6',
        thunderblue: '#7C9CB5',
        lightgrey: '#EDEEF3',
      },
      backgroundImage: {
        law: "url('/tamara_menzi_lawcourt.jpg')",
      },
      textShadow: {
        sm: '0 0 2px var(--tw-shadow-color)',
        DEFAULT: '0 0 4px var(--tw-shadow-color)',
        lg: '0 0 8px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
