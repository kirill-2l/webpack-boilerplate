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
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.pug$/i,
        use: [{ loader: 'pug-loader', options: { pretty: true } }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@images': path.resolve(__dirname, '../src/assets/img'),
      '@fonts': path.resolve(__dirname, '../src/assets/fonts'),
    },
  },
};
