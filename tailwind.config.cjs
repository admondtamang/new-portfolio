/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "offset-black": "2px 2px black",
      },
    },
  },

  // plugins: [require("daisyui")],
};
