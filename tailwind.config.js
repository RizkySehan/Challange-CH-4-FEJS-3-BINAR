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
        primary: "#04152d",
        altPrimary: "#041226",
      },
    },
  },
  plugins: [],
};
