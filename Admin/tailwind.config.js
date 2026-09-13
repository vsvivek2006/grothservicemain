/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#6A0DAD",
        },
        yellow: {
          400: "#FFD700",
        },
        green: {
          400: "#25D366",
        },
      },
    },
  },
  plugins: [],
};
