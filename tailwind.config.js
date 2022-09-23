module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  safelist: [{ pattern: /from|to|text|stroke|bg|border-(sky|blu|pink|purple|lime|green)/, variants: [] }],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
