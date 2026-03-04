/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        metal: {
          950: '#090909',
          900: '#0f0f0f',
          800: '#161616',
          700: '#1f1f1f',
          600: '#2a2a2a',
          500: '#383838',
          400: '#555555',
          300: '#787878',
          200: '#aaaaaa',
          100: '#cccccc',
          50:  '#e4e4e4',
        },
        blue: {
          DEFAULT: '#00d4ff',
          dim:    '#0099bb',
          dark:   '#005f77',
          glow:   'rgba(0,212,255,0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Roboto Mono"', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.35s ease-out forwards',
        'fade-in':     'fadeIn 0.4s ease-out forwards',
        'float':       'float 3s ease-in-out infinite',
        'glow-pulse':  'glowPulse 2.5s ease-in-out infinite',
        'scan':        'scan 6s linear infinite',
        'flicker':     'flicker 0.15s ease-in-out',
      },
      keyframes: {
        fadeInUp:  {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn:    {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float:     {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,212,255,0.3), 0 0 20px rgba(0,212,255,0.1)' },
          '50%':      { boxShadow: '0 0 16px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.2)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.85' },
        },
      },
      boxShadow: {
        'metal':       'inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.4)',
        'metal-lg':    'inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -2px 0 rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.6)',
        'blue-glow':   '0 0 12px rgba(0,212,255,0.35), 0 0 30px rgba(0,212,255,0.15)',
        'blue-glow-sm':'0 0 6px rgba(0,212,255,0.4)',
        'pressed':     'inset 0 2px 4px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
