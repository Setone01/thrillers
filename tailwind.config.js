/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navyBlue: "#2b3467",
        smokeWhite: "rgba(241, 247, 255, 0.9)",
        graywhite: "",
      },
      screens: {
        xs: "260px",
        sm: "640px",
        md: "765px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
