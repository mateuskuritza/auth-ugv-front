/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      colors: {
        BaseColor: '#121111',
        SecondTextColor: '#6b6a6a'

      },
    },
  },
  plugins: [],
}

