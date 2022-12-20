/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "offset-black": "4px 4px black",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
