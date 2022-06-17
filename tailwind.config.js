/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    color: {
      white: '#ffffff',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '50%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInx2: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '50%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInImage: {
          '0%': { transform: 'translate(-50%,290px)', opacity: 0 },
          '50%': { transform: 'translate(-50%)', opacity: 1 },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(359deg)' },
        },
      },
    },
  },
  plugins: [],
};
