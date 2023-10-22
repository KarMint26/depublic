/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-primary': '#FAFAFA',
        'landing-top': '#FDF9F0',
        'nav-clr': '#FFFFFF',
        'primary': '#A103D3',
      },
      textColor: {
        'primary': '#A103D3',
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
      },
      borderColor: {
        'primary': '#EEEEEE',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
