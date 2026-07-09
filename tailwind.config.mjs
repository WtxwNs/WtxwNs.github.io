/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#172033',
        paper: '#fbfaf7',
        mist: '#e9edf4',
        accent: '#256b8f',
        violet: '#6f5aa7'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(23, 32, 51, 0.10)'
      }
    }
  },
  plugins: []
};
