/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ], theme: {
    screens: {
      'sm': "100px",
      'md': '768px',
      'lg': '1024px',
      'xlg': '1280px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["fantasy"],
  },
}

