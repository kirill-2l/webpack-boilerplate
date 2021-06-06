const Dotenv = require('dotenv-webpack');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

const paths = require('./paths');
const { generateHtmlPlugins } = require('./utils');

const htmlPlugins = generateHtmlPlugins('../src/views/');

module.exports = smp.wrap({
  entry: {
    app: './src/index.js',
  },
  stats: 'normal',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
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
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              root: paths.alias['@'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: paths.alias,
  },
  plugins: [
    new Dotenv({
      path: './.env',
    }),
  ].concat(htmlPlugins),
});
