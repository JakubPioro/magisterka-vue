/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-theme": "#3929ff",
        "light-purple-theme": "#eef2ff",
        // "light-purple-theme": "#9c95ff",
      },
      textShadow: {
        sm: '1px 5px 30px rgba(0, 0, 0, 0.5)',
        outer: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(0, 0, 0, 0.8), 2px -2px 4px rgba(0, 0, 0, 0.8), -2px 2px 4px rgba(0, 0, 0, 0.8)'
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-primeui'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-textshadow'),
  ]
}
