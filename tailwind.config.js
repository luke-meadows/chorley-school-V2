/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-yellow': '#F5A431',
        // 'theme-grey': '#0F111A',
        'theme-grey': '#393c49',
      },
      screens: {
        sm: '840px',
        // => @media (min-width: 640px) { ... }

        md: '1200px',
        // => @media (min-width: 768px) { ... }

        lg: '1500px',
        // => @media (min-width: 1024px) { ... }

        xl: '1680px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '2000px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
