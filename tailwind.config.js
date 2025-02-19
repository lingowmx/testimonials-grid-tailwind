/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barlowSemiCondensed:["Barlow Semi Condensed", "sans-serif"]
      },
      colors:{
        purple50: 'hsl(260, 100%, 95%)',
        purple300: 'hsl(264, 82%, 80%)',
        purple500: 'hsl(263, 55%, 52%)',
        white: 'hsl(0, 0%, 100%)',
        grey100: 'hsl(214, 17%, 92%)',
        grey200: 'hsl(0, 0%, 81%)',
        grey400: 'hsl(224, 10%, 45%)',
        grey500: 'hsl(217, 19%, 35%)',
        darkBlue: 'hsl(219, 29%, 14%)',
        black: 'hsl(0, 0%, 7%)',
      }
    },
  },
  plugins: [],
}

