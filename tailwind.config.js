/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      container: {
        center: true,

        screens: {
          sm: '600px',
          md: '728px',
          lg: '937px'
        },
      },
      extend: {
      },
    },
    plugins: [],
}