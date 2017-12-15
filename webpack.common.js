const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'main.css',
  disable: process.env.NODE_ENV !== 'production',
});

module.exports = {
  entry: [
    './src/index.js',
  ],
  plugins: [
    extractSass,
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
        test: /\.scss$/,
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader',
        }),
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
