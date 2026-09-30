/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-canvas': '#05060f',
        'steel-plate': '#2f343e',
        'fog-veil': '#9da7ba',
        'moon-mist': '#c7d3ea',
        'frost-glow': '#d1e4fa',
        'ice-highlight': '#d8ecf8',
        'pure-white': '#ffffff',
        'void-violet': '#663af3',
        'blueprint-blue': '#b6d9fc',
        'ember-glow': '#e46d4c',
        'signal-blue': '#027dea',
        'deep-teal': '#269684',
        'gridline-blue': '#3f4959',
        'glass-edge': 'rgba(186, 215, 247, 0.12)',
        'luminous-fill': 'rgba(199, 211, 234, 0.12)',
        // Backward-compatible mappings
        bg: {
          DEFAULT: '#05060f',
          light: '#0b0e1a',
          card: 'rgba(5, 6, 15, 0.95)',
        },
        accent: {
          DEFAULT: '#663af3',
          glow: 'rgba(102, 58, 243, 0.25)',
          frost: '#d1e4fa',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
        'badge': '6px',
        'input': '6px',
        'pill': '999px',
        'circle': '9999px',
      },
      boxShadow: {
        'frost-edge': 'rgba(186, 215, 247, 0.12) 0px 0px 0px 1px inset',
        'glass-card': 'inset 0 1px 1px rgba(199, 211, 234, 0.12), inset 0 24px 48px rgba(199, 211, 234, 0.05), 0 24px 32px rgba(6, 6, 14, 0.7)',
        'modal-card': 'inset 0 1px 1px rgba(216, 236, 248, 0.2), inset 0 24px 48px rgba(168, 216, 245, 0.06), 0 16px 32px rgba(0, 0, 0, 0.3)',
        'glow-sm': 'rgba(186, 207, 247, 0.32) 0px 0px 6px 0px',
        'glow-violet': '0 0 20px rgba(102, 58, 243, 0.45)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
