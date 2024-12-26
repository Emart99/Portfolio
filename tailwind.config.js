/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind")
export default {
  
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
     './node_modules/flyonui/flyonui.js',
     ["./src/*.html"],
    ],
  plugins: [
     require('flyonui'),
     require('flyonui/plugin'),
     addDynamicIconSelectors(),
     require('tailwindcss-motion'),
     require('tailwindcss-intersect') 
    ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        ],
      },
    },
  },
  flyonui: {
    themes: [
        
      {
        lightCoffee:{
          primary:'#61504B',
          secondary:'#AB9A8C',
          accent:'#766158',
          neutral:'#2A2220',
          "base-100":'#EDEAE7',
          "base-200":'#E2DDD7',
          fontFamily: 'Archivo'

        }
      },
      "luxury"
      ],
  },
  
};
