/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        obsidian: '#0d0d0d',
        'paper-white': '#ffffff',
        'graphite-hairline': '#e3e3e3',
        smoke: '#4d4d4d',
        ash: '#6b6b6b',
        carbon: '#272727',
        'plasma-violet': '#8a05ff',
        'wisteria-tint': '#e6daff',
        'deep-indigo': '#48008c',
        marigold: '#d67f2e',
        coral: '#e96770',
        'mint-signal': '#006d4c',
        'sky-pulse': '#33acff',
        'fuchsia-pop': '#f347ff',
        'lilac-wash': '#f4f0ff',
      },
      borderRadius: {
        'sm': '2px',
        'full': '937px',
      },
      spacing: {
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '60': '60px',
        '72': '72px',
        '80': '80px',
        '120': '120px',
      },
      maxWidth: {
        'page': '1200px',
      },
    },
  },
  plugins: [],
}
