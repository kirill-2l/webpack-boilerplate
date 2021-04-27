const path = require('path');
const { generateHtmlPlugins } = require('./utils');

const htmlPlugins = generateHtmlPlugins('./src/views');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [].concat(htmlPlugins),
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
  },
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
