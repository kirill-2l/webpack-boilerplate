const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    stats: 'errors-warnings',
    contentBase: paths.output,
    watchContentBase: true,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    ...paths.server,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
});
