
/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'hard': '#1C1B1B',
        'mid':'#1C1B1BCC',
        'soft':'#1C1B1B99',
        'prim':'#2F80ED'
      },
    },
  },
  plugins: [],
}
