/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
