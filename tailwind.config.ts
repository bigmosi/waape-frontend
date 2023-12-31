import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-blue': '#000B47',
        'black': '#000',
        'darkblue': '#151e3d',
        'lightblue': '#5c95ff',
        'ghostwhite': '#f8f8ff',
        'graycolor': '#a9a9a9',
        'textcolor': '#F7EFE5',
        'newcolor': '#202020',
        'greencolor': '#48d64c',
        'textsmall': '#BDBDBD',
        'lighgray': '#989898'
      },
      boxShadow: {
        'custom-shadow': '0 4px 6px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config
