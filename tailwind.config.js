/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F0E5",
        surface: "#FFF9EF",
        sand: "#EDE3D3",
        ink: "#24211D",
        muted: "#777064",
        line: "#D9CEBD",
        accent: "#B46F45",
        darkaccent: "#45382F"
      },
      boxShadow: {
        soft: "0 14px 50px rgba(69,56,47,.08)",
        panel: "0 8px 30px rgba(69,56,47,.06)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};