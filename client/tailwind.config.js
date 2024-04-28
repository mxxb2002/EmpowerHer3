/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
      stl: { min: "350px", max: "1280px" },
      stm: { min: "370px", max: "767px" },
      lsm: { max: "369px" },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        quicksand: ["Quicksand"],
      },
      backgroundImage: {
        "bg-image": "url('../public/assets/background-image.png')",
        "dash-bg": "url('../public/assets/dashboard-bg.jpg')",
      },
    },
  },
  plugins: [],
};
