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
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#111827",
          950: "#000000",
        },
        secondary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
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
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
};
