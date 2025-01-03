/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'hurricane': ['"Hurricane"', "sans-serif"], // Add the font name here
      },
    },
  },
  plugins: [],
  
};
