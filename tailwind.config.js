/**
 * @type { import('tailwindcss').Config }
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html, tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      'serif': ['Helvetica, Arial, serif', ...defaultTheme.fontFamily.serif],
      'mono': ['ui-monospace', 'SFMono-Regular' ],
      'display': ['Oswald', 'ui-rounded' ],
      'body': ['Inter' ],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


