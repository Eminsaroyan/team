/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        team: ['Team-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
