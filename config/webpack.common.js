const path = require('path');
const Dotenv = require('dotenv-webpack');

const { generateHtmlPlugins } = require('./utils');
const htmlPlugins = generateHtmlPlugins('../src/views/');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new Dotenv({
      path: './.env',
    }),
  ].concat(htmlPlugins),
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
  },
  output: {
    filename: '[name][fullhash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
};
