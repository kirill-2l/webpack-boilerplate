const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: [
      path.join(__dirname, '../src/views'),
      path.join(__dirname, '../src/assets'),
    ],
    watchContentBase: true,
    port: 9090,
    historyApiFallback: true,
    compress: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
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
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
});
