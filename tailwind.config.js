/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5530',
          light: 'rgba(44, 85, 48, 0.1)',
          dark: '#1E392A',
        },
        secondary: {
          DEFAULT: '#8B9D77',
          light: '#A5B494',
          dark: '#6B7B5B',
        },
        accent: {
          DEFAULT: '#E4B04A',
          light: '#EBC575',
          dark: '#C99A35',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
          lighter: '#999999',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
        'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
      },
      maxWidth: {
        'container': '1200px',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'normal': '1.5',
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn-primary': {
          '@apply inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium transition-colors duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2': {},
        },
        '.btn-secondary': {
          '@apply inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-primary font-medium border-2 border-primary transition-colors duration-300 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2': {},
        },
        '.btn-accent': {
          '@apply inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-primary font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg': {},
        },
      })
    }
  ],
}

