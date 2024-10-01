/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
      
      },
      fontFamily: {
        Figtree: "Figtree, sans-serif",
      },
    },
  },
  plugins: [],
};
