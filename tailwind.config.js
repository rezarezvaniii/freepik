// /** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");


// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         yekan:['yekan' , 'sans-setif'],
        
//       }
//     },
//   },
//   plugins: [],
// });

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan:['yekan' , 'sans-setif'],
        
      }
    },
  },
  plugins: [],
}