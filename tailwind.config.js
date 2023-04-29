/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        gray: {
          900: '#0E0E0E',
          800: '#292929',
          700: '#383838',
          600: '#626262',
          500: '#A9A9A9'
        },
        yellow: {
          400: '#D7993C',
          500: '#D38E26'
        },
        white: '#FFFFFF',
        black: '#000000'
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },

      container: {
        center: true
      },

      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};
