/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          light: '#FEF3E2', // 연노랑색 (기존 primary)
          dark: '#fab12f', // 진노랑색 (기존 tertiary)
          hover: '#fa812f', // 진노랑색 (기존 tertiary)
        },
        green: {
          DEFAULT: '#155e13', // 녹색 (기존 secondary)
        },
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
