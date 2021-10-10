module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#252525",
        blue: "#00b4d8",
        brown: "#9c6644",
        green: "#4ad66d",
        grey: "#adb5bd",
        orange: "#fb8500",
        red: "#ef233c",
        semiGray: "#ced4da",
      },
      textColor: {
        black: "#313131",
        semiBlack: "#343a40",
      },
      backgroundColor: {
        black: "#252525",
        blue: "#00b4d8",
        brown: "#9c6644",
        green: "#4ad66d",
        grey: "#adb5bd",
        orange: "#fb8500",
        red: "#ef233c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
