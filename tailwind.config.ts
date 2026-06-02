import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cucinelli-inspired light palette. Warm, considered, generous.
        cream: "#FAF7F2",     // page background, raw silk
        eggshell: "#FFFEFA",  // elevated cards / subtle layering
        espresso: "#2B2622",  // primary text, warm near-black
        walnut: "#5C5048",    // secondary text
        taupe: "#9A8F84",     // meta, labels
        linen: "#E5DDD2",     // hairline dividers
        accent: "#8B5A3C",    // walnut accent (replaces amber for light mode)
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
