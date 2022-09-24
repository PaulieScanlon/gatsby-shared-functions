module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  safelist: [{ pattern: /from|to|text|stroke|fill|bg|border-(sky|blue|pink|purple|lime|green)/, variants: [] }],
  theme: {
    extend: {
      colors: {
        default: '#663399',
        primary: '#7026b9',
        lighter: '#a456f0',
        highlight: '#c9c9c9',
        background: '#11081f'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
