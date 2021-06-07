module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',

      /*
       * fix tailwind build error
       * https://github.com/tailwindlabs/tailwindcss/issues/1190
       */
      features: {
        'focus-within-pseudo-class': false,
      },
    },
  },
};
