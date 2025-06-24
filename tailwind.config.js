import tailwindcss from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default tailwindcss({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#5856eb",
          700: "#4f46e5",
        },
      },
    },
  },
  plugins: [],
});
