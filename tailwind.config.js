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
        light: {
          bg: '#F3F5F8',
          surface: '#FFFFFF',
          'surface-2': '#F8FAFC',
          ink: '#0A1226',
          muted: '#667085',
          hairline: '#E4E8EE',
        },
        dark: {
          bg: '#070B14',
          surface: '#0E1422',
          'surface-2': '#131B2E',
          ink: '#EAF0FF',
          muted: '#8B97AE',
          hairline: '#1D2740',
        },
        accent: '#22D3B7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '20px',
        'card-lg': '24px',
        'panel': '28px',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(10, 18, 38, 0.04), 0 12px 32px rgba(10, 18, 38, 0.06)',
        'soft-dark': '0 1px 2px rgba(0, 0, 0, 0.2), 0 12px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
