/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
      boxShadow: {
        gray: "0 1px 4px 2px rgba(152,152,152,0.08)",
      },
      screens: {
        s: "320px",
        xs: "480px",
        md: "768px",
        lg: "1199px",
        xlg: "1920px",
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        red: "var(--red)",

        black100: "var(--black100)",
        black200: "var(--black200)",
        black300: "var(--black300)",
        black400: "var(--black400)",
        black500: "var(--black500)",

        gray100: "var(--gray100)",
        gray200: "var(--gray200)",
        gray300: "var(--gray300)",
        gray400: "var(--gray400)",
        gray500: "var(--gray500)",

        orange100: "var(--orange100)",
        orange200: "var(--orange200)",
        orange300: "var(--orange300)",
        orange400: "var(--orange400)",
        orange500: "var(--orange500)",

        blue100: "var(--blue100)",
        blue200: "var(--blue200)",
        blue300: "var(--blue300)",

        line100: "var(--line100)",
        line200: "var(--line200)",
      },
      writingMode: {
        horizontal: "horizontal-tb",
        vertical: "vertical-rl",
        "vertical-lr": "vertical-lr",
        sideways: "sideways-rl",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    function ({ addUtilities, theme, variants }) {
      const modes = theme("writingMode");
      const newUtilities = {};

      for (const [key, value] of Object.entries(modes)) {
        newUtilities[`.writing-mode-${key}`] = {
          writingMode: value,
        };
      }

      addUtilities(newUtilities, {
        variants: ["responsive"],
      });
    },
  ],
};
