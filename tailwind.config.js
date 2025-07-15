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
        xs500: "500px",
        lg900: "900px",
        lg1050: "1050px",
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
        black600: "var(--black600)",

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
      keyframes: {
        scrollAni: {
          "0%": { top: "0", opacity: "1" },
          "25%": { height: "50px" },
          "100%": { top: "100%", opacity: "0" },
        },
        scrollAniMouse: {
          "0%": { top: "-5px" },
          "50%": { top: "5px" },
          "100%": { top: "-5px" },
        },
        slideRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        popupShow: {
          "0%": { opacity: 0, transform: "translateY(20px) scale(0.8)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        popupHide: {
          "0%": { opacity: 1, transform: "translateY(0) scale(1)" },
          "100%": { opacity: 0, transform: "translateY(20px) scale(0.8)" },
        },
        progress: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: " translateX(0%)" },
        },
      },
      animation: {
        scrollAni: "scrollAni 1s ease-in-out infinite",
        scrollAniMouse: "scrollAniMouse 1s infinite",
        slideRight: "slideRight 50s linear infinite",
        popupShow: "popupShow 0.3s forwards ease-out",
        popupHide: "popupHide 0.3s forwards ease-in",
        progress: "progress 4s linear forwards",
      },
    },
    fontFamily: {
      roboto: ["roboto"],
      robotoSlab: ["robotoSlab"],
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
