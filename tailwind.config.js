module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'from-sky-400',
    'from-pink-400',
    'from-lime-400',
    'to-blue-500',
    'to-purple-500',
    'to-lime-500',
    'text-sky-400',
    'text-pink-400',
    'text-lime-400',
    'text-sky-500',
    'text-pink-500',
    'text-lime-500',
    'fill-sky-400',
    'fill-pink-400',
    'fill-lime-400',
    'fill-sky-600',
    'fill-pink-600',
    'fill-lime-600',
    'stroke-sky-400',
    'stroke-pink-400',
    'stroke-lime-400',
    'stroke-sky-500',
    'stroke-pink-500',
    'stroke-lime-500',
    'peer-checked:bg-sky-300',
    'peer-checked:bg-pink-300',
    'peer-checked:bg-lime-300',
    'bg-sky-400',
    'bg-pink-400',
    'bg-lime-400'
  ],
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
