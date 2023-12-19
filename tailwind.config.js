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
        200: "500px",
      },
      backgroundColor: {
        glassmorph: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
