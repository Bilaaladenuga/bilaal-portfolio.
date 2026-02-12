/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Custom soothing palette (overriding/extending defaults if needed)
        primary: '#6366f1', // Indigo 500
        secondary: '#64748b', // Slate 500
        dark: '#0f172a', // Slate 900
        light: '#f8fafc', // Slate 50
      }
    },
  },
  plugins: [],
}
