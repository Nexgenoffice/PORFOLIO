/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Times New Roman', 'Times', 'serif'],
        'finance': ['Times New Roman', 'Times', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#fefdf8',
          100: '#fef7cd',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        luxury: {
          50: '#faf9f8',
          100: '#f2f0ed',
          200: '#e8e3dd',
          300: '#d6ccc0',
          400: '#c0ad95',
          500: '#a6906d',
          600: '#8b7355',
          700: '#74614c',
          800: '#5d4d3e',
          900: '#4a3e32',
        },
        forest: {
          50: '#f7f8f8',
          100: '#eef1f0',
          200: '#d6ddd9',
          300: '#b3c2b8',
          400: '#8ba296',
          500: '#6b8576',
          600: '#526b5e',
          700: '#42564d',
          800: '#364740',
          900: '#2d3a35',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}