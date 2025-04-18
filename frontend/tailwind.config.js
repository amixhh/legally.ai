/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      cursor: {
        'spotlight': 'none',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-shift': 'gradient 8s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'border-draw': 'border-draw 2s ease-in-out forwards',
        'particle': 'particle 3s ease-in-out infinite',
        'pop-in': 'pop-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'pop-in-delayed-1': 'pop-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s forwards',
        'pop-in-delayed-2': 'pop-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'border-draw': {
          '0%': {
            'border-color': 'transparent',
            'border-top-color': '#DAA520',
          },
          '25%': {
            'border-color': 'transparent',
            'border-top-color': '#DAA520',
            'border-right-color': '#DAA520',
          },
          '50%': {
            'border-color': 'transparent',
            'border-top-color': '#DAA520',
            'border-right-color': '#DAA520',
            'border-bottom-color': '#DAA520',
          },
          '75%': {
            'border-color': 'transparent',
            'border-top-color': '#DAA520',
            'border-right-color': '#DAA520',
            'border-bottom-color': '#DAA520',
            'border-left-color': '#DAA520',
          },
          '100%': {
            'border-color': '#DAA520',
          },
        },
        particle: {
          '0%, 100%': {
            transform: 'translate(0, 0)',
            opacity: 0.5,
          },
          '50%': {
            transform: 'translate(20px, -20px)',
            opacity: 0.8,
          },
        },
        'pop-in': {
          '0%': { 
            transform: 'scale(0.3) translateY(50px)',
            opacity: 0
          },
          '100%': { 
            transform: 'scale(1) translateY(0)',
            opacity: 1
          }
        }
      },
    },
  },
  plugins: [],
} 