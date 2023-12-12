import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
      },
      colors: {
        martinique: {
          "50": "#f3f5fb",
          "100": "#e5e8f4",
          "200": "#d1d8ec",
          "300": "#b1bedf",
          "400": "#8b9ccf",
          "500": "#6f7fc2",
          "600": "#5c67b4",
          "700": "#5157a4",
          "800": "#464887",
          "900": "#3c3f6c",
          "950": "#2b2c48",
        },
        "brown-pod": {
          "50": "#fdf9ed",
          "100": "#f8eecd",
          "200": "#f1da96",
          "300": "#f7c987",
          "400": "#e5ac3a",
          "500": "#dd8e23",
          "600": "#c36c1c",
          "700": "#a34e1a",
          "800": "#853d1b",
          "900": "#6d341a",
          "950": "#401a0a",
        },
        "coral-red": {
          "50": "#fff1f1",
          "100": "#ffe1e2",
          "200": "#ffc7c8",
          "300": "#ffa0a2",
          "400": "#ff6a6d",
          "500": "#f83b3f",
          "600": "#e61c20",
          "700": "#c11418",
          "800": "#a01417",
          "900": "#84181a",
          "950": "#480708",
          "special": "#ff7e81",
        },
        astral: {
          "50": "#f1f7fa",
          "100": "#dceaf1",
          "200": "#bdd7e4",
          "300": "#8fbad1",
          "400": "#5a93b6",
          "500": "#3f789b",
          "600": "#376283",
          "700": "#32526c",
          "800": "#30465a",
          "900": "#2b3c4e",
          "950": "#192633",
        },
      },
    },
  },
  plugins: [],
};
export default config;
