/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#18181b',
        surface: '#23232a',
        primary: '#38bdf8',
        secondary: '#a3e635',
        text: '#e5e7eb',
        accent: '#f472b6',
      },
    },
  },
  plugins: [],
};