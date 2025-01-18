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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle at center top, rgba(37,49,168,1) 10%, rgba(3,4,14,1) 70%)',
        'footer-gradient': 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(127,47,207,1) 35%, rgba(2,0,36,1) 100%);'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
