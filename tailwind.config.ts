import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#223631",
        "custom-text": "#b2a379",
      },
      fontFamily: {
        custom: ["BerkeleyMono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
