/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto'],
      },
      colors: {
        primary: {
          DEFAULT: '#7c3aed', // violet-600
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        }
      },
      boxShadow: {
        soft: "0 10px 35px rgba(124,58,237,.18)",
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(120,119,198,.2) 1px, transparent 0)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
