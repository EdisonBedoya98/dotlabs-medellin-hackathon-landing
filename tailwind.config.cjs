/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        main: "rgb(28, 13, 93)",
        alternate: "rgb(var(--alternate-color) / 1)",
        "back-white": "rgb(255 255 255 / 0.5)",
        "yellow-custom": "rgb(234, 217, 76)",
        "orange-dimmed": "rgba(221, 115, 115, 1)",
        //hover: "rgb(var(--hover-color) / 1)",
        // "dark-blue": "rgb(var(--dark-blue) / 1)",
        /*    "gradient-purple": "#a557f2",
        "gradient-blue": "#347ebf",
        "base-gray": "rgb(71 71 71 / 1)",
        "back-gray": "rgb(244 244 244 / 1)",
        "gray-font": "rgb(70 70 70 / 1)", */
      },
      gridTemplateColumns: {
        // Simple 16 column grid

        // Complex site-specific column configuration
        header: "15rem  1fr 15rem",
      },
    },
  },
  plugins: [],
};
