/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A6877',
        accent: '#50AC97',
        light: '#f1f1f1',
      },
      fontSize: {
        xxs: '0.65rem',
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        slideIn: 'slideIn 0.8s ease-out forwards',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      borderRadius: {
        xl: '2rem',
        '4xl': '3rem',
      },
      spacing: {
        '5.5': '1.375rem',
      },
    },
  },
  plugins: [],
};
