import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        oy: {
          dark: 'rgb(var(--oy-bg-rgb) / <alpha-value>)',
          'dark-2': 'rgb(var(--oy-bg-2-rgb) / <alpha-value>)',
          'dark-3': 'rgb(var(--oy-bg-3-rgb) / <alpha-value>)',
          'dark-4': 'rgb(var(--oy-bg-4-rgb) / <alpha-value>)',
          accent: 'rgb(var(--oy-accent-rgb) / <alpha-value>)',
          'accent-light': 'rgb(var(--oy-accent-light-rgb) / <alpha-value>)',
          'accent-bright': 'rgb(var(--oy-accent-bright-rgb) / <alpha-value>)',
          electric: 'rgb(var(--oy-electric-rgb) / <alpha-value>)',
          cyan: 'rgb(var(--oy-cyan-rgb) / <alpha-value>)',
          text: 'rgb(var(--oy-text-rgb) / <alpha-value>)',
          'text-2': 'rgb(var(--oy-text-2-rgb) / <alpha-value>)',
          muted: 'rgb(var(--oy-muted-rgb) / <alpha-value>)',
          glass: 'var(--oy-glass)',
          'glass-border': 'var(--oy-glass-border)',
          'glass-bg': 'var(--oy-glass-bg)',
          whatsapp: '#25D366',
          // Semantic colors
          heading: 'rgb(var(--oy-heading-rgb) / <alpha-value>)',
          body: 'rgb(var(--oy-body-rgb) / <alpha-value>)',
          'body-strong': 'rgb(var(--oy-body-strong-rgb) / <alpha-value>)',
          label: 'rgb(var(--oy-label-rgb) / <alpha-value>)',
          'link-hover': 'rgb(var(--oy-link-hover-rgb) / <alpha-value>)',
          icon: 'rgb(var(--oy-icon-rgb) / <alpha-value>)',
          subtle: 'rgb(var(--oy-subtle-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Arabic', 'sans-serif'],
        heading: ['Inter', 'Noto Sans Arabic', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'Tajawal', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'aurora': 'aurora 8s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.45)' },
        },
        scrollIndicator: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
