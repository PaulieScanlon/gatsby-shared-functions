module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  safelist: [{ pattern: /from|to|text|stroke|fill|bg|border-(sky|blue|pink|purple|lime|green)/, variants: [] }],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
