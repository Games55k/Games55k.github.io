/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fb7299',
        secondary: '#ffb6c1',
        'text-color': '#333',
        'light-text': '#666',
        'border-color': '#e7e7e7',
        'tag-bg': 'rgba(251, 114, 153, 0.9)',
        'tag-color': 'white',
        'episode-bg': 'rgba(251, 114, 153, 0.1)',
        'episode-color': '#fb7299',
      },
    },
  },
  plugins: [],
} 