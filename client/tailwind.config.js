/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seaBlue: "#064663",
        darkblue: "rgb(94, 130, 244)",
      },
    },
  },
  plugins: [],
};
