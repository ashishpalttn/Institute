const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      // gray: colors.sky,
      // blue: colors.blue,
      // white:colors.black,
      green:{
        700:'#00FF00'
      },
      red: {
        700:'#FF0000'
      },
        'white': {
          50: 'rgba(255, 255, 255, 0.5)', // Represents 50% opacity
          100: '#f9fafb', // Very light gray (off-white)
          200: '#f3f4f6', // Slightly darker off-white
          300: '#e5e7eb', // Light gray
          400: '#d1d5db', // Mid-light gray
          500: '#9ca3af', // Mid-gray
          600: '#6b7280', // Darker gray
          700: '#ffffff', // 100% white
          800: '#374151', // Dark gray
          900: '#1f2937', // Near black
          950: '#111827'  // Very dark gray
      },
      'primary':{
        50:'#f0f9ff',
        100:'#e0f2fe',
        200:'#bae6fd',
        300:'#7dd3fc',
        400:'#38bdf8',
        500:'#0ea5e9',
        600:'#0284c7',
        700:'#0369a1',
        800:'#075985',
        900:'#0c4a6e',
        950:'#082f49'//header and footer
      },
      'yellow':{
        50: '#fffbea',
        100: '#fff3c4',
        200: '#fce588',
        300: '#fadb5f',
        400: '#f7c948',
        500: '#f0b429',
        600: '#de911d',
        700: '#cb6e17',
        800: '#b44d12',
        900: '#8d2b0b',
        950: '#7a3410',  // deeper yellow-orange tone
      },
      'green': {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#064e3b',  // deeper green tone
      },
      'gray': {
        50:  '#f9fafb',   // very light gray
        100: '#f3f4f6',   // light gray
        200: '#e5e7eb',   // soft gray
        300: '#d1d5db',   // neutral gray
        400: '#9ca3af',   // medium gray
        500: '#6b7280',   // standard gray
        600: '#4b5563',   // darker gray
        700: '#374151',   // dark gray
        800: '#1f2937',   // very dark gray
        900: '#111827',   // near-black gray
        950: '#0b0f18',   // deepest gray tone, almost black
      },


      // secondary:{

      // },
      // tertiary:{

      // }
    },
    extend: {},
  },
  plugins: [],
}

// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
