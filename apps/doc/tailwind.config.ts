import { Config } from "tailwindcss";
import shaded from "@llm.report/tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{mdx,ts,tsx}"],
  presets: [shaded],
} satisfies Config;
