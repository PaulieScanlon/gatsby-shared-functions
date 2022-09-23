module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  safelist: [{ pattern: /text|stroke|border-(sky|pink)/, variants: [] }],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
