import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#223631",
        "custom-text": "#bbaa7f",
      },
      fontFamily: {
        custom: ["BerkeleyMono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
