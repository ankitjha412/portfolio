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
          DEFAULT: '#2563EB', // Electric Blue
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563EB',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        navy: {
          900: '#0F172A',
          800: '#1E293B',
        },
        neon: {
          purple: '#9333EA',
          pink: '#EC4899',
          cyan: '#22D3EE',
          violet: '#8B5CF6',
        }
      },
      boxShadow: {
        soft: "0 10px 35px rgba(37,99,235,.18)",
        neon: "0 0 20px rgba(37,99,235, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(120,119,198,.1) 1px, transparent 0)',
        'gradient-dark': 'linear-gradient(to bottom right, #0F172A, #111827, #1E1B4B)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(37,99,235, 0.5)' },
          '50%': { opacity: '.5', boxShadow: '0 0 10px rgba(37,99,235, 0.2)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(37,99,235, 0.5)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 35px rgba(37,99,235, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
