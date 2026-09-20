/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040608',
          900: '#07090e',
          850: '#0a0d15',
          800: '#0e131d',
          700: '#141a27',
          600: '#1c2436',
          500: '#28324a',
        },
        graphite: {
          900: '#0f141d',
          800: '#151c28',
          700: '#1f2838',
          600: '#2d374d',
        },
        steel: {
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
        },
        signal: {
          cyan: '#06b6d4',
          cyanLight: '#22d3ee',
          amber: '#d97706',
          gold: '#f59e0b',
          goldLight: '#fbbf24',
          crimson: '#991b1b',
          crimsonLight: '#b91c1c',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}
