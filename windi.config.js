import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";
import forms from "windicss/plugin/forms";
import lineClamp from "windicss/plugin/line-clamp";
import Config from "./config";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [typography, forms, lineClamp],
});
