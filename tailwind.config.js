/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#4E71FF",
          600: "#3b82f6",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#8DD8FF",
          600: "#0ea5e9",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      gradients: "",
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const newUtilities = {
        [`.hover\\:to-primary-600:hover`]: {
          "--tw-gradient-to": theme("colors.primary-600"),
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
