/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A2463',
        secondary: '#F5F7FA',
        success: '#3DD598',
        danger: '#E63946',
        accent: '#3E92CC',
        neutral: '#8D99AE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 15px -3px rgba(10, 36, 99, 0.1), 0 4px 6px -2px rgba(10, 36, 99, 0.05)',
        'card-hover': '0 20px 25px -5px rgba(10, 36, 99, 0.15), 0 10px 10px -5px rgba(10, 36, 99, 0.05)',
      }
    },
  },
  plugins: [],
}