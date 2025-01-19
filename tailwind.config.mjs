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
        "custom-gradient":
          "radial-gradient(circle at center top, rgba(37,49,168,1) 10%, rgba(3,4,14,1) 70%)",
        "border-gradient":
          "linear-gradient(142.48deg, #2340d5 2.46%, #2340d5 2.47%, #c82e53 52.9%, #7f2fcf 102.3%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
