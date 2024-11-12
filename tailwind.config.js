/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#fcbf49",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        bodyBanner:
          "url('../img/Banner-img.png')",
        banner2:
          "url('../img/bg-trees.png')",
      },
    },
  },
  plugins: [],
};

