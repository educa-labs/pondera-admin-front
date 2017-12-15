const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
});

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    overlay: true,
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'svg-react-loader',
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
