const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: 'svg-react-loader',
      },
    ],
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
};
