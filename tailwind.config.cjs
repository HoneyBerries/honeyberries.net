module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: '#9F7AEA',
        surface: '#0f1724',
        emerald: {
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '9': '2.25rem',
        '18': '4.5rem',
      },
      boxShadow: {
        'card': '0 8px 30px rgba(2,6,23,0.6)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-x': 'bounceX 1s infinite',
        'float-in': 'floatIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceX: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(-2px)' },
          '60%': { transform: 'translateX(2px)' },
        },
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          '60%': { opacity: '1', transform: 'translateY(-4px) scale(1.01)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
