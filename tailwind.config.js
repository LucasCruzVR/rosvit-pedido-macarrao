/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rosvit: {
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          red: '#dc2626',
          redDark: '#a01313',
          cream: '#faf7f2',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
