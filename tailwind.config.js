/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Executive corporate palette
        navy: {
          950: '#0B1628',
          900: '#0F1E36',
          800: '#152A47',
          700: '#1E3A5F',
        },
        steel: {
          400: '#7FA3C7',
          500: '#4F7CAC',
          600: '#3B6591',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
    },
  },
  plugins: [],
};
