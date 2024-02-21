import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "375px",
      },
      colors: {
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(275, 100%, 97%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        'work-sans': 'var(--font-work-sans)',
      }
    },
  },
  plugins: [],
};
export default config;
