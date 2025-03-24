/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Custom property for background
        foreground: "var(--foreground)",  // Custom property for foreground
      },
      fontFamily: {
        geist: ['Geist Mono', 'monospace'],  // Adding custom font family
      },
    },
  },
  plugins: [],
};
