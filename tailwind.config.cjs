module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1',
        accent: '#9F7AEA',
        'surface': '#0f1724',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '9': '2.25rem',
      },
      boxShadow: {
        'card': '0 8px 30px rgba(2,6,23,0.6)'
      }
    },
  },
  plugins: [],
}
