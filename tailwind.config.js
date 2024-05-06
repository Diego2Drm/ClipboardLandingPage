/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        BaiJamjuree: ['Bai Jamjuree', 'sans-serif'],
         
       },
      backgroundImage: {
        'bgHeaderDesktop': "url('./images/bg-header-desktop.png')",
        'bgHeaderMobile': "url('./images/bg-header-mobile.png')",
      },
      colors: {
        'StrongCyan': '#26baa4',
        'LightBlue': '#6173ff',
        'DarkGrayishBlue': '#4c545d',
        'GrayishBlue': '#9fabb2',
      },
    },
  },
  plugins: [],
}

