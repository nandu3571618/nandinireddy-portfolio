/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0d14',
        surface: '#111726',
        'surface-light': '#182238',
        primary: {
          DEFAULT: '#38bdf8', // Sky cyan
          dark: '#0284c7',
          light: '#7dd3fc',
        },
        accent: {
          DEFAULT: '#818cf8', // Indigo/violet
          hover: '#a5b4fc',
          purple: '#c084fc',
          pink: '#f472b6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(129, 140, 248, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
