// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'brand-gradient': 'linear-gradient(270deg, #ffdde1, #ee9ca7, #a1c4fd, #c2e9fb, #d4fc79, #96e6a1)',
//       },
//       animation: {
//         'gradient-x': 'gradient-x 15s ease infinite',
//       },
//       keyframes: {
//         'gradient-x': {
//           '0%, 100%': { 'background-position': '0% 50%' },
//           '50%': { 'background-position': '100% 50%' },
//         },
//       },
//       fontFamily: {
//         sans: ['Inter', 'ui-sans-serif', 'system-ui'],
//         script: ['Dancing Script', 'cursive'],
//         display: ['Playfair Display', 'serif'], 
//       },
//     },
//   },
//   plugins: [],
// }



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'brand-gradient': 'linear-gradient(270deg, #ffdde1, #ee9ca7, #a1c4fd, #c2e9fb, #d4fc79, #96e6a1)',
//       },
//       animation: {
//         'gradient-x': 'gradient-x 15s ease infinite',
//       },
//       keyframes: {
//         'gradient-x': {
//           '0%, 100%': { 'background-position': '0% 50%' },
//           '50%': { 'background-position': '100% 50%' },
//         },
//       },
//       fontFamily: {
//         sans: ['Inter', 'ui-sans-serif', 'system-ui'],
//         script: ['Dancing Script', 'cursive'],
//         display: ['Playfair Display', 'serif'], 
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brand-gradient': 
          'radial-gradient(circle at 20% 20%, #da77d6ff, transparent 25%), \
           radial-gradient(circle at 80% 30%, #6b7df3ff, transparent 25%), \
           radial-gradient(circle at 40% 80%, #59b465ff, transparent 25%), \
           radial-gradient(circle at 70% 70%, #f38b99ff, transparent 25%)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 25s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%':   { 'background-position': '0% 0%, 100% 0%, 0% 100%, 100% 100%' },
          '25%':  { 'background-position': '50% 0%, 100% 50%, 0% 50%, 50% 100%' },
          '50%':  { 'background-position': '100% 0%, 0% 50%, 100% 100%, 0% 100%' },
          '75%':  { 'background-position': '50% 100%, 0% 50%, 100% 50%, 50% 0%' },
          '100%': { 'background-position': '0% 0%, 100% 0%, 0% 100%, 100% 100%' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        script: ['Dancing Script', 'cursive'],
        display: ['Playfair Display', 'serif'], 
         heading: ["Raleway", "sans-serif"],            // main headings
  body: ["Verdana", "Geneva", "Tahoma", "sans-serif"],  // paragraphs
  footer: ["Source Sans 3", "sans-serif"],       // footer text
  decorative: ["Allura", "cursive"],             // AI Payroll, Accounting
  slogan: ["Homemade Apple", "cursive"],        
      },
      fontSize: {
  heading40: "40px",   // for big headings
  heading32: "32px",   // for decorative
  body18: "17.6px",    // for paragraph
  body16: "16px",      // for footer & links
},
    },
  },
  plugins: [],
}
