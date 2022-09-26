module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  safelist: [{ pattern: /from|to|text|stroke|fill|bg|ring|border-(sky|blue|pink|purple|lime|green)/, variants: ['peer-checked'] }],
  theme: {
    extend: {
      colors: {
        default: '#663399',
        primary: '#7026b9',
        lighter: '#a456f0',
        highlight: '#dadada',
        background: '#11081f',
        offset: '#170730'
      },
      keyframes: {},
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              '&::before': {
                content: '"" !important'
              },
              '&::after': {
                content: '"" !important'
              }
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
