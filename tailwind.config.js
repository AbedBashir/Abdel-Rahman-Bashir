/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9f7',
          100: '#ccf3ef',
          200: '#99e7df',
          300: '#66dbcf',
          400: '#33cfbf',
          500: '#64ffda', // accent teal
          600: '#00b7a8',
          700: '#008577',
          800: '#005346',
          900: '#002a23',
        },
        navy: {
          light: '#112240',
          DEFAULT: '#0a192f', // dark navy background
          dark: '#020c1b',
        },
        slate: {
          light: '#ccd6f6', // lightest slate
          DEFAULT: '#8892b0', // slate
          dark: '#495670', // dark slate
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-right': 'slideRight 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'custom': '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
      },
    },
  },
  plugins: [],
};