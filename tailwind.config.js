/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        // => @media print { ... }
      },
      fontFamily: {
        manuscrit: '"Alex Brush"',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
