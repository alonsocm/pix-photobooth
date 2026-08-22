/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pix: {
          dark: "#08080C",
          card: "#12121A",
          cardHover: "#181824",
          border: "#252538",
          pink: "#FF007F",
          purple: "#9333EA",
          violet: "#A855F7",
          cyan: "#00E5FF",
          blue: "#3B82F6",
          green: "#00FF88",
          gold: "#FFD700"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 0, 127, 0.45), 0 0 40px rgba(255, 0, 127, 0.2)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.45), 0 0 40px rgba(168, 85, 247, 0.2)',
        'neon-cyan': '0 0 20px rgba(0, 229, 255, 0.45), 0 0 40px rgba(0, 229, 255, 0.2)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.45), 0 0 40px rgba(0, 255, 136, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(255,0,127,0.5))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(0,229,255,0.7))' },
        }
      }
    },
  },
  plugins: [],
}
