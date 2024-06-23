import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // or 'media' or false
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 100% 100%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-gray': '#D8D8D8',
        'custom-green': '#14FE00',

      },
    },
  },
  plugins: [],
}
export default config
