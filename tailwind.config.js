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
      'white':{
        700:'#FFFFFF'
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
