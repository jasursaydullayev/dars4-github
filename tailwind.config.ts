import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': { 'max': '375px' },
      },
      colors: {
        'both-blue': "#0079FF",
        'ligth-grey': "#697C9A",
        'opacity-blue': "#4B6A9B",
        'light-dark': "#2B3442",
        'light-blue': "#F6F8FF",
        'light-white': "#FEFEFE",
        'dark-black': "#141D2F",
        'dark-opacity-blue': "#1E2A47"
      }
    },
  },
  plugins: [],
};
export default config;
