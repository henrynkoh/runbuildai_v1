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
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'secondary': 'var(--secondary)',
        'background-dark': 'var(--background-dark)',
        'background-light': 'var(--background-light)',
        'text-light': 'var(--text-light)',
        'text-dim': 'var(--text-dim)',
        'accent': 'var(--accent)',
      },
    },
  },
  plugins: [],
}

export default config;
