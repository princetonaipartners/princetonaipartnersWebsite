import type { Config } from 'tailwindcss';
// @ts-ignore
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        brand: {
          primary: '#0A84FF',
          secondary: '#0060CE',
          light: '#E5F2FF',
          dark: '#003D82',
        },
        surface: {
          primary: '#FAFAFA',
          secondary: '#F5F5F5',
          card: '#FFFFFF',
        },
        text: {
          primary: '#0F0F0F',
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
          inverse: '#FFFFFF',
        },
        colorful: {
          pink: '#EC4899',
          green: '#10B981',
          orange: '#F59E0B',
        },
        border: '#E5E7EB',
        // Dark mode specific colors
        dark: {
          bg: {
            primary: '#09090B',      // zinc-950
            secondary: '#18181B',    // zinc-900
            tertiary: '#27272A',     // zinc-800
            card: '#27272A',         // zinc-800
          },
          text: {
            primary: '#FAFAFA',      // near white
            secondary: '#A1A1AA',    // zinc-400
            tertiary: '#71717A',     // zinc-500
          },
          border: '#3F3F46',         // zinc-700
          brand: {
            primary: '#3B9FFF',      // Brighter blue for dark mode
            secondary: '#1E7EDD',
            light: '#1A3A52',
          },
        },
        // shadcn/ui compatible semantic tokens
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--card) / <alpha-value>)',
          foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
          foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
          foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
          foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
        },
        input: 'rgb(var(--input) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      maxWidth: {
        container: '80rem',
      },
      boxShadow: {
        'brand': '0 10px 40px rgba(10, 132, 255, 0.15)',
        'brand-lg': '0 20px 60px rgba(10, 132, 255, 0.2)',
        'glow': '0 -16px 128px 0 rgba(10, 132, 255, 0.5) inset, 0 -16px 32px 0 rgba(0, 96, 206, 0.5) inset',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'meteor': 'meteor var(--duration) var(--delay) ease-in-out infinite',
        'bg-position': 'bg-position 3s infinite alternate',
        'pop-blob': 'pop-blob 5s infinite',
        'trail': 'trail var(--duration) linear infinite',
        // New tech animations
        'blur-fade-in': 'blurFadeIn 0.8s ease-out forwards',
        'beam-sweep': 'beamSweep 8s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scanline': 'scanline 3s linear infinite',
        // Aurora animation
        'aurora': 'aurora 60s linear infinite',
        // Bento Grid service background animations
        'spin-slow': 'spin 8s linear infinite',
        'slide-right': 'slideRight 4s linear infinite',
        'fall': 'fall 4s linear infinite',
        'orbit': 'orbit 6s linear infinite',
        // Shimmer button animations
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        'shimmer-text': 'shimmer-text 2s ease-in-out infinite',
        // DevTool aesthetic animations
        'grid': 'grid 20s linear infinite',
        'beam-pulse': 'beam-pulse 2s ease-in-out infinite',
        'orbit-slow': 'orbit 30s linear infinite',
        'orbit-medium': 'orbit 20s linear infinite',
        'orbit-fast': 'orbit 15s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        meteor: {
          "0%": { transform: "translateY(-20%) translateX(-50%)" },
          "100%": { transform: "translateY(300%) translateX(-50%)" },
        },
        "bg-position": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "pop-blob": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        "trail": {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
        // New tech keyframes
        "blurFadeIn": {
          "0%": { opacity: "0", filter: "blur(12px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        "beamSweep": {
          "0%, 100%": { transform: "translateX(-100%) rotate(45deg)" },
          "50%": { transform: "translateX(200%) rotate(45deg)" },
        },
        "gridMove": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(30px, 30px)" },
        },
        "pulseGlow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        // Aurora keyframe
        "aurora": {
          "from": {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          "to": {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        // Bento Grid service background keyframes
        "slideRight": {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(110%)", opacity: "0" },
        },
        "fall": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "0.7" },
          "90%": { opacity: "0.7" },
          "100%": { transform: "translateY(200%)", opacity: "0" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // Shimmer button keyframes
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "shimmer-text": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // RetroGrid animation - scrolls toward viewer
        "grid": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        // Beam pulse animation
        "beam-pulse": {
          "0%": { opacity: "0.2", transform: "translateX(-100%)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.2", transform: "translateX(100%)" },
        },
        // Typing cursor blink
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '600': '600ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'sharp': 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
