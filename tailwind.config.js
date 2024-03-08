/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fffbfc",
          100: "#fdf1f1",
          200: "#fbdee0",
          300: "#f8c5c8",
          400: "#f4a5a9",
          500: "#ef7d82",
          600: "#e94e56",
          700: "#de1b25",
          800: "#7c0f15",
          900: "#41080b",
          950: "#2d0608",
        },
        white: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#808080",
          900: "#333333",
          950: "#1a1a1a",
        },
        gray: {
          50: "#fbfbfb",
          100: "#efefef",
          200: "#dbdbdb",
          300: "#bfbfbf",
          400: "#9b9b9b",
          500: "#707070",
          600: "#3c3c3c",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          md: "1rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
