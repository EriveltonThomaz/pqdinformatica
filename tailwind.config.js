/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Cores Primárias
        primary: {
          green: '#2E8B57', // Sea Green
          blue: '#1E40AF',  // Azul Corporativo
        },
        // Cores Secundárias
        secondary: {
          'green-light': '#48BB78',
          'blue-light': '#3B82F6',
          'gray-dark': '#374151',
        },
        // Cores de Apoio
        support: {
          white: '#FFFFFF',
          'gray-light': '#F3F4F6',
          'green-very-light': '#D1FAE5',
        },
        // Dark Mode
        dark: {
          bg: '#111827',
          text: '#f3f4f6',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Desktop sizes
        'hero-desktop': '3.5rem',
        'h2-desktop': '2.5rem',
        'h3-desktop': '2rem',
        'body-desktop': '1.125rem',
        // Mobile sizes
        'hero-mobile': '2.5rem',
        'h2-mobile': '2rem',
        'h3-mobile': '1.75rem',
        'body-mobile': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      screens: {
        'xs': '320px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1536px',
      },
    },
  },
  plugins: [],
};