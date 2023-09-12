import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5C40FF",
        secundary: "#0CFF87",
        alternative: "#85FFC3",
        colorText: "#3D1DF3",
        cardColor: "#FFFFFF",
        deliverydp: "#C7FFB1",
      },
      screens: {
        xs: { max: "639px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "2001px" },
      },
    },
  },
  plugins: [],
};
export default config;
