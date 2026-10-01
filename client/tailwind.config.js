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
        stealth: {
          bg: '#09090b',       // Deep zinc pitch black
          surface: '#121215',  // Elevated card surface
          card: '#18181b',     // Card surface
          border: '#27272a',   // Muted border
          highlight: '#3f3f46',
        },
        accent: {
          cyan: '#06b6d4',
          neon: '#10b981',     // Emerald neon
          violet: '#8b5cf6',
          crimson: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'stealth-gradient': 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15), transparent 70%)',
        'card-glow': 'radial-gradient(circle at top right, rgba(6, 182, 212, 0.1), transparent 60%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
