
module.exports = {
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
        primary: "var(--primary)",
        element: "#d3e97a"
      },
      dropShadow: {
        social: '0 5px 20px rgba(211, 233, 122, 0.6)',
        services: '0 5px 10px rgba(225, 225, 225, 0.6)'
      },
    },
  },
  plugins: [],
}
