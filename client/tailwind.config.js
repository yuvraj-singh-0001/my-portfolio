/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0B',
        accent: '#1A73E8',
        secondary: '#0D47A1',
        neon: {
          DEFAULT: '#00E5FF',
          50: '#E6F9FF',
          100: '#B3F0FF',
          200: '#80E6FF',
          300: '#4DDCFF',
          400: '#1AD2FF',
          500: '#00E5FF',
          600: '#00B8CC',
          700: '#008B99',
          800: '#005E66',
          900: '#003033',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '18px',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'neon-sweep': 'neon-sweep 3s ease-in-out infinite',
        'ripple': 'ripple 600ms linear',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00E5FF, 0 0 10px #00E5FF, 0 0 15px #00E5FF' },
          '50%': { boxShadow: '0 0 10px #00E5FF, 0 0 20px #00E5FF, 0 0 30px #00E5FF' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00E5FF, 0 0 10px #00E5FF',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 15px #00E5FF, 0 0 30px #00E5FF',
            transform: 'scale(1.05)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'neon-sweep': {
          '0%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}