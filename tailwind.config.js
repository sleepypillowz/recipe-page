/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        // primary
        'nutmeg': 'hsl(14, 45%, 36%)',
        'dark-raspberry': 'hsl(332, 51%, 32%)',
        // neutral
        'white': 'hsl(0, 0%, 100%)',
        'rose-white': 'hsl(330, 100%, 98%)',
        'eggshell': 'hsl(30, 54%, 90%)',
        'light-grey': 'hsl(30, 18%, 87%)',
        'wenge-brown': 'hsl(30, 10%, 34%)',
        'dark-charcoal': 'hsl(24, 5%, 18%)',
      },
      fontFamily: {
        outfit: ['Outfit'],
        youngserif:['Young Serif'],
        youngserif400: ['Young Serif', 'serif', '400'],
        youngserif600: ['Young Serif', 'serif', '600'],
        youngserif700: ['Young Serif', 'serif', '700'],
      },
      spacing: {
        '32': '128px',
        '33': '136px',
        '34': '144px',
        '35': '152px',
        '36': '160px',
        '37': '168px',
        '38': '176px',
        '39': '184px',
        '40': '192px',
        '41': '200px',
        '42': '208px',
        '43': '216px',
        '44': '224px',
      }
    },
  },
  plugins: [],
};
