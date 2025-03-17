/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          light: "#FEF3E2",
          dark: "#fab12f",
          hover: "#fa812f"
        },
        green: {
          DEFAULT: "#155e13"
        },
        finance: {
          income: "#22c55e",
          expense: "#f43f5e"
        }
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"]
      }
    }
  },
  plugins: []
};
