/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lotaBold : ["rota-bold"],
        rotaExtraBold : ["rota-Exrabold", "sans-serif"],
        ethosNovaMedium : ["ethos-nova-medium", "sans-serif"],
        ethosNovaRegular : ["ethos-nova-regular", "sans-serif"],
        
      },
     
    },


  },
  plugins: [require("daisyui")],
};
