module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        blue: "0 4px 14px 0 rgba(19, 51, 81, 0.39)",
        nprogress: "0 0 0 10px blue",
      },
      fontFamily: { arial: ["Arial Rounded MT Bold", "sans-serif"] },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
