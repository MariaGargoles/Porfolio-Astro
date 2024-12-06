/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel Variable"', "serif"],
        syne: ['"Syne Variable"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },

  plugins: [],
};
