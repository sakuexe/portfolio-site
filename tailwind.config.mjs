import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f7f6f9',
          '100': '#efedf1',
          '200': '#dad7e0',
          '300': '#b9b4c5',
          '400': '#928ba5',
          '500': '#756d8a',
          '600': '#5f5772',
          '700': '#4e475d',
          '800': '#433e4e',
          '900': '#3b3644',
          '950': '#242129',
          DEFAULT: '#242129',
        },
        'secondary': {
          // make an alias for the secondary color
          // add a default value as well
          ...colors.purple,
          DEFAULT: colors.purple[500],
        },
        'accent': {
          // make an alias for the accent color
          // add a default value as well
          ...colors.orange,
          DEFAULT: colors.orange[300],
        },
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'mono': ['"Fira Code"', 'monospace'],
      },
      fontSize: {
        'header': ['clamp(4rem, 10vw, 7.5rem)', {
          lineHeight: '1',
        }],
        'subheader': ['clamp(3.2rem, 8vw, 4rem)', {
          lineHeight: '1',
        }]
      },
    },
  },
  plugins: [],
}
