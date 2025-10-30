/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rae-orange': '#d2572a',
        'rae-orange-dark': '#b8471f',
        'rae-orange-light': '#e8663a',
        'rae-red': '#e53e3e',
        'rae-gray': '#6b7280',
        'rae-light-gray': '#f3f4f6'
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}