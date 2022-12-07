/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-900": "#CC5803",
        "primary-700": "#E2711D",
        "primary-400": "#FF9505",
        "primary-300": "#FFB627",
        "primary-200": "#FFC971",
      },
    },
  },
  plugins: [],
}
