/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#196AC6",
        darkBrand: "#274058",
        lightBrand: "#EFF4FB",
      },
    },
  },
  plugins: [],
};
