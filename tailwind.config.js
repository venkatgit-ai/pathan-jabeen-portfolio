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
        cyber: {
          bg: '#07090e',
          surface: '#0f1420',
          card: '#131b2c',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#00f0ff',
          neon: '#00ff88',
          purple: '#9d4edd',
          amber: '#ffb703',
          rose: '#ff007f'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(0,240,255,0.8))' },
        }
      }
    },
  },
  plugins: [],
}

