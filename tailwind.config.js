/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pt': ['PT Serif', 'serif'],
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [],
};
