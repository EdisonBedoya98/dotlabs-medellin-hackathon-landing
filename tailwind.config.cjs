/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(28, 13, 93)",
        alternate: "rgb(var(--alternate-color) / 1)",
        "back-white": "rgb(255 255 255 / 0.5)",
        "yellow-custom": "rgb(234, 217, 76)",
        "orange-dimmed": "rgba(221, 115, 115, 1)",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        header: "15rem  1fr 15rem",
      },
    },
  },
  plugins: [],
};
