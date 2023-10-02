/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "100%",
      },
      height: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
