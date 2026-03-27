import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c8a45c',
          light: '#e8d5a3',
          dark: '#a8874a',
          muted: 'rgba(200, 164, 92, 0.15)',
        },
        night: {
          DEFAULT: '#0a0a0a',
          100: '#111111',
          200: '#1a1a1a',
          300: '#222222',
          400: '#2c2c2c',
        },
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-right': {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-right': 'slide-right 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
